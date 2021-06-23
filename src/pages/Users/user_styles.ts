import styled from "styled-components";

export const Header = styled.header`
   margin: 0;
   display: flex;
   align-items: center;
   justify-content: space-around;

   > h3 {
      color: ${(props) => props.theme.colors.white};
   }
`

export const Container = styled.div`

`

export const AddCliente = styled.button`
   background-color: ${(props) => props.theme.colors.success};
   width: 50px;
   height: 50px;
   border-radius: 8px;

   color: ${(props) => props.theme.colors.black};

   transition: all .3s;

   &:hover {
      opacity: 0.7;
   }
`

export const Content = styled.div`
   display: flex; 
   flex-wrap: wrap;
`