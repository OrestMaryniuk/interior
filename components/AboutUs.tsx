"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutUs() {
  const { t } = useLanguage();
  
  return (
    <Section id="about" className="bg-theme-secondary justify-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-theme-primary">
              {t.about.title} <br />
              <span className="text-theme-accent">{t.about.titleAccent}</span>
            </h2>
            <p className="text-theme-secondary text-lg mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-theme-secondary text-lg leading-relaxed">
              {t.about.description2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-4xl font-heading font-bold text-theme-primary">50+</h3>
                <p className="text-sm text-theme-accent mt-2">{t.about.projects}</p>
              </div>
              <div>
                <h3 className="text-4xl font-heading font-bold text-theme-primary">15+</h3>
                <p className="text-sm text-theme-accent mt-2">{t.about.awards}</p>
              </div>
              <div>
                <h3 className="text-4xl font-heading font-bold text-theme-primary">100%</h3>
                <p className="text-sm text-theme-accent mt-2">{t.about.satisfaction}</p>
              </div>
            </div>
          </motion.div>

          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop"
                alt="About Us"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-neutral-300 dark:bg-neutral-700 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-neutral-200 dark:bg-neutral-800 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
