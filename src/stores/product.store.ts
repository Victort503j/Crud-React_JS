import { create } from "zustand";
import { IProductsStore } from "../types/product-store.types";
import {
  create_products,
  delete_products,
  get_products,
  update_products,
} from "../services/product.Service";
import { ICreateProduct, IUpdateProduct } from "../types/product.types";

export const useProductsStore = create<IProductsStore>((set, get) => ({
  product: [],
  OnGetProducts: () => {
    get_products().then(({ data }) => {
      set({
        product: data.product,
      });
    });
  },
  OnDelete: (id: number) => {
    delete_products(id).then(() => {
      get().OnGetProducts();
    });
  },
  OnCreate: (payload: ICreateProduct) => {
    create_products(payload).then(() => {
      get().OnGetProducts();
    });
  },
  OnUpdate: (id: number, payload: IUpdateProduct) => {
    update_products(id, payload).then(() => {
      get().OnGetProducts();
    });
  },
}));
