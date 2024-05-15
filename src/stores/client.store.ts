import { create } from "zustand";
import {
  create_clients,
  delete_clients,
  get_clients,
  update_clients,
} from "../services/client.Service";
import { IClientsStore } from "../types/client-store.types";
import { ICreateClient, IUpdateClient } from "../types/client-types";

export const useClientsStore = create<IClientsStore>((set, get) => ({
  clients: [],
  OnGetClients: () => {
    get_clients().then(({ data }) => {
      set({
        clients: data.clients,
      });
    });
  },
  OnDeleteClient: (id: number) => {
    delete_clients(id).then(() => {
      get().OnGetClients();
    });
  },
  OnCreateClient: (payload: ICreateClient) => {
    create_clients(payload).then(() => {
      get().OnGetClients();
    });
  },
  OnUpdateClient: (id: number, payload: IUpdateClient) => {
    update_clients(id, payload).then(() => {
      get().OnGetClients();
    });
  },
}));
