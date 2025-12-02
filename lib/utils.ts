import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string,
  setActiveSection: (section: string) => void
) => {
  e.preventDefault();
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    setActiveSection(targetId);
  }
};
