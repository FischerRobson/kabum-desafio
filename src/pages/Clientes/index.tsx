import axios from "axios";
import { useState, useEffect } from "react";

import { Container } from "./styles";

import { api_clientes } from "../../consts/apis";

import Card from '../../components/Card';
import { convertObjectToArray } from "../../utils/convertObjectToArray";

export interface ICliente {
    id: number;
    nome: string;
    dataNascimento: string;
    cpf: string;
    rg: string;
    telefone: string;
}

const Clientes = () => {

    const [ clientes, setClientes ] = useState<ICliente[]>([])

    const getClientes = async () => {
        const { data } = await axios.get(api_clientes);
        setClientes(convertObjectToArray(data.records));
    }

    useEffect(() => {
        getClientes();
    }, []);

    // useEffect(() => {
    //     clientes.map(cliente => {
    //         console.log(cliente)
    //     })
    // }, [clientes])

    return (
        <Container>
            { clientes.map(cliente => {
                return (
                    <Card key={cliente.id} cliente={cliente} />
            )
        })}
        </Container>
    )
}

export default Clientes;