"use client";

import { PropsWithChildren, useEffect } from "react";

import { themes } from "../constants/themes";
import { useAppearanceStore } from "../store/appearance.store";

export function AppearanceProvider({
  children,
}: PropsWithChildren) {
  const { accentColor } = useAppearanceStore();

  useEffect(() => {
    const root = document.documentElement;

    const theme = themes[accentColor];

    if (!theme) return;

    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty(
      "--primary-foreground",
      theme.primaryForeground
    );


    root.style.setProperty("--sidebar", theme.sidebar);

root.style.setProperty(
  "--sidebar-foreground",
  theme.sidebarForeground
);

root.style.setProperty(
  "--sidebar-primary",
  theme.sidebarPrimary
);

root.style.setProperty(
  "--sidebar-primary-foreground",
  theme.sidebarPrimaryForeground
);

root.style.setProperty(
  "--sidebar-accent",
  theme.sidebarAccent
);

root.style.setProperty(
  "--sidebar-accent-foreground",
  theme.sidebarAccentForeground
);

    root.style.setProperty("--ring", theme.ring);

    root.style.setProperty("--chart-1", theme.chart1);
    root.style.setProperty("--chart-2", theme.chart2);
    root.style.setProperty("--chart-3", theme.chart3);
    root.style.setProperty("--chart-4", theme.chart4);
    root.style.setProperty("--chart-5", theme.chart5);
  }, [accentColor]);

  return children;
}