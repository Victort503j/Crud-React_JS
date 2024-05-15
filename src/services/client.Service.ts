import axios from "axios";
import {
  ICreateClient,
  IResponseClient,
  IUpdateClient,
} from "../types/client-types";
import { API_URL } from "../utils/constans";

export const get_clients = () => {
  return axios.get<IResponseClient>(API_URL + "/client", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const delete_clients = (id: number) => {
  return axios.delete<IResponseClient>(API_URL + `/client/${id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const create_clients = (payload: ICreateClient) => {
  return axios.post<IResponseClient>(API_URL + `/client`, payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const update_clients = (id: number, payload: IUpdateClient) => {
  return axios.patch<IResponseClient>(API_URL + `/client/${id}`, payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
