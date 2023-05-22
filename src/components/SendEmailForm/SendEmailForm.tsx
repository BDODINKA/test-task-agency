import React from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { SendEmailFormStyled } from "./SendEmailForm.styled";
import { useValidationEmail } from "../../core/hooks/useValidationEmail";
import { ErrorMessageStyled } from "../ErrorMessage/ErrorMessage.styled";

export const SendEmailForm = () => {
  const { email, handleEmailChange, isValid, error } = useValidationEmail();

  return (
    <SendEmailFormStyled>
      <Input
        placeholder={"Enter your Email and get notified"}
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <Button icon={true} btnType={"input"} />
      {error && !isValid && (
        <ErrorMessageStyled>{"Email is Not Validate"}</ErrorMessageStyled>
      )}
    </SendEmailFormStyled>
  );
};
