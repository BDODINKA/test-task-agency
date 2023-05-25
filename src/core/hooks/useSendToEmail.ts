import { useEffect, useState } from "react";
import { api } from "../api/api";

export const useSendToEmail = () => {
  const [response, setResponse] = useState({ response: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataToEmail, sendDataToEmail] = useState<{ email: string } | null>(
    null
  );

  useEffect(() => {
    if (!dataToEmail) return;

    (async () => {
      setIsLoading(true);
      try {
        const res = await api.sendMail(dataToEmail.email);
        setResponse({ response: res.data });
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          const err = new Error("Ошибка при загрузке");
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [dataToEmail]);

  return { response, error, isLoading, sendDataToEmail };
};
