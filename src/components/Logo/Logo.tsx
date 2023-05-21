import React from "react";
import { ReactComponent as Icon } from "../../assets/svg/logo.svg";
import { LogoStyled } from "./Logo.styled";

export const Logo = () => {
  return (
    <LogoStyled>
      <Icon />
    </LogoStyled>
  );
};
