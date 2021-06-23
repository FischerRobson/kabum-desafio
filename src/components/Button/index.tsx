  
import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({ children, color, ...props }) => {
  return <Container color={color} {...props}>{children}</Container>;
};

export default Button;