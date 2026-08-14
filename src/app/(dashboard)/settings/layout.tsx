import type { ReactNode } from "react";

import { SettingsSidebar } from "@/features/settings/components/settings-sidebar";

interface SettingsLayoutProps {
  children: ReactNode;
}

export default function SettingsLayout({
  children,
}: SettingsLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-7xl p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold md:text-3xl">
          Settings
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage your account and application preferences.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="lg:w-64 lg:shrink-0">
          <SettingsSidebar />
        </div>

        <div className="min-w-0 flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}