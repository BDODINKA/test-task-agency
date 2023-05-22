import React, { ChangeEvent, FC, useEffect, useRef } from "react";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button/Button";
import { SendEmailFormStyled } from "./SendEmailForm.styled";
import { useValidationEmail } from "../../core/hooks/useValidationEmail";
import { ErrorMessageStyled } from "../common/ErrorMessage/ErrorMessage.styled";

export const SendEmailForm: FC<{
  emailHandler: (email: string) => void;
  resetField: boolean;
}> = ({ emailHandler, resetField }) => {
  const { email, handleEmailChange, isValid, error } = useValidationEmail();

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (resetField) {
      formRef.current?.reset();
    }
  }, [resetField]);

  const onSubmitEmailHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailHandler(email);
  };

  return (
    <SendEmailFormStyled onSubmit={onSubmitEmailHandler} ref={formRef}>
      <Input
        placeholder={"Enter your Email and get notified"}
        type="email"
        onChange={handleEmailChange}
      />
      <Button icon={true} $btnType={"input"} />
      {!!email && error && !isValid && (
        <ErrorMessageStyled>{"Email is Not Validate"}</ErrorMessageStyled>
      )}
    </SendEmailFormStyled>
  );
};
