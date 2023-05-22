import React, { FC } from "react";
import { WrapperStyled } from "./Wrapper.styled";

export const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};
