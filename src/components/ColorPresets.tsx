import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export interface ColorPreset {
  name: string;
  primary: string;
  secondary: string;
}

export const COLOR_PRESETS: ColorPreset[] = [
  { name: "Sky Blue", primary: "#0284C7", secondary: "#F0F9FF" },
  { name: "Ocean", primary: "#0369A1", secondary: "#E0F2FE" },
  { name: "Emerald", primary: "#059669", secondary: "#F0FDF4" },
  { name: "Purple", primary: "#7C3AED", secondary: "#F5F3FF" },
  { name: "Rose", primary: "#E11D48", secondary: "#FFF1F2" },
  { name: "Amber", primary: "#D97706", secondary: "#FFFBEB" },
  { name: "Slate", primary: "#334155", secondary: "#F8FAFC" },
  { name: "Indigo", primary: "#4F46E5", secondary: "#EEF2FF" },
];

interface ColorPresetsProps {
  primaryColor: string;
  onApplyPreset: (preset: ColorPreset) => void;
}

const ColorPresets = ({ primaryColor, onApplyPreset }: ColorPresetsProps) => {
  return (
    <Card>
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-base sm:text-lg">Color Presets</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {COLOR_PRESETS.map((preset) => (
            <Button
              key={preset.name}
              variant={primaryColor === preset.primary ? "default" : "outline"}
              className="h-auto flex flex-col items-center justify-center p-2 sm:p-3 gap-1.5 sm:gap-2"
              onClick={() => onApplyPreset(preset)}
            >
              <div className="flex gap-1 sm:gap-1.5 items-center">
                <div
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded border border-current"
                  style={{ backgroundColor: preset.primary }}
                />
                <div
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded border border-current"
                  style={{ backgroundColor: preset.secondary }}
                />
              </div>
              <div className="text-xs font-medium flex items-center gap-1">
                {preset.name}
                {primaryColor === preset.primary && (
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                )}
              </div>
            </Button>
          ))}
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground">
            💡 Click a preset to apply colors instantly
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorPresets;
