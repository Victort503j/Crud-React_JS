import { create } from "zustand";
import { IUsersStore } from "../types/user-store.types";
import { ICreateUsers, IUpdateUsers } from "../types/user.types";
import {
  create_users,
  delete_users,
  get_users,
  update_users,
} from "../services/user.service";

export const useUsersStore = create<IUsersStore>((set, get) => ({
  user: [],
  OnGetUsers: () => {
    get_users().then(({ data }) => {
      set({
        user: data.user,
      });
    });
  },
  OnDelete: (id: number) => {
    delete_users(id).then(() => {
      get().OnGetUsers();
    });
  },
  OnCreate: (payload: ICreateUsers) => {
    create_users(payload).then(() => {
      get().OnGetUsers();
    });
  },
  OnUpdate: (id: number, payload: IUpdateUsers) => {
    update_users(id, payload).then(() => {
      get().OnGetUsers();
    });
  },
}));
