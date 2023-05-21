import React from "react";
import { FooterStyled } from "./Footer.styled";
import { SendEmailForm } from "../SendEmailForm/SendEmailForm";

export const Footer = () => {
  return (
    <FooterStyled>
      <SendEmailForm />
    </FooterStyled>
  );
};
