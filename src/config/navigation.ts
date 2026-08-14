import {
  LayoutDashboard,
  Palette,
  Settings,
  Shield,
  Users,
} from "lucide-react";

import type { NavigationItem } from "@/types/navigation.types";

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Roles",
    href: "/roles",
    icon: Shield,
  },
 {
  title: "Settings",
  href: "/settings",
  icon: Settings,
  children: [
    {
      title: "Appearance",
      href: "/settings/appearance",
      icon: Palette,
    },
  ],
}
];