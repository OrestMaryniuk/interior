"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";
import { motion } from "framer-motion";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "uk", label: "UA", flag: "🇺🇦" },
    { code: "de", label: "DE", flag: "🇩🇪" },
  ];

  return (
    <div className="flex items-center gap-2 bg-black/10 dark:bg-white/10 rounded-full p-1">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            language === lang.code
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "text-neutral-700 dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
}
