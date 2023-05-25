import axios from "axios";

export const instanceApi = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/mail/"
      : "https://server-mailer.vercel.app/mail/",
});
