"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authSession } from "@/lib/auth/auth-session";
import { authService } from "@/features/auth/services/auth.service";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { logout } from "@/features/auth/utils/logout";
import { FullScreenLoader, Loader } from "../shared/loader";

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const { user, setUser } = useAuthStore.getState();

        // Restore access token if missing
        if (!authSession.getAccessToken()) {
          await authService.refreshToken();
        }

        // Bootstrap user only if not already available
        if (!user) {
          const profile = await authService.me();
          setUser(profile);
        }

        setIsLoading(false);
      } catch {
        logout(false);
        router.replace("/login");
        return;
      }
    };

    authenticate();
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        {/* <Loader/> */}
        <FullScreenLoader className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
      </div>
    );
  }

  return <>{children}</>;
}
