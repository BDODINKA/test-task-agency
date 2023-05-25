import React, {
  ChangeEvent,
  FC,
  MutableRefObject,
  useEffect,
  useRef,
} from "react";
import { Input } from "../common/Input/Input";
import { Buttons } from "../common/Buttons/Buttons";
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

  const ref = useRef() as MutableRefObject<HTMLFormElement>;

  useEffect(() => {
    if (response.response === "Ok") {
      ref.current.reset();
      emailHandler();
      setEmail("");
      sendDataToEmail(null);
    }
  }, [response]);

  const onSubmitEmailHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      sendDataToEmail({ email });
    }
  };

  return (
    <SendEmailFormStyled onSubmit={onSubmitEmailHandler} ref={ref}>
      <Input
        placeholder={"Enter your Email and get notified"}
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <Buttons icon={true} $btnType={"input"} />
      {!!email && error && !isValid && (
        <ErrorMessageStyled>{"Email is Not Validate"}</ErrorMessageStyled>
      )}
    </SendEmailFormStyled>
  );
};
