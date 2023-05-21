import React, { FC, HTMLAttributes } from "react";
import { ButtonStyled, LinkBtnStyled } from "./Button.styled";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";

export const Button: FC<
  HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & {
    icon: boolean;
    btnType: "link" | "input" | "close" | "default";
  }
> = ({ icon, btnType, ...rest }) => {
  if (btnType === "link")
    return (
      <LinkBtnStyled {...rest}>
        {rest.children}
        {icon && <Arrow />}
      </LinkBtnStyled>
    );

  if (btnType === "input")
    return (
      <ButtonStyled {...rest} btnType={btnType}>
        {icon && <Arrow />}
      </ButtonStyled>
    );

  if (btnType === "close")
    return (
      <ButtonStyled {...rest} btnType={btnType}>
        {icon && <Close />}
      </ButtonStyled>
    );

  return (
    <ButtonStyled {...rest} btnType={btnType}>
      {rest.children}
    </ButtonStyled>
  );
};
