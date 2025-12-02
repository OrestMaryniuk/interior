"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

type ProjectKey = keyof typeof translations.en.projects;

interface Project {
  id: number;
  titleKey: ProjectKey;
  category: string;
  image: string;
  descriptionKey: ProjectKey;
  details: {
    clientKey: ProjectKey;
    year: string;
    area: string;
    services: string[];
  };
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  const allProjects: Project[] = [
    {
      id: 1,
      titleKey: "modernLoft",
      category: t.portfolio.residential,
      image: "/loft.webp",
      descriptionKey: "modernLoft",
      details: {
        clientKey: "modernLoft",
        year: "2023",
        area: "2,500 sq ft",
        services: [
          t.services.residential.title,
          t.footer.spacePlanning,
          "Custom Furniture",
        ],
      },
    },
    {
      id: 2,
      titleKey: "minimalistVilla",
      category: t.portfolio.residential,
      image: "/villa.webp",
      descriptionKey: "minimalistVilla",
      details: {
        clientKey: "minimalistVilla",
        year: "2023",
        area: "4,200 sq ft",
        services: [
          "Full Interior Design",
          "Landscape Integration",
          "Lighting Design",
        ],
      },
    },
    {
      id: 3,
      titleKey: "techOffice",
      category: t.portfolio.commercial,
      image: "/office.webp",
      descriptionKey: "techOffice",
      details: {
        clientKey: "techOffice",
        year: "2024",
        area: "8,000 sq ft",
        services: [
          "Office Design",
          "Branding Integration",
          "Acoustic Solutions",
        ],
      },
    },
    {
      id: 4,
      titleKey: "coastalRetreat",
      category: t.portfolio.residential,
      image: "/coast.webp",
      descriptionKey: "coastalRetreat",
      details: {
        clientKey: "coastalRetreat",
        year: "2023",
        area: "3,800 sq ft",
        services: ["Interior Design", "Custom Millwork", "Art Curation"],
      },
    },
    {
      id: 5,
      titleKey: "urbanPenthouse",
      category: t.portfolio.residential,
      image: "/urban.webp",
      descriptionKey: "urbanPenthouse",
      details: {
        clientKey: "urbanPenthouse",
        year: "2024",
        area: "5,500 sq ft",
        services: [
          "Interior Design",
          "Smart Home Integration",
          "Custom Furniture",
        ],
      },
    },
    {
      id: 6,
      titleKey: "boutiqueHotel",
      category: t.portfolio.commercial,
      image: "/hotel.webp",
      descriptionKey: "boutiqueHotel",
      details: {
        clientKey: "boutiqueHotel",
        year: "2023",
        area: "12,000 sq ft",
        services: [
          "Full Interior Design",
          "FF&E Procurement",
          "Brand Experience",
        ],
      },
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-theme-primary" />
            </button>

            {/* Content */}
            <div className="overflow-y-auto max-h-[90vh] p-8 md:p-12">
              {!selectedProject ? (
                // Gallery View
                <>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-theme-primary mb-8">
                    {t.portfolio.allProjects}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleProjectClick(project)}
                        className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
                      >
                        <img
                          src={project.image}
                          alt={t.projects[project.titleKey].title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                          <span className="text-sm text-neutral-300 mb-2">
                            {project.category}
                          </span>
                          <h3 className="text-2xl font-heading font-bold text-white">
                            {t.projects[project.titleKey].title}
                          </h3>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : (
                // Project Detail View
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <button
                    onClick={handleBack}
                    className="mb-6 text-theme-secondary hover:text-theme-primary transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    {t.portfolio.backToGallery}
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={selectedProject.image}
                        alt={t.projects[selectedProject.titleKey].title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div>
                      <span className="text-sm text-theme-accent uppercase tracking-wider">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-4xl font-heading font-bold text-theme-primary mt-2 mb-6">
                        {t.projects[selectedProject.titleKey].title}
                      </h2>
                      <p className="text-theme-secondary text-lg leading-relaxed mb-8">
                        {t.projects[selectedProject.descriptionKey].description}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-medium text-theme-accent mb-2">
                            {t.portfolio.client}
                          </h4>
                          <p className="text-theme-primary">
                            {
                              t.projects[selectedProject.details.clientKey]
                                .client
                            }
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-theme-accent mb-2">
                            {t.portfolio.year}
                          </h4>
                          <p className="text-theme-primary">
                            {selectedProject.details.year}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-theme-accent mb-2">
                            {t.portfolio.area}
                          </h4>
                          <p className="text-theme-primary">
                            {selectedProject.details.area}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-theme-accent mb-2">
                            {t.portfolio.services}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.details.services.map(
                              (service, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-black/5 dark:bg-white/5 border border-neutral-300 dark:border-white/10 rounded-full text-sm text-theme-secondary"
                                >
                                  {service}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
