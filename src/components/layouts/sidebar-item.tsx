"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/types/navigation.types";

interface SidebarItemProps {
  item: NavigationItem;
  collapsed?: boolean;
  onClick?: () => void;
}

export function SidebarItem({
  item,
  collapsed = false,
  onClick,
}: SidebarItemProps) {
  const pathname = usePathname();

  const isActive =
    pathname === item.href ||
    (item.href !== "/dashboard" && pathname.startsWith(item.href));

  const Icon = item.icon;

  return (
    <Link
  href={item.href}
  onClick={onClick}
  aria-current={isActive ? "page" : undefined}
className={cn(
  "group flex h-11 items-center rounded-lg px-3 text-sm font-medium transition-all duration-200",
  isActive
    ? "bg-white/15 text-white shadow-sm"
    : "text-white/75 hover:bg-white/10 hover:text-white",
  collapsed && "justify-center px-0"
)}
>
      <Icon
        className={cn(
          "h-5 w-5 shrink-0",
          !collapsed && "mr-3"
        )}
      />

      {!collapsed && (
        <span className="truncate">
          {item.title}
        </span>
      )}
    </Link>
  );
}