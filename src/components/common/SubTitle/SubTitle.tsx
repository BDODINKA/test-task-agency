import React, { FC } from "react";
import { SubTitleStyled } from "./SubTItle.styled";

export const SubTitle: FC<{
  children: React.ReactNode;
  width?: number;
  height?: number;
}> = ({ children, ...rest }) => {
  return <SubTitleStyled {...rest}>{children}</SubTitleStyled>;
};
