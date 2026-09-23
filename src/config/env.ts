import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},

  client: {
    NEXT_PUBLIC_APP_NAME: z.string().optional().default("Admin Web"),

    NEXT_PUBLIC_API_URL: z
      .string()
      .optional()
      .default("http://localhost:5000/api"),
  },

  runtimeEnv: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,

    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  emptyStringAsUndefined: true,
});
