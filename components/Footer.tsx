"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Leaf, Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
  ],
  services: [
    { name: "Residential Design", href: "#services" },
    { name: "Commercial Design", href: "#services" },
    { name: "Space Planning", href: "#services" },
    { name: "Consultation", href: "#contact" },
  ],
  contact: [
    { icon: Mail, text: "hello@interiorlab.com", href: "mailto:hello@interiorlab.com" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "123 Design District, NY", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-white" />
              <span className="text-2xl font-heading font-bold text-white">
                Interior Lab
              </span>
            </div>
            <p className="text-neutral-400 text-sm mb-6">
              Creating interiors you'll love living in. Design that blends aesthetics and functionality.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-heading font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Interior Lab. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
