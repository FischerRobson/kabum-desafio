import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { Header, Container, Content, AddCliente } from "./styles";

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
        await axios.get(api_listar_users)
            .then(res => {
                setUsers(convertObjectToArray(res.data.records))
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            });
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <Container>
                <Header>
                    <h3>Usuários: {users.length}</h3>
                    <Link to="/users/new" >
                        <AddCliente  >
                            <IoMdAdd />
                        </AddCliente>
                    </Link>
                </Header>
                <Content>
                    { users.map(user => {
                        return (
                        <Card key={user.id} user={user} />
                    )
                    })}
                </Content>
            </Container>
    )
}

export default Users;