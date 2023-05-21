import React, { FC } from "react";
import { SubTitleStyled } from "./SubTItle.styled";

export const SubTitle: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SubTitleStyled>{children}</SubTitleStyled>;
};
