import {
  Bell,
  Palette,
  Shield,
  SlidersHorizontal,
  User,
} from "lucide-react";

import type { NavigationItem } from "@/types/navigation.types";

export const settingsNavigation: NavigationItem[] = [
  {
    title: "Profile",
    href: "/settings/profile",
    icon: User,
  },
  {
    title: "Security",
    href: "/settings/security",
    icon: Shield,
  },
  {
    title: "Appearance",
    href: "/settings/appearance",
    icon: Palette,
  },
  {
    title: "Notifications",
    href: "/settings/notifications",
    icon: Bell,
  },
  {
    title: "Preferences",
    href: "/settings/preferences",
    icon: SlidersHorizontal,
  },
];