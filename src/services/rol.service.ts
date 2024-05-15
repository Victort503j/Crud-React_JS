import axios from "axios";
import {
  ICreateRoles,
  IGetRolesPaginated,
  IResponseRoles,
  IUpdateRoles,
} from "../types/rol.types";
import { API_URL } from "../utils/constans";

export const get_roles = async (page: number, limit: number, name: string) => {
  return axios.get<IGetRolesPaginated>(
    API_URL + `/roles?page=${page}&limit=${limit}&name=${name}`,
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
};

export const delete_rol = (id: number) => {
  return axios.delete<IResponseRoles>(API_URL + `/roles/${id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const create_rol = (payload: ICreateRoles) => {
  return axios.post<IResponseRoles>(API_URL + `/roles`, payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const update_rol = (id: number, payload: IUpdateRoles) => {
  return axios.patch<IResponseRoles>(API_URL + `/roles/${id}`, payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
