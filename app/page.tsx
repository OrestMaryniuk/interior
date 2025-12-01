"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Interior Lab",
    "url": "https://interiorlab.com",
    "logo": "https://interiorlab.com/logo.png",
    "description": "Award-winning interior design studio specializing in residential and commercial spaces.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Design District",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@interiorlab.com",
      "availableLanguage": ["English", "Ukrainian", "German"]
    },
    "sameAs": [
      "https://www.instagram.com/interiorlab",
      "https://www.facebook.com/interiorlab",
      "https://www.linkedin.com/company/interiorlab"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Interior Lab",
    "image": "https://interiorlab.com/og-image.jpg",
    "@id": "https://interiorlab.com",
    "url": "https://interiorlab.com",
    "telephone": "+1-555-123-4567",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Design District",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Interior Design",
    "provider": {
      "@type": "Organization",
      "name": "Interior Lab"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Interior Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Space Planning"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Main Content */}
      <div className="h-screen overflow-y-auto snap-y-mandatory">
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <Services />
          <Portfolio />
          <Reviews />
          <Contact />
        </main>
      </div>
    </>
  );
}
