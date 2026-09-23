import { ApiResponse } from "@/types/api";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "../types/auth.types";
import { API_ENDPOINTS, apiClient } from "@/lib/api";
import { User } from "../types/user.types";

export const authApi = {
  login(data: LoginRequest) {
    return apiClient.post<ApiResponse<LoginResponse>>(
      API_ENDPOINTS.AUTH.LOGIN,
      data
    );
  },

  register(data: RegisterRequest) {
    return apiClient.post<ApiResponse<RegisterResponse>>(
      API_ENDPOINTS.AUTH.REGISTER,
      data
    );
  },

  refreshToken() {
    return apiClient.post<ApiResponse<{ accessToken: string }>>(
      API_ENDPOINTS.AUTH.REFRESH_TOKEN
    );
  },
  logout() {
    return apiClient.post<ApiResponse<null>>(
      API_ENDPOINTS.AUTH.LOGOUT
    );
  },
  me() {
  return apiClient.get<ApiResponse<User>>(
    API_ENDPOINTS.AUTH.ME
  );
}
};