import styled from "styled-components";

export const Container = styled.div`
    margin: 15px 20px;
    background: ${props => props.theme.colors.tertiary};
    height: 130px;
    width: 30%;

    border-radius: 8px;

    display: flex;
    align-items: center;
`

export const Logo = styled.aside`
   background: ${props => props.theme.colors.white};
   height: 100%;
   width: 20%;

   border-radius: 8px;

   display: flex;
   align-items: center;
   justify-content: center;

   padding: 5px;

   > svg {
       color: ${props => props.theme.colors.black};
       width: 70px;
       height: 70px;
   }
`

export const Info = styled.main`
   width: 100%;
   color: ${props => props.theme.colors.white};
   height: 90px;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   

`