import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};

    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 700px){
      justify-content: center;
    }
`

export const Profile = styled.aside`
    width: 10%;

    @media (max-width: 700px){
     width: 20%;
     margin-right: 30px;
    }
`

export const Menu = styled.main`
    width: 68%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 700px) {
      width: 50%;
    }
`

export const MenuOption = styled.h2`
    font-weight: 400;
    margin-right: 35px;

    @media (max-width: 700px) {
      margin-right: 15px;
    }

    cursor: pointer;

    transition: all .3s;

    &:hover {
        opacity: 0.7;
    }

    > a {
        text-decoration: none;
        color: ${props => props.theme.colors.white};
    }
`

export const ToogleTheme = styled.div`
    margin-right: 15rem;

    @media (max-width: 700px) {
      margin-right: 15px;
    }
`

export const LogOut = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: all .3s;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        color: ${props => props.theme.colors.warning};
        width: 32px;
        height: 32px;
    }
`
