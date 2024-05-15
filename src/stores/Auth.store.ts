import { create } from "zustand";
import { IAuthStore } from "../types/Auth-store.types";
import { login_user } from "../services/Auth.service";
import {
  delete_token,
  delete_user_info,
  saveToken,
  save_user_info,
} from "../components/Plugins/LocalStorage";
import { IResponseUsers } from "../types/user.types";

export const useAuthStore = create<IAuthStore>((set, get) => ({
  isAuthenticated: false,
  OnMakeLogin: async (payload) => {
    try {
      const { data } = await login_user(payload);
      if (data.ok === true) {
        await save_user_info(data.user);
        set({ isAuthenticated: true });
        const isAdmin = data.user.rol.name === "Administrador";
        if (isAdmin) {
          await saveToken(data.token);

          window.location.href = "/home";
        }
      }
    } catch (error) {
      console.error(error);
    }
  },
  OnGetInfo: async () => {
    try {
      set({ isAuthenticated: true });
    } catch (error) {
      console.error(error);
    }
  },
  OnLogout: async () => {
    try {
      set({ isAuthenticated: false });
      await delete_token();
      await delete_user_info();
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  },
}));
