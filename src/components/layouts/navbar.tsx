"use client";

import { PanelLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

import { MobileSidebar } from "./mobile-sidebar";
import { UserMenu } from "./user-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  collapsed: boolean;
  onToggleSidebar: () => void;
}

export function Navbar({ collapsed, onToggleSidebar }: NavbarProps) {
  return (
    <header
      className={cn(
        "fixed top-0 right-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 backdrop-blur-md px-4 transition-all duration-300",
        collapsed ? "left-[72px]" : "left-[280px]",
      )}
    >
      <div className="flex items-center gap-2">
        {/* Mobile Menu */}
        <MobileSidebar />

        {/* Desktop Collapse */}
        <Button
          variant="ghost"
          size="icon"
          className="hidden lg:flex"
          onClick={onToggleSidebar}
        >
          <PanelLeft
            className={`h-5 w-5 transition-transform ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        {/* Next Step */}

        <UserMenu />
      </div>
    </header>
  );
}
