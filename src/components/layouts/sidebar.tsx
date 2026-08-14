"use client";

import Link from "next/link";

import { appConfig } from "@/config/app";

import { SidebarContent } from "./sidebar-content";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed?: boolean;
}

export function Sidebar({
  collapsed = false,
}: SidebarProps) {
  return (
<aside
  className={cn(
    "fixed left-0 top-0 z-40 hidden h-screen border-r border-white/10 bg-primary text-primary-foreground transition-all duration-300 lg:flex lg:flex-col",
    collapsed ? "w-[72px]" : "w-[280px]"
  )}
>
   <div className="flex h-16 items-center border-b border-white/10 backdrop-blur-sm px-5">
        <Link
          href="/dashboard"
          className="truncate text-lg font-bold"
        >
          {collapsed
            ? appConfig.appName
                .split(" ")
                .map((word) => word[0])
                .join("")
            : appConfig.appName}
        </Link>
      </div>

      <SidebarContent collapsed={collapsed} />
    </aside>
  );
}