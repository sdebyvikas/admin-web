"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({
  children,
}: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Fixed Sidebar */}
      <Sidebar collapsed={collapsed} />

      {/* Content Wrapper */}
      <div
        className={cn(
          "transition-all duration-300",
          collapsed ? "lg:ml-[72px]" : "lg:ml-[280px]"
        )}
      >
        {/* Fixed Navbar */}
        <Navbar
          collapsed={collapsed}
          onToggleSidebar={() =>
            setCollapsed((prev) => !prev)
          }
        />

        {/* Scrollable Content */}
        <main className="pt-16 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}