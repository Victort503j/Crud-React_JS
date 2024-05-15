import axios from "axios";
import {
  ICreateUsers,
  IResponseUsers,
  IUpdateUsers,
} from "../types/user.types";
import { API_URL } from "../utils/constans";

export const get_users = () => {
  return axios.get<IResponseUsers>(API_URL + "/users", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const delete_users = (id: number) => {
  return axios.delete<IResponseUsers>(API_URL + `/users/${id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const create_users = (payload: ICreateUsers) => {
  return axios.post<IResponseUsers>(API_URL + `/users`, payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const update_users = (id: number, payload: IUpdateUsers) => {
  return axios.patch<IResponseUsers>(API_URL + `/users/${id}`, payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
