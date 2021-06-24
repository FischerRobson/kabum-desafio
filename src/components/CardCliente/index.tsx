import React from "react";

import { Container, Logo, Info, SideBar } from "./styles";

import { Link } from 'react-router-dom';

import { FaUserAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { ICliente } from "../../pages/ListarClientes";

interface ICardProps {
    cliente: ICliente;
}

const Card: React.FC<ICardProps> = ({ cliente }) => {
    
  const { id ,nome, rg, cpf, dataNascimento, telefone } = cliente;

  return (
    <Container> 
        <Logo>
            <FaUserAlt />
          </Logo>
          <Info>
              <h3>{nome}</h3>
              <div>
                <span>Rg: </span><p>{ rg }</p>
                <span>Cpf: </span><p>{ cpf }</p> 
              </div>
              <div>
                <span>Nascimento: </span><p>{ dataNascimento }</p>
                <span>Telefone: </span><p>{ telefone }</p> 
              </div>
      </Info>
      <SideBar>
        <Link to={`/clientes/${id}`} >
          <FiEdit className="edit" />
        </Link>
        <RiDeleteBin5Line className="delete" />
      </SideBar>
    </Container>
  );
};

export default Card;