"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Reviews() {
  const { t } = useLanguage();

  return (
    <Section id="reviews" className="bg-theme-secondary justify-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-theme-primary">
            {t.reviews.title}
          </h2>
          <p className="text-theme-secondary max-w-2xl mx-auto">
            {t.reviews.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-neutral-900 p-8 rounded-3xl relative border border-neutral-200 dark:border-neutral-800"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-neutral-200 dark:text-neutral-800" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-theme-secondary mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                  <span className="text-lg font-bold text-theme-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-theme-primary">{testimonial.name}</h4>
                  <p className="text-sm text-theme-accent">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
