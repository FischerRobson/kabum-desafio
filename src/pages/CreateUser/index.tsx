import { Body, Container, Title, InputContainer, Footer } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import { api_cadastrar_user, api_get_user, api_update_user } from "../../consts/apis";
import { useEffect } from "react";

type UserRouteParams = {
  id: string;
}

const CreateUser = () => {

  const history = useHistory();

  const params = useParams<UserRouteParams>();
  const userId = params.id;

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");

  const insertUser = async () => {
    await axios.post(api_cadastrar_user, {
      username: userName,
      password: userPassword,
      nivel: 1
    }).then(res => {
      toast.success("Usuário Cadastrado!", {
        onOpen: () => returnPage(),
      })
    }
    ).catch(error => {
      console.log(error);
      console.log(error.message);
    })
  }

  const updateUser = async () => {
    await axios.post(api_update_user, {
      id: userId,
      username: userName,
      password: userPassword,
      nivel: 1
    }).then(res => {
      toast.success("Usuário Atualizado!", {
        onOpen: () => returnPage(),
      })
    }
    ).catch(error => {
      console.log(error);
      console.log(error.message);
    })
  }

  const getUser = async () => {
    await axios.get(api_get_user + "?id=" + userId)
      .then(res => {
        const { username } = res.data.user;
        setUserName(username);
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    if (userId) getUser();
  }, [userId])

  const addUser = () => {
    if (!userName.trim() || !userPassword.trim() || !userPasswordConfirm.trim()) return toast.warn("Preencha todos os campos!");
    if (userPassword.trim() !== userPasswordConfirm.trim()) return toast.warn("As senhas são diferentes!");
    if (!userId) insertUser();
    else updateUser();
  }

  const returnPage = () => {
    return history.goBack();
  }

  return (
    <Body>
      <Container>
        <Title>{userId ? "Editar Usuário" : "Cadastar Usuário"}</Title>
        <InputContainer>
          <Input
            name="user"
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Digite o nome do usuário"
            required
            value={userName}
          />
          <Input
            name="password"
            onChange={(e) => setUserPassword(e.target.value)}
            type="password"
            isPassword={true}
            placeholder="Digite a senha"
            required
          />
          <Input
            name="password"
            onChange={(e) => setUserPasswordConfirm(e.target.value)}
            type="password"
            isPassword={true}
            placeholder="Confirme a senha"
            required
          />
        </InputContainer>
        <Footer>
          <Button color="red" onClick={() => returnPage()}>Cancelar</Button>
          <Button color="green" onClick={() => addUser()}>Salvar</Button>
        </Footer>
      </Container>
    </Body>
  )
}

export default CreateUser;
