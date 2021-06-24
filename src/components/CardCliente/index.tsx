import React from "react";

import { Container, Logo, Info, SideBar } from "./styles";

import { Link } from 'react-router-dom';

import { FaUserAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { ICliente } from "../../pages/ListarClientes";
import CpfMask from "../../utils/formatCpf";
import { formatDate } from "../../utils/formatDate";
import TelMask from "../../utils/formatTel";
import axios from "axios";
import { api_delete_cliente } from "../../consts/apis";
import { toast } from "react-toastify";

interface ICardProps {
  cliente: ICliente;
  reload: () => void;
}

const Card: React.FC<ICardProps> = ({ cliente, reload }) => {
    
  const { id, nome, rg, cpf, dataNascimento, telefone } = cliente;
  
  const deleteCliente = () => {
    axios.get(api_delete_cliente + "?id=" + id)
      .then(res => {
        toast.success("Cliente excluído!")
        reload();
      }).catch(error => {
        console.log(error);
      })
  }

  return (
    <Container> 
        <Logo>
            <FaUserAlt />
          </Logo>
          <Info>
              <h3>{nome}</h3>
              <div>
                <span>Rg: { rg }</span>
                <span>Cpf: { CpfMask(cpf) }</span>
              </div>
              <div>
                <span>Nascimento: { formatDate(dataNascimento)}</span>
                <span>{ telefone ? `Telefone: ${ TelMask(telefone) }` : "" }</span>
              </div>
      </Info>
      <SideBar>
        <Link to={`/clientes/${id}`} >
          <FiEdit className="edit" />
        </Link>
        <RiDeleteBin5Line className="delete" onClick={() => deleteCliente() } />
      </SideBar>
    </Container>
  );
};

export default Card;