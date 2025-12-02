"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ProjectModal } from "@/components/ProjectModal";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const projects = [
  {
    title: "Modern Loft",
    category: "Residential",
    image: "/loft.webp",
  },
  {
    title: "Minimalist Villa",
    category: "Residential",
    image: "/villa.webp",
  },
  {
    title: "Tech Office",
    category: "Commercial",
    image: "/office.webp",
  },
];

export function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <Section id="gallery" className="bg-theme-primary justify-center">
        <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-xl md:text-4xl md:text-5xl font-heading font-bold mb-2 text-theme-primary">
                {t.portfolio.title}
              </h2>
              <p className="text-sm md:text-base text-theme-secondary">
                {t.portfolio.subtitle}
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:block text-theme-primary border-b border-current pb-1 hover:opacity-70 transition-opacity"
            >
              {t.portfolio.viewAll}
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[60vh]">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-sm text-neutral-300 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View All Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="md:hidden mt-4 text-theme-primary border border-neutral-400 dark:border-white/30 px-4 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors mx-auto"
          >
            {t.portfolio.viewAll}
          </button>
        </div>
      </Section>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
