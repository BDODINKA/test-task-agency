import React, { FC, InputHTMLAttributes } from "react";
import { InputStyled } from "./Input.styled";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return <InputStyled {...rest} />;
};
