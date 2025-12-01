"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Ініціалізація теми з localStorage
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as Theme;
    if (saved && (saved === "dark" || saved === "light")) {
      setTheme(saved);
      // Одразу застосовуємо клас при завантаженні
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  // Застосування класу dark до HTML
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    // Повертаємо дефолтні значення замість помилки для SSR
    return {
      theme: "light" as Theme,
      toggleTheme: () => {},
      mounted: false,
    };
  }
  return context;
}
