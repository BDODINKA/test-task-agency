import React, { FC, HTMLAttributes } from "react";
import { ButtonsStyled, LinkBtnStyled } from "./Buttons.styled";
import { ReactComponent as Arrow } from "../../../assets/svg/arrow.svg";
import { ReactComponent as Close } from "../../../assets/svg/close.svg";

export const Buttons: FC<
  HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & {
    icon: boolean;
    $btnType: "link" | "input" | "close" | "default" | "drop";
  }
> = ({ icon, $btnType, ...rest }) => {
  if ($btnType === "link")
    return (
      <LinkBtnStyled {...rest}>
        {rest.children}
        {icon && <Arrow />}
      </LinkBtnStyled>
    );

  if ($btnType === "input")
    return (
      <ButtonsStyled {...rest} $btnType={$btnType}>
        {icon && <Arrow />}
      </ButtonsStyled>
    );

  if ($btnType === "close")
    return (
      <ButtonsStyled {...rest} $btnType={$btnType}>
        {icon && <Close />}
      </ButtonsStyled>
    );

  if ($btnType === "drop")
    return (
      <ButtonsStyled {...rest} $btnType={$btnType}>
        {icon && <Arrow />}
      </ButtonsStyled>
    );

  return (
    <ButtonsStyled {...rest} $btnType={$btnType}>
      {rest.children}
    </ButtonsStyled>
  );
};
