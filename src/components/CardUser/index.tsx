import React from "react";
import { Link } from 'react-router-dom';

import { Container, Logo, Info, SideBar } from "./styles";

import { FaUserAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { IUser } from "../../pages/ListarUsers";

interface ICardProps {
    user: IUser;
}

const Card: React.FC<ICardProps> = ({ user }) => {
    
  const { id, username, password, nivel } = user;

  return (
    <Container> 
        <Logo>
            <FaUserAlt />
          </Logo>
          <Info>
              <h3>{username}</h3>
              <p>Nivel: { nivel }</p>
      </Info>
      <SideBar>
        <Link to={`/users/${id}`} >
          <FiEdit className="edit" />
        </Link>
        <RiDeleteBin5Line className="delete" />
      </SideBar>
    </Container>
  );
};

export default Card;