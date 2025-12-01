"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Home, Building2, Layout } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceIcons = {
  residential: Home,
  commercial: Building2,
  planning: Layout,
};

export function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: serviceIcons.residential,
      title: t.services.residential.title,
      description: t.services.residential.description,
    },
    {
      icon: serviceIcons.commercial,
      title: t.services.commercial.title,
      description: t.services.commercial.description,
    },
    {
      icon: serviceIcons.planning,
      title: t.services.planning.title,
      description: t.services.planning.description,
    },
  ];

  return (
    <Section id="services" className="bg-theme-tertiary justify-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-theme-primary">
            {t.services.title}
          </h2>
          <p className="text-theme-secondary max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white dark:bg-neutral-900 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-8 h-8 text-white dark:text-black" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-theme-primary">
                {service.title}
              </h3>
              <p className="text-theme-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
