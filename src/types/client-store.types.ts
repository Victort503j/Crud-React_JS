import { ICreateClient, IGetClients, IUpdateClient } from "./client-types";

export interface IClientsStore {
  clients: IGetClients[];
  OnGetClients: () => void;
  OnDeleteClient: (id: number) => void;
  OnCreateClient: (payload: ICreateClient) => void;
  OnUpdateClient: (id: number, payload: IUpdateClient) => void;
}
