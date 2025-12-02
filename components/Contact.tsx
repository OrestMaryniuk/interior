"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { sendEmail } from "@/app/actions";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/public/logo.svg";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { name: t.nav.about, href: "#about" },
      { name: t.nav.services, href: "#services" },
      { name: t.portfolio.title, href: "#gallery" },
      { name: t.nav.reviews, href: "#reviews" },
    ],
    services: [
      { name: t.footer.residentialDesign, href: "#services" },
      { name: t.footer.commercialDesign, href: "#services" },
      { name: t.footer.spacePlanning, href: "#services" },
      { name: t.footer.consultation, href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await sendEmail(formData);

    setIsSubmitting(false);
    if (result.success) {
      setSubmitStatus({ success: true, message: t.contact.successMessage });
      (document.getElementById("contact-form") as HTMLFormElement)?.reset();
    } else {
      setSubmitStatus({
        success: false,
        message: result.error || "Something went wrong.",
      });
    }
  }

  return (
    <Section id="contact" className="bg-theme-secondary !h-screen flex-col">
      {/* Contact Form Section - 85% */}
      <div className="flex-1 flex items-center" style={{ height: "85%" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl md:text-4xl lg:text-6xl font-heading font-bold mb-6 text-theme-primary">
                {t.contact.title} <br />
                <span className="text-theme-accent">
                  {t.contact.titleAccent}
                </span>
              </h2>
              <p className="text-theme-secondary text-lg md:mb-12 max-w-md hidden md:block">
                {t.contact.subtitle}
              </p>

              <div className="space-y-2 md:space-y-6 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-theme-primary" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-theme-accent">
                      {t.contact.emailLabel}
                    </p>
                    <p className="text-xs md:text-lg font-medium text-theme-primary">
                      hello@interiorlab.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-theme-primary" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-theme-accent">
                      {t.contact.phoneLabel}
                    </p>
                    <p className="text-xs md:text-lg font-medium text-theme-primary">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-theme-primary" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-theme-accent">
                      {t.contact.visitLabel}
                    </p>
                    <p className="text-xs md:text-lg font-medium text-theme-primary">
                      123 Design District, NY
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              id="contact-form"
              action={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-white/5 p-4 lg:p-8 rounded-3xl border border-neutral-200 dark:border-white/10"
            >
              <div className="space-y-2 md:space-y-6">
                <div className="grid grid-cols-2 gap-2 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-medium text-theme-secondary">
                      {t.contact.firstName}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="text-xs md:text-base w-full bg-neutral-100 dark:bg-black/20 border border-neutral-300 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-black dark:focus:border-white/30 transition-colors text-theme-primary"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-medium text-theme-secondary">
                      {t.contact.lastName}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="text-xs md:text-base w-full bg-neutral-100 dark:bg-black/20 border border-neutral-300 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-black dark:focus:border-white/30 transition-colors text-theme-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-theme-secondary">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="text-xs md:text-base w-full bg-neutral-100 dark:bg-black/20 border border-neutral-300 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-black dark:focus:border-white/30 transition-colors text-theme-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-theme-secondary">
                    {t.contact.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    className="text-xs md:text-base w-full bg-neutral-100 dark:bg-black/20 border border-neutral-300 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-black dark:focus:border-white/30 transition-colors md:h-32 resize-none text-theme-primary"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`flex items-center gap-2 p-4 rounded-xl ${
                      submitStatus.success
                        ? "bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400"
                    }`}
                  >
                    {submitStatus.success && (
                      <CheckCircle2 className="w-5 h-5" />
                    )}
                    <span className="text-xs md:text-sm">
                      {submitStatus.message}
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-4 rounded-xl hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.contact.sending : t.contact.send}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Footer Section - 15% */}
      <footer
        className="bg-neutral-100 dark:bg-black border-t border-neutral-300 dark:border-white/10"
        style={{ height: "15%", minHeight: "120px" }}
      >
        <div className="container mx-auto px-6 md:px-12 h-full flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 items-center">
            {/* Brand */}
            <div className="items-center gap-2 hidden md:flex">
              <Logo className="h-6 w-6 fill-theme-primary" />
              <span className="text-lg font-heading font-bold text-theme-primary">
                Interior Lab
              </span>
            </div>

            {/* Quick Links */}
            <div className="gap-4 text-sm hidden md:flex">
              {footerLinks.company.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-theme-secondary hover:text-theme-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4 text-theme-primary" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-right">
              <p className="text-theme-accent text-sm">
                © {new Date().getFullYear()} Interior Lab
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Section>
  );
}
