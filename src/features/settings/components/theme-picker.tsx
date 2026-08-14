"use client";

import { Check } from "lucide-react";

import { themes } from "../constants/themes";
import { useAppearanceStore } from "../store/appearance.store";
import type { AccentColor } from "../types/appearance.types";

const colorNames: Record<AccentColor, string> = {
  blue: "Blue",
  green: "Green",
  purple: "Purple",
  red: "Red",
  orange: "Orange",
  slate: "Slate",
  rose: "Rose",
  amber: "Amber",
};

export function ThemePicker() {
  const accentColor = useAppearanceStore(
    (state) => state.accentColor
  );

  const setAccentColor = useAppearanceStore(
    (state) => state.setAccentColor
  );

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-semibold">
          Accent Color
        </h3>

        <p className="text-sm text-muted-foreground">
          Select your preferred application accent color.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {(Object.keys(themes) as AccentColor[]).map((color) => {
          const selected = accentColor === color;

          return (
            <button
              key={color}
              type="button"
              onClick={() => setAccentColor(color)}
              className={`relative flex items-center gap-3 rounded-xl border p-3 transition-all hover:border-primary hover:bg-accent ${
                selected
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border"
              }`}
            >
              <span
                className="h-6 w-6 rounded-full border"
                style={{
                  background: themes[color].primary,
                }}
              />

              <span className="text-sm font-medium">
                {colorNames[color]}
              </span>

              {selected && (
                <Check className="ml-auto h-4 w-4 text-primary" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}