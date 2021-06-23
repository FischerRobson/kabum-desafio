import styled from "styled-components";

interface IButtonProps {
    color: string  | undefined;
}

export const Container = styled.button<IButtonProps>`
    width: 100%;
    margin: 7px 0;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    color: ${props => props => props.color === "red" ? props.theme.colors.white : props.theme.colors.black};
    background-color: ${props => props.color === "red" ? props.theme.colors.warning : props.theme.colors.success};
    transition: all.3s;
    &:hover{ 
        opacity: .7;
    }
`;