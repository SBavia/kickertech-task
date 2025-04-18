import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonBase {...rest}>{children}</ButtonBase>;
};

const ButtonBase = styled.button`
  background-color: #007bff;
  color: white;
  padding: 14px 20px;
  border-radius: 4px;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Button;
