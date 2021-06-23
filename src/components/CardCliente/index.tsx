import React from "react";

import { Container, Logo, Info } from "./styles";

import { FaUserAlt } from 'react-icons/fa'
import { ICliente } from "../../pages/Clientes";

interface ICardProps {
    cliente: ICliente;
}

const Card: React.FC<ICardProps> = ({ cliente }) => {
    
  const {nome, rg, cpf, dataNascimento, telefone } = cliente;

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
    </Container>
  );
};

export default Card;