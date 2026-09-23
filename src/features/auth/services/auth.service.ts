import { authSession } from "@/lib/auth/auth-session";
import { authApi } from "../api/auth.api";


import type { LoginRequest, RegisterRequest } from "../types/auth.types";
import { logout } from "../utils/logout";
import { useAuthStore } from "../store/auth.store";

export const authService = {
  async register(data: RegisterRequest) {
    const response = await authApi.register(data);
    return response;
  },

  async login(data: LoginRequest) {
    const response = await authApi.login(data);

    authSession.setAccessToken(response.data.accessToken);

    useAuthStore.getState().login(response.data.user);

    return response;
  },


  async refreshToken() {
    const response = await authApi.refreshToken();

    authSession.setAccessToken(
      response.data.accessToken
    );

    return response.data.accessToken;
  },
  async logout() {
  try {
    await authApi.logout();
  } finally {
    logout();
  }
},
async me() {
  const response = await authApi.me();

  return response.data;
}
};