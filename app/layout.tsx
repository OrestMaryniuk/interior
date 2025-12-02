import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ActiveSectionProvider } from "@/contexts/ActiveSectionContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Interior Lab | Premium Interior Design Studio",
  description:
    "Award-winning interior design studio specializing in residential and commercial spaces. We create interiors you'll love living in. Design that blends aesthetics and functionality.",
  keywords: [
    "interior design",
    "residential design",
    "commercial design",
    "space planning",
    "interior designer",
    "home design",
    "office design",
  ],
  authors: [{ name: "Interior Lab" }],
  creator: "Interior Lab",
  publisher: "Interior Lab",
  metadataBase: new URL("https://interiorlab.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      uk: "/",
      de: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["uk_UA", "de_DE"],
    url: "https://interiorlab.com",
    title: "Interior Lab | Premium Interior Design Studio",
    description:
      "Award-winning interior design studio specializing in residential and commercial spaces. Transform your space with our expert designers.",
    siteName: "Interior Lab",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Lab - Premium Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Lab | Premium Interior Design Studio",
    description:
      "Award-winning interior design studio. We create interiors you'll love living in.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          inter.variable,
          outfit.variable
        )}
      >
        <ThemeProvider>
          <LanguageProvider>
            <ActiveSectionProvider>{children}</ActiveSectionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
