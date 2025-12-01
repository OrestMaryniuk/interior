"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sun, Moon, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Language } from "@/lib/translations";

export function SettingsMenu() {
  const { theme, toggleTheme, mounted } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "uk", label: "Українська", flag: "🇺🇦" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
  ];

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <div className="relative">
      {/* Settings Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 flex items-center justify-center transition-colors"
        aria-label="Settings"
      >
        <svg
          className="w-5 h-5 text-theme-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <circle cx="10" cy="4" r="1.5" />
          <circle cx="10" cy="10" r="1.5" />
          <circle cx="10" cy="16" r="1.5" />
        </svg>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-12 z-50 w-64 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 p-4 space-y-4"
            >
              {/* Theme Toggle */}
              <div>
                <p className="text-xs font-medium text-theme-accent uppercase tracking-wider mb-2">
                  Theme
                </p>
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-theme-primary" />
                  ) : (
                    <Moon className="w-5 h-5 text-theme-primary" />
                  )}
                  <span className="text-sm text-theme-primary">
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>
              </div>

              {/* Language Selector */}
              <div>
                <p className="text-xs font-medium text-theme-accent uppercase tracking-wider mb-2">
                  Language
                </p>
                <div className="space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        language === lang.code
                          ? "bg-black dark:bg-white text-white dark:text-black"
                          : "hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className={`text-sm ${
                        language === lang.code
                          ? "text-white dark:text-black font-medium"
                          : "text-theme-primary"
                      }`}>
                        {lang.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
