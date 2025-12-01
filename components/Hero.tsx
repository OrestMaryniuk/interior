"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <Section id="hero" className="justify-center relative overflow-hidden">
      {/* Background Image with theme-aware overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
          alt="Modern Interior"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for dark theme */}
        <div className="absolute inset-0 bg-black/40 dark:block hidden" />
        {/* Light overlay for light theme */}
        <div className="absolute inset-0 bg-white/70 dark:hidden block" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 pt-20">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6 text-theme-primary"
          >
            {t.hero.title} <br />
            {t.hero.titleContinue}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-theme-secondary mb-10 max-w-2xl font-light"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl hover:shadow-2xl hover:bg-neutral-800 dark:hover:bg-neutral-100 w-fit"
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
          <span className="text-sm uppercase tracking-widest text-theme-accent mb-4">
            {t.hero.awards}
          </span>
          <div className="flex gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 text-theme-primary">
             {/* Placeholders for awards icons */}
             <div className="flex flex-col items-center">
                <Award className="w-8 h-8 mb-1" />
                <span className="text-xs">A'Design</span>
             </div>
             <div className="flex flex-col items-center">
                <Award className="w-8 h-8 mb-1" />
                <span className="text-xs">SBID</span>
             </div>
             <div className="flex flex-col items-center">
                <Award className="w-8 h-8 mb-1" />
                <span className="text-xs">RedDot</span>
             </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
