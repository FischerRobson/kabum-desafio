import React, { ReactEventHandler, useState } from "react";
import { Container, Logo, Form, FormTitle } from "./styles";
import logoImg from '../../assets/images/kabum-logo.png';

import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/AuthContext";

const SignIn: React.FC = () => {
  document.title = "Wallet | Sign in";

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

      <Form onSubmit={() => handleSubmit()}>
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

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;