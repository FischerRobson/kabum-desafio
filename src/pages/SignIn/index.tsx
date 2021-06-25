import React, { ReactEventHandler, useState } from "react";
import { Container, Logo, Form, FormTitle } from "./styles";
import logoImg from '../../assets/images/kabum-logo.png';

import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/AuthContext";
import { ToastContainer } from "react-toastify";

const SignIn: React.FC = () => {

  const { signIn } = useAuth();

  const [user, setUser] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    signIn(user, password);
  };

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Wallet" />
      </Logo>

      <Form >
        <FormTitle>Entrar</FormTitle>

        <Input
          name="user"
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Digite seu nome de usuário"
          required
        />
        <Input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          isPassword={true}
          placeholder="Digite sua senha"
          required
        />

        <Button type="submit" color="red" onClick={() => handleSubmit()}>Acessar</Button>
        <Button type="button" color="green">Cadastrar-se agora!</Button>
      </Form>
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
    </Container>
  );
};

export default SignIn;
