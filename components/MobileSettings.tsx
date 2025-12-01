"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sun, Moon } from "lucide-react";
import { Language } from "@/lib/translations";

interface MobileSettingsProps {
  onClose: () => void;
}

export function MobileSettings({ onClose }: MobileSettingsProps) {
  const { theme, toggleTheme, mounted } = useTheme();
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "uk", label: "Українська", flag: "🇺🇦" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="space-y-6 w-full">
      {/* Theme Toggle */}
      <div>
        <p className="text-xs font-medium text-theme-accent uppercase tracking-wider mb-3 text-center">
          Theme
        </p>
        <button
          onClick={() => {
            toggleTheme();
          }}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-theme-primary" />
          ) : (
            <Moon className="w-5 h-5 text-theme-primary" />
          )}
          <span className="text-sm font-medium text-theme-primary">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>

      {/* Language Selector */}
      <div>
        <p className="text-xs font-medium text-theme-accent uppercase tracking-wider mb-3 text-center">
          Language
        </p>
        <div className="flex gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
              }}
              className={`flex-1 flex flex-col items-center gap-2 px-4 py-3 rounded-xl transition-colors ${
                language === lang.code
                  ? "bg-black dark:bg-white text-white dark:text-black"
                  : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10"
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className={`text-xs font-medium ${
                language === lang.code
                  ? "text-white dark:text-black"
                  : "text-theme-primary"
              }`}>
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
