import { ThemePicker } from "@/features/settings/components/theme-picker";

export default function AppearancePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Appearance</h1>
        <p className="text-muted-foreground">
          Customize the appearance of your application.
        </p>
      </div>

      <ThemePicker />
    </div>
  );
}