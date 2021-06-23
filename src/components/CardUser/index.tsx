import React from "react";

import { Container, Logo, Info } from "./styles";

import { FaUserAlt } from 'react-icons/fa'
import { IUser } from "../../pages/Users/Users";

interface ICardProps {
    user: IUser;
}

const Card: React.FC<ICardProps> = ({ user }) => {
    
  const { username, password, nivel } = user;

  return (
    <Container> 
        <Logo>
            <FaUserAlt />
          </Logo>
          <Info>
              <h3>{username}</h3>
              <p>Nivel: { nivel }</p>
          </Info>
    </Container>
  );
};

export default Card;