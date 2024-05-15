export interface IGetProducts {
  id: number;
  name: string;
  code: string;
  stock: number;
  price: number;
  isActive: boolean;
}

export interface IResponseProduct {
  client: IGetProducts[];
}

export interface ICreateProduct {
  name: string;
  code: string;
  stock: number;
  price: number;
}

export interface IUpdateProduct {
  name: string;
  code: string;
  stock: number;
  price: number;
}
