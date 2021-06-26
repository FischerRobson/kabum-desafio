import React from "react";
import { Link, useHistory } from 'react-router-dom';

import { Container, Logo, Info, SideBar } from "./styles";

import { FaUserAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { IUser } from "../../pages/ListarUsers";
import { useAuth } from "../../hooks/AuthContext";
import axios from "axios";
import { api_delete_user } from "../../consts/apis";

interface ICardProps {
  user: IUser;
}

const Card: React.FC<ICardProps> = ({ user }) => {

  const history = useHistory();

  const { id, username, nivel } = user;

  const { loggedUser, signOut } = useAuth();

  const deleteUser = () => {
    axios.get(api_delete_user + "?id=" + id)
      .then(res => {
        history.push("/");
        signOut();
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <Container>
      <Logo>
        <FaUserAlt />
      </Logo>
      <Info>
        <h3>{username}</h3>
        <p>Nivel: {nivel}</p>
      </Info>
      {loggedUser.id === id && (
        <SideBar>
          <Link to={`/users/${id}`} >
            <FiEdit className="edit" />
          </Link>
          <RiDeleteBin5Line onClick={() => deleteUser()} className="delete" />
        </SideBar>
      )}
    </Container>
  );
};

export default Card;
