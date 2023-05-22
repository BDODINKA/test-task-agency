import React, { ChangeEvent, FC } from "react";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button/Button";
import { SendEmailFormStyled } from "./SendEmailForm.styled";
import { useValidationEmail } from "../../core/hooks/useValidationEmail";
import { ErrorMessageStyled } from "../common/ErrorMessage/ErrorMessage.styled";
import { useSendToEmail } from "../../core/hooks/useSendToEmail";

export const SendEmailForm: FC<{
  emailHandler: () => void;
}> = ({ emailHandler }) => {
  const { email, handleEmailChange, setEmail, isValid, error } =
    useValidationEmail();
  const { response, sendDataToEmail } = useSendToEmail();

  const onSubmitEmailHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendDataToEmail(email);
    if (response === "Ok") {
      e.target.reset();
      emailHandler();
      setEmail("");
    }
  };

  return (
    <SendEmailFormStyled onSubmit={onSubmitEmailHandler}>
      <Input
        placeholder={"Enter your Email and get notified"}
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <Button icon={true} $btnType={"input"} />
      {!!email && error && !isValid && (
        <ErrorMessageStyled>{"Email is Not Validate"}</ErrorMessageStyled>
      )}
    </SendEmailFormStyled>
  );
};
