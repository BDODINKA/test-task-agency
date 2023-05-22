import React from "react";
import { HeaderStyled } from "./Header.styled";
import { Logo } from "../common/Logo/Logo";

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
    </HeaderStyled>
  );
};
