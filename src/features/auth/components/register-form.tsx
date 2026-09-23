"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2, Lock, Mail, User as UserIcon } from "lucide-react";
import type { AxiosError } from "axios";

import { ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ApiErrorResponse } from "@/types/api";

import { useRegister } from "../hooks/use-register";
import {
  registerSchema,
  type RegisterSchema,
} from "../schemas/register.schema";
import { PasswordInput } from "./password-input";

export function RegisterForm() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);

  const { mutate, isPending, error } = useRegister();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: RegisterSchema) => {
    mutate(data, {
      onSuccess: () => {
        setIsSuccess(true);
      },
    });
  };

  const getErrorMessage = () => {
    if (!error) return null;
    const axiosError = error as AxiosError<ApiErrorResponse>;
    return (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "Failed to register. Please try again."
    );
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-muted/30 px-6 py-12">
      {/* Background Blur */}
      <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />

      {/* Card */}
      <Card className="relative z-10 w-full max-w-md rounded-2xl border bg-background/80 shadow-2xl backdrop-blur-xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">
            Create Account 🚀
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Sign up to get started with Enterprise Admin.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {isSuccess ? (
            <div className="space-y-6 text-center py-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  Account Created Successfully!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your registration is complete. You can now sign in with your
                  credentials.
                </p>
              </div>
              <Button
                onClick={() => router.push(ROUTES.LOGIN)}
                className="w-full h-11 text-base font-semibold"
              >
                Go to Sign In
              </Button>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    className="pl-10"
                    {...form.register("name")}
                  />
                </div>
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
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
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <PasswordInput
                    id="password"
                    autoComplete="new-password"
                    placeholder="At least 8 characters"
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

              {/* Server Error Alert */}
              {error && (
                <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-3">
                  <p className="text-sm text-destructive">
                    {getErrorMessage()}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="h-11 w-full text-base font-semibold"
                disabled={isPending}
              >
                {isPending ? "Creating Account..." : "Create Account"}
              </Button>

              {/* Login link */}
              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href={ROUTES.LOGIN}
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Sign In
                </Link>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
