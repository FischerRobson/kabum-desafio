import axios from "axios";
import { useState, useEffect } from "react";

import { Header, Container, Content, AddCliente } from "./user_styles";

import Card from '../../components/CardUser';
import { convertObjectToArray } from "../../utils/convertObjectToArray";
import { IoMdAdd } from 'react-icons/io'
import { api_listar_users } from "../../consts/apis";

export interface IUser {
    id: number;
    username: string;
    password: string;
    nivel: number;
}

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    const getUsers = async () => {
        const { data } = await axios.get(api_listar_users);
        setUsers(convertObjectToArray(data.records));
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <Container>
                <Header>
                    <h3>Usuários: {users.length}</h3>
                    <AddCliente  >
                        <IoMdAdd />
                    </AddCliente>
                </Header>
                <Content>
                    { users.map(user => {
                        return (
                        <Card user={user} />
                    )
                    })}
                </Content>
            </Container>
    )
}

export default Users;