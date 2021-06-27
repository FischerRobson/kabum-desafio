import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Header, Container, Content, AddCliente } from "./styles";

import { api_listar_clientes } from "../../consts/apis";

import Card from '../../components/CardCliente';
import { convertObjectToArray } from "../../utils/convertObjectToArray";
import { IoMdAdd } from 'react-icons/io'


export interface ICliente {
  id: number;
  nome: string;
  dataNascimento: string;
  cpf: string;
  rg: string;
  telefone: string;
}


const Clientes = () => {

  const [clientes, setClientes] = useState<ICliente[]>([]);

  const [reload, setReload] = useState(false);

  const reloadPage = () => {
    console.log('reload')
    setReload(!reload);
  }

  const getClientes = async () => {
    const { data } = await axios.get(api_listar_clientes);
    if (data) setClientes(convertObjectToArray(data.records));
  }

  useEffect(() => {
    getClientes();
  }, [reload]);

  return (
    <Container>
      <Header>
        <h3>Clientes: {clientes.length}</h3>
        <Link to="/clientes/new">
          <AddCliente >
            <IoMdAdd />
          </AddCliente>
        </Link>
      </Header>
      <Content>
        {clientes.map(cliente => {
          return (
            <Card key={cliente.id} cliente={cliente} reload={reloadPage} />
          )
        })}
      </Content>
    </Container>
  )
}

export default Clientes;
