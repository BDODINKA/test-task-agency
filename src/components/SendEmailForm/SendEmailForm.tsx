import React, { ChangeEvent, FC } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { SendEmailFormStyled } from "./SendEmailForm.styled";
import { useValidationEmail } from "../../core/hooks/useValidationEmail";
import { ErrorMessageStyled } from "../ErrorMessage/ErrorMessage.styled";

export const SendEmailForm: FC<{
  emailHandler: (email: string) => void;
}> = ({ emailHandler }) => {
  const { email, handleEmailChange, isValid, error } = useValidationEmail();

  const onSubmitEmailHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailHandler(email);
  };

  return (
    <SendEmailFormStyled onSubmit={onSubmitEmailHandler}>
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
