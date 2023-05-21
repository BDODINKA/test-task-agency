import React from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { SendEmailFormStyled } from "./SendEmailForm.styled";

export const SendEmailForm = () => {
  return (
    <SendEmailFormStyled>
      <Input placeholder={"Enter your Email and get notified"} />
      <Button icon={true} btnType={"input"} />
    </SendEmailFormStyled>
  );
};
