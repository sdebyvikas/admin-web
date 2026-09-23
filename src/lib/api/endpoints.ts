// src/lib/api/endpoints.ts

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REFRESH_TOKEN: "/auth/refresh-token",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
   
    // PROFILE: "/auth/profile",
    // FORGOT_PASSWORD: "/auth/forgot-password",
    // RESET_PASSWORD: "/auth/reset-password",
    // CHANGE_PASSWORD: "/auth/change-password",
    // VERIFY_EMAIL: "/auth/verify-email",
    // RESEND_OTP: "/auth/resend-otp",
    // VERIFY_OTP: "/auth/verify-otp",
  },

  USERS: {
    LIST: "/users",
    CREATE: "/users",
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
    DETAILS: (id: string) => `/users/${id}`,
  },
} as const;