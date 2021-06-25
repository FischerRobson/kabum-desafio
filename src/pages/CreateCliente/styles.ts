import styled from "styled-components";

export const Body = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
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

export const Endereco = styled.div`
    width: 100%;
    margin-top: 20px;
`
export const Row = styled.div`
    display: flex;
    margin-top: 5px;
    width: 100%;
    justify-content: space-between;

    > input {
        width: 45%;
    }
`
export const TableEnderecos = styled.div`

   background-color: ${(props) => props.theme.colors.primary};
   width: 40%;

   margin-top: 20px;

   padding: 10px 14px;

   color: ${(props) => props.theme.colors.white};

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   table {


       .option {
         cursor: pointer;
         transition: 0.2s;

         &:hover{
           opacity: .7;
         }
       }

       .edit {
        color: ${(props) => props.theme.colors.success};
       }

       .delete {
        color: ${(props) => props.theme.colors.warning};
       }

       td {
        word-wrap: break-word;         /* All browsers since IE 5.5+ */
        overflow-wrap: break-word;     /* Renamed property in CSS3 draft spec */
        padding: 0 5px;
        border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
       }
   }
`

