import { IGetUsers } from "./user.types";

export interface IResponseLogin {
  user: IGetUsers;
  ok: boolean;
  message: string;
  token: string;
}

export interface PayloadLogin {
  email: string;
  password: string;
}
