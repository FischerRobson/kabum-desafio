import { Body, Container, Title, InputContainer, Row, Footer } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import { toast } from 'react-toastify';
import axios from "axios";
import { api_cadastar_endereco, api_update_endereco } from "../../consts/apis";
import { useEffect } from "react";
import CepInput from "../../components/CepInput";
import buscarCep from "../../utils/buscarCep";

export interface IEndereco {
  id: number | null;
  cep: string;
  logradouro: string;
  bairro: string;
  numero: string;
  cidade: string;
  uf: string;
  complemento?: string;
}

interface IEnderecoProps {
  clienteId: number;
  editAddress?: IEndereco;
  close: () => void;
  reloadCliente: () => void;
  addCliente: () => void;
}

const CadastrarEndereco: React.FC<IEnderecoProps> = ({ clienteId, editAddress, close, reloadCliente, addCliente }) => {

  const [endereco, setEndereco] = useState<IEndereco>({
    id: null,
    cep: "",
    logradouro: "",
    bairro: "",
    numero: "",
    cidade: "",
    uf: "",
    complemento: "",
  } as IEndereco);

  useEffect(() => {
    if (editAddress) setEndereco(editAddress);
  }, [editAddress])

  const updateInputValue = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setEndereco({
      ...endereco,
      [name]: value
    })
  }

  const cleanEndereco = () => {
    setEndereco({
      id: null,
      cep: "",
      logradouro: "",
      bairro: "",
      numero: "",
      cidade: "",
      uf: "",
      complemento: "",
    })
  }

  const findByCep = async () => {
    const data = await buscarCep(endereco.cep);
    setEndereco({ ...endereco, ...data })
  }

  const insertEndereco = () => {
    axios.post(api_cadastar_endereco, { ...endereco, clienteId: clienteId })
      .then(res => {
        toast.success("Endereço Cadastrado!", {
          onOpen: () => {
            reloadCliente();
            close();
            cleanEndereco();
          },
        })
      }
      ).catch(error => {
        console.log(error);
        console.log(error.message);
      })
  }

  const updateEndereco = () => {
    axios.post(api_update_endereco, { ...endereco, id: Number(endereco.id) })
      .then(res => {
        toast.success("Endereço Atualizado!", {
          onOpen: () => {
            reloadCliente();
            close();
            cleanEndereco();
          },
        })
      }
      ).catch(error => {
        console.log(error);
        console.log(error.message);
      })
  }

  const addEndereco = () => {
    if (!endereco.cep.trim() ||
      !endereco.bairro.trim() ||
      !endereco.logradouro.trim()
      || !endereco.numero.trim() ||
      !endereco.cidade.trim() ||
      !endereco.uf.trim())
      return toast.warn("Preencha todos os campos!");
    if (!clienteId) return addCliente();
    if (!endereco.id) insertEndereco();
    else updateEndereco();
  }

  return (
    <Body>
      <Container>
        <Title>{endereco.id ? "Editar Endereço" : "Cadastar Endereço"}</Title>
        <InputContainer>
          <CepInput
            name="cep"
            value={endereco.cep}
            onChange={(e) => updateInputValue(e)}
            onBlur={() => findByCep()}
          />
          <Input
            type="text"
            placeholder="Logradouro"
            name="logradouro"
            value={endereco.logradouro}
            onChange={(e) => updateInputValue(e)}
          />
          <Input
            type="text"
            placeholder="Bairro"
            name="bairro"
            value={endereco.bairro}
            onChange={(e) => updateInputValue(e)}
          />
          <Input
            type="text"
            placeholder="Cidade"
            name="cidade"
            value={endereco.cidade}
            onChange={(e) => updateInputValue(e)}
          />
          <Row>
            <Input
              type="text"
              placeholder="UF"
              name="uf"
              value={endereco.uf}
              onChange={(e) => updateInputValue(e)}
            />
            <Input
              type="text"
              placeholder="Número"
              name="numero"
              value={endereco.numero}
              onChange={(e) => updateInputValue(e)}
            />
          </Row>
        </InputContainer>
        <Footer>
          <Button color="red" onClick={() => close()} >Cancelar</Button>
          <Button color="green" onClick={() => addEndereco()}>{endereco.id ? "Editar" : "Cadastrar"}</Button>
        </Footer>
      </Container>
    </Body>
  )
}

export default CadastrarEndereco;
