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

   > div {
       padding: 0 7px;
       margin-top: 5px;
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: space-between;
   }
   
`


export const SideBar = styled.aside`
   background: ${props => props.theme.colors.white};
   height: 100%;
   width: 10%;
   border-radius: 8px;

   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column;

   .edit {
      color: ${props => props.theme.colors.success};
   }

   .delete {
      color: ${props => props.theme.colors.warning};
   }

   svg {
      transition: all .2s;
      cursor: pointer;
   }

   svg:hover {
      opacity: 0.7;
   }

`