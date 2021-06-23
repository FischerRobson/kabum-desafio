import { Body, Container, Title, InputContainer, Footer } from "./create_user_styles";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import { toast } from 'react-toastify';

const CreateUser = () => {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordConfirm, setUserPasswordConfirm] = useState("");

    const addUser = () => {
        if (!userName.trim() || !userPassword.trim() || !userPasswordConfirm.trim()) return toast.warn("Preencha todos os campos!");

        if (userPassword.trim() !== userPasswordConfirm.trim()) return toast.warn("As senhas são diferentes!");

        return toast.success("Usuário Cadastrado!");
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
                    <Button color="red">Cancelar</Button>
                    <Button color="green" onClick={() => addUser()}>Salvar</Button>
                </Footer>
                </Container>
        </Body>
    )
}

export default CreateUser;