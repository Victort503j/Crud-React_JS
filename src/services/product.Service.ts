import axios from "axios";

export const get_products = () => {
  return axios.get<IResponseProduct>(API_URL + "/product", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const delete_products = (id: number) => {
  return axios.delete<IResponseProduct>(API_URL + `/product/${id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const create_products = (payload: ICreateProduct) => {
  return axios.post<IResponseProduct>(API_URL + `/product`, payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const update_products = (id: number, payload: IUpdateProduct) => {
  return axios.patch<IResponseProduct>(API_URL + `/product/${id}`, payload, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
