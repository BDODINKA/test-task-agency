import React, { FC } from "react";
import { FooterStyled } from "./Footer.styled";
import { SendEmailForm } from "../SendEmailForm/SendEmailForm";

export const Footer: FC<{
  emailHandler: (email: string) => void;
}> = ({ emailHandler }) => {
  return (
    <FooterStyled>
      <SendEmailForm emailHandler={emailHandler} />
    </FooterStyled>
  );
};
