import { instanceApi } from "./api.config";

export const api = {
  async sendMail(email: string) {
    return instanceApi.post("send", { email: email });
  },
};
