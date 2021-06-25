import { Body, Container, Title, InputContainer, Footer, Endereco, TableEnderecos } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import { api_cadastar_cliente, api_delete_endereco, api_get_cliente, api_update_cliente } from "../../consts/apis";
import { useEffect } from "react";
import TelefoneInput from "../../components/TelefoneInput";
import CpfInput from "../../components/CpfInput";
import validateCpf from "../../utils/validateCpf";
import CadastrarEndereco from "./CadastrarEndereco";
import { convertObjectToArray } from "../../utils/convertObjectToArray";
import { IEndereco } from './CadastrarEndereco';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Collapse from "@kunukn/react-collapse";
import { IoHome } from 'react-icons/io5';
import { Table } from 'reactstrap';

type UserRouteParams = {
  id: string;
}

interface ICliente {
  id: number;
  nome: string;
  cpf: string;
  rg: string;
  dataNascimento: string;
  telefone?: string;
  enderecos?: IEndereco[];
}

const CreateCliente = () => {

  const history = useHistory();

  const params = useParams<UserRouteParams>();
  const clienteId = params.id;

  const [cliente, setCliente] = useState<ICliente>({
    nome: "",
    cpf: "",
    rg: "",
    dataNascimento: "",
    telefone: "",
  } as ICliente);

  const [showAddressRegister, setShowAddressRegister] = useState(false);

  const closeAddressRegister = () => {
    setShowAddressRegister(false);
  }

  const [editAddress, setEditAddress] = useState<IEndereco>({} as IEndereco);

  const updateInputValue = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setCliente({
      ...cliente,
      [name]: value
    })
  }

  const returnPage = () => {
    return history.goBack();
  }

  const saveCliente = () => {
    axios.post(api_cadastar_cliente, {
      nome: cliente.nome,
      dataNascimento: cliente.dataNascimento,
      cpf: cliente.cpf,
      rg: cliente.cpf,
      telefone: cliente.telefone ?? ""
    }).then(res => {
      toast.success("Cliente Cadastrado!", {
        onOpen: () => returnPage(),
      })
    }
    ).catch(error => {
      console.log(error);
      console.log(error.message);
    })
  }

  const getCliente = async () => {
    await axios.get(api_get_cliente + "?id=" + clienteId)
      .then(res => {
        const cliente = res.data.cliente;
        let enderecos = convertObjectToArray(cliente.enderecos);
        enderecos = convertObjectToArray(enderecos);
        console.log(enderecos)
        cliente.enderecos = [...enderecos]
        console.log(enderecos)
        setCliente(cliente);
      }).catch(error => {
        console.log(error);
      })
  }

  const updateCliente = async () => {
    await axios.post(api_update_cliente, cliente)
      .then(res => {
        toast.success("Cliente Atualizado!", {
          onOpen: () => returnPage(),
        })
      }
      ).catch(error => {
        console.log(error);
        console.log(error.message);
      })
  }

  const addCliente = () => {
    if (!cliente.nome || !cliente.cpf || !cliente.dataNascimento || !cliente.rg) return toast.warn("Preencha todos os campos!");
    if (!validateCpf(cliente.cpf)) return toast.warn("CPF inválido");
    if (clienteId) updateCliente();
    else saveCliente();
  }

  useEffect(() => {
    if (clienteId) getCliente();
  }, [clienteId]);

  const editAdress = (address: IEndereco) => {
    setEditAddress(address);
    setShowAddressRegister(true);
  }

  const deleteEndereco = (id: number | null) => {
    if (!id) return;
    axios.get(api_delete_endereco + "?id=" + id)
      .then(res => {
        toast.success("Endereço excluído", {
          onOpen: () => getCliente()
        })
      }).catch(error => {
        console.log(error);
      })
  }

  return (
    <Body>
      <Container>
        <Title>{clienteId ? "Editar Cliente" : "Cadastar Cliente"}</Title>
        <InputContainer>
          <Input
            type="text"
            placeholder="Digite o nome do Cliente"
            name="nome"
            value={cliente.nome}
            onChange={(e) => updateInputValue(e)}
          />
          <CpfInput
            name="cpf"
            value={cliente.cpf}
            onChange={(e) => updateInputValue(e)}
          />
          <Input
            type="text"
            placeholder="Digite o RG do Cliente"
            name="rg"
            value={cliente.rg}
            onChange={(e) => updateInputValue(e)}
          />
          <Input
            type="date"
            name="dataNascimento"
            value={cliente.dataNascimento}
            onChange={(e) => updateInputValue(e)}
          />
          <TelefoneInput
            name="telefone"
            value={cliente.telefone}
            onChange={(e) => updateInputValue(e)}

          />
        </InputContainer>
        <Footer>
          <Button color="red" onClick={() => returnPage()}>Cancelar</Button>
          <Button color="green" onClick={() => addCliente()}>Salvar</Button>
        </Footer>
        <div className="address" onClick={() => setShowAddressRegister(!showAddressRegister)}>
          <IoHome />
          <span>Cadastrar Endereço</span>
        </div>

      </Container>

      {cliente.enderecos && cliente.enderecos?.length > 0 && (
        <TableEnderecos>
          <h4>Endereços</h4>
          <Table hover responsive>
            <thead>
              <tr>
                <th>CEP</th>
                <th>Logradouro</th>
                <th>Número</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Uf</th>
                <th>Complemento</th>
              </tr>
            </thead>
            <tbody>
              {cliente.enderecos && cliente.enderecos.map(endereco => {
                return (
                  <tr key={endereco.id}>
                    <td>{endereco.cep}</td>
                    <td>{endereco.logradouro}</td>
                    <td>{endereco.numero}</td>
                    <td>{endereco.bairro}</td>
                    <td>{endereco.cidade}</td>
                    <td>{endereco.uf}</td>
                    <td>{endereco.complemento}</td>
                    <td className="option edit" onClick={() => editAdress(endereco)} ><FiEdit /></td>
                    <td className="option delete"><RiDeleteBin5Line onClick={() => deleteEndereco(endereco.id)} /></td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </TableEnderecos>
      )}

      <Endereco>
        <Collapse isOpen={showAddressRegister} >
          <CadastrarEndereco
            clienteId={Number(clienteId)}
            editAddress={editAddress}
            close={closeAddressRegister}
            reloadCliente={getCliente}
            addCliente={addCliente}
          />
        </Collapse>
      </Endereco>

    </Body>
  )
}

export default CreateCliente;
