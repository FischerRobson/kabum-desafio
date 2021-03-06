import { Body, Container, Title, InputContainer, Footer } from "./createUserStyles";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { api_cadastrar_user, } from "../../consts/apis";
import { useAuth } from "../../hooks/AuthContext";


const CreateNewUser = () => {

  const history = useHistory();

  const { newUserCreated } = useAuth();

  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");

  const insertUser = async () => {
    await axios.post(api_cadastrar_user, {
      username: userName,
      password: userPassword,
      nivel: 1
    }).then(res => {
      toast.success("Usuário Cadastrado!", {
        onOpen: () => newUserCreated(userName),
      })
    }
    ).catch(error => {
      console.log(error);
      console.log(error.message);
    })
  }



  const addUser = () => {
    if (!userName.trim() || !userPassword.trim() || !userPasswordConfirm.trim()) return toast.warn("Preencha todos os campos!");
    if (userPassword.trim() !== userPasswordConfirm.trim()) return toast.warn("As senhas são diferentes!");
    if (userPassword.trim().length < 8) return toast.warn("A senha deve conter pelo menos 8 números!");
    insertUser();

  }

  const returnPage = () => {
    return history.goBack();
  }

  return (
    <Body>
      <Container>
        <Title>Cadastar Usuário</Title>
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Body>
  )
}

export default CreateNewUser;
