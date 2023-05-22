import React, { FC } from "react";
import { TitleBigStyled, TitleSmallStyled } from "./Title.Styled";

export const Title: FC<{
  children: React.ReactNode;
  size: "sm" | "lg";
  width?: number;
  height?: number;
}> = ({ children, size, ...rest }) => {
  if (size === "sm")
    return <TitleSmallStyled {...rest}>{children}</TitleSmallStyled>;
  if (size === "lg")
    return <TitleBigStyled {...rest}>{children}</TitleBigStyled>;
  return <></>;
};
