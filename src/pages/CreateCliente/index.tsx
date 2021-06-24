import { Body, Container, Title, InputContainer, Footer } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';
import axios, { AxiosError } from "axios";
import { api_cadastar_cliente, api_cadastrar_user, api_get_cliente, api_get_user, api_update_cliente, api_update_user } from "../../consts/apis";
import { useEffect } from "react";
import TelefoneInput from "../../components/TelefoneInput";
import CpfInput from "../../components/CpfInput";
import validateCpf from "../../utils/validateCpf";

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

    const updateCpf = (value: string) => {
        setCliente({ ...cliente, cpf: value });
    }

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

    const getCliente= async () => {
        await axios.get(api_get_cliente + "?id=" + clienteId)
            .then(res => {
                setCliente(res.data.cliente);
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
        if(clienteId) getCliente();
    }, [clienteId])

    return (
        <Body>
            <Container>
                <Title>{ clienteId ? "Editar Cliente" : "Cadastar Cliente" }</Title>
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
                    <Button color="red" >Cancelar</Button>
                    <Button color="green" onClick={() => addCliente()}>Salvar</Button>
                </Footer>
                </Container>
        </Body>
    )
}

export default CreateCliente;