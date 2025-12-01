"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SettingsMenu } from "@/components/SettingsMenu";
import { MobileSettings } from "@/components/MobileSettings";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t.nav.hero, href: "#hero" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.reviews, href: "#reviews" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const sections = navItems.map((item) => ({
      id: item.href.substring(1),
      element: document.getElementById(item.href.substring(1)),
    }));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    sections.forEach((section) => {
      if (section.element) {
        observer.observe(section.element);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.element) {
          observer.unobserve(section.element);
        }
      });
    };
  }, [navItems]);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-theme-primary" />
          <span className="text-2xl font-heading font-bold text-theme-primary">
            Interior Lab
          </span>
        </div>

        {/* Center Nav (Desktop) */}
        <div className="hidden lg:flex items-center gap-1 bg-white/30 dark:bg-black/30 backdrop-blur-md px-2 py-1.5 rounded-full border border-black/10 dark:border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all capitalize",
                activeSection === item.href.substring(1)
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white hover:bg-white/10"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <SettingsMenu />
          <a
            href="#contact"
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-2.5 rounded-full font-medium hover:opacity-80 transition-opacity"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-theme-primary z-50 relative"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-40 w-full bg-white/95 dark:bg-black/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleMobileLinkClick}
                    className={cn(
                      "text-3xl font-heading font-bold capitalize transition-colors",
                      activeSection === item.href.substring(1)
                        ? "text-black dark:text-white"
                        : "text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Settings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-4 space-y-4 w-full max-w-xs"
              >
                <MobileSettings onClose={handleMobileLinkClick} />
              </motion.div>

              <motion.a
                href="#contact"
                onClick={handleMobileLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
                className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-bold hover:opacity-80 transition-opacity"
              >
                {t.nav.cta}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
