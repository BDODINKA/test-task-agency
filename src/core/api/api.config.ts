import axios from "axios";

export const instanceApi = axios.create({
  baseURL: "http://localhost:5000/mail/",
});
