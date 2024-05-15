import { IGetUsers } from "../../types/user.types";

export const saveToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const save_user_info = (user: IGetUsers) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const delete_token = () => {
  localStorage.removeItem("token");
};

export const delete_user_info = () => {
  localStorage.removeItem("user");
};
