import React, { FC } from "react";
import { FooterStyled } from "./Footer.styled";
import { SendEmailForm } from "../SendEmailForm/SendEmailForm";

export const Footer: FC<{
  emailHandler: () => void;
  resetField: boolean;
}> = ({ ...rest }) => {
  return (
    <FooterStyled>
      <SendEmailForm {...rest} />
    </FooterStyled>
  );
};
