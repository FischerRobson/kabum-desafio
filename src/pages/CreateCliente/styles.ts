import styled from "styled-components";

export const Body = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
`

export const Container = styled.div`
    padding: 10px 14px;
    background-color: ${(props) => props.theme.colors.primary};
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h3`
    color: ${(props) => props.theme.colors.white};
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;

    > input {
        margin-top: 15px;
    }
`

export const Footer = styled.footer`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    > button {
        width: 40%;
    }    

`