import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};

    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const Profile = styled.aside`
    width: 10%;
`

export const Menu = styled.main`
    width: 68%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const MenuOption = styled.h2`
    font-weight: 400;
    margin-right: 35px;

    cursor: pointer;
    
    transition: all .3s;
    
    &:hover {
        opacity: 0.7;
    }
`

export const ToogleTheme = styled.div`
    
`