"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Lock, Mail } from "lucide-react";

import { ROUTES } from "@/constants/routes";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useLogin } from "../hooks/use-login";
import {
  loginSchema,
  type LoginSchema,
} from "../schemas/login.schema";
import { PasswordInput } from "./password-input";

export function LoginForm() {
  const router = useRouter();

  const { mutate, isPending, error } = useLogin();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchema) => {
    mutate(data, {
      onSuccess: () => {
        router.replace(ROUTES.DASHBOARD);
      },
    });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-muted/30 px-6">
      {/* Background Blur */}
      <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />

      {/* Card */}
      <Card className="relative z-10 w-full max-w-md rounded-2xl border bg-background/80 shadow-2xl backdrop-blur-xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">
            Welcome Back 👋
          </CardTitle>

          <p className="text-sm text-muted-foreground">
            Sign in to continue to Enterprise Admin.
          </p>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Email */}

            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address
              </Label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  className="pl-10"
                  {...form.register("email")}
                />
              </div>

              {form.formState.errors.email && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}

            <div className="space-y-2">
              <Label htmlFor="password">
                Password
              </Label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <PasswordInput
                  id="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="pl-10"
                  {...form.register("password")}
                />
              </div>

              {form.formState.errors.password && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>

            {/* Error */}

            {error && (
              <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-3">
                <p className="text-sm text-destructive">
                  {(error as Error).message}
                </p>
              </div>
            )}

            {/* Button */}

            <Button
              type="submit"
              className="h-11 w-full text-base font-semibold"
              disabled={isPending}
            >
              {isPending
                ? "Signing in..."
                : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}