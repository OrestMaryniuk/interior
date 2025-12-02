"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import Image from "next/image";
import Award1 from "@/public/awards1.svg";
import Award2 from "@/public/awards2.svg";
import Award3 from "@/public/awards3.svg";
import { handleScroll } from "@/lib/utils";

export function Hero() {
  const { t } = useLanguage();
  const { setActiveSection } = useActiveSection();

  return (
    <Section id="hero" className="justify-center relative overflow-hidden">
      {/* Background Image with theme-aware overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Modern Interior"
          fill
          className="object-cover"
        />
        {/* Dark overlay for dark theme */}
        <div className="absolute inset-0 bg-black/40 dark:block hidden" />
        {/* Light overlay for light theme */}
        <div className="absolute inset-0 bg-white/70 dark:hidden block" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 pt-8 md:pt-20">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6 text-theme-primary"
          >
            {t.hero.title} <br />
            {t.hero.titleContinue}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-theme-secondary mb-10 max-w-2xl font-light"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact", setActiveSection)}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-6 md:px-8 py-2 md:py-4 rounded-full text-lg font-semibold transition-all shadow-xl hover:shadow-2xl hover:bg-neutral-800 dark:hover:bg-neutral-100 w-fit"
          >
            {t.nav.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>

      {/* Awards / Footer of Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-0 right-0 z-20"
      >
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
          <span className="text-sm uppercase tracking-widest text-theme-primary mb-4">
            {t.hero.awards}
          </span>
          <div className="flex gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 text-theme-primary">
            {/* Placeholders for awards icons */}
            <div className="flex flex-col items-center">
              <Award1 className="w-10 h-10 md:w-16 md:h-16 mb-1" />
            </div>
            <div className="flex flex-col items-center">
              <Award2 className="w-10 h-10 md:w-16 md:h-16 mb-1" />
            </div>
            <div className="flex flex-col items-center">
              <Award3 className="w-8 h-8 md:w-14 md:h-14 mb-1 fill-white mt-2" />
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
