import { ICreateProduct, IGetProducts, IUpdateProduct } from "./product.types";

export interface IProductsStore {
  product: IGetProducts[];
  OnGetProducts: () => void;
  OnDelete: (id: number) => void;
  OnCreate: (payload: ICreateProduct) => void;
  OnUpdate: (id: number, payload: IUpdateProduct) => void;
}
