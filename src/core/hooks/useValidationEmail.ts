import { ChangeEvent, useEffect, useState } from "react";

export const useValidationEmail = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      validateEmail(email);
    }, 1000);

    return () => clearTimeout(timer);
  }, [email]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      setIsValid(true);
    } else {
      setError(`${email} is not validate`);
      setIsValid(false);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setEmail(e.target.value);
  };

  return { email, handleEmailChange, isValid, error };
};
