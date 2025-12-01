"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn(
        "relative h-screen w-full overflow-hidden snap-start flex flex-col",
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
