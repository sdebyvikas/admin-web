import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;

    exact?: boolean;
    
  roles?: string[];
  children?: NavigationItem[];
}