'use client';

import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SchluesseldienstClient from './SchluesseldienstClient';
import SubdomainNavbar from '@/components/SubdomainNavbar';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.expertevorort.de/schluesseldienst",
  "name": "Schlüsseldienst - Experte vor Ort",
  "image": "https://www.expertevorort.de/images/hero/locksmith-hero.jpg",
  "description": "Ihr Schlüsseldienst mit 24/7 Notdienst. Türöffnung ohne Schäden, Schloss-Austausch und Einbruchschutz.",
  "url": "https://www.expertevorort.de/schluesseldienst",
  "telephone": "+4917684536648",
  "priceRange": "€€",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hatzfelder Straße 68 e",
    "addressLocality": "Paderborn",
    "postalCode": "33104",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.123456",
    "longitude": "7.123456"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Schlüsseldienst Leistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Türöffnung ohne Schäden",
          "description": "Professionelle Türöffnung bei Aussperrung - schnell und ohne Beschädigung Ihrer Tür."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tresoröffnung & Auto",
          "description": "Professionelle Öffnung von Tresoren und Fahrzeugen - schnell und ohne Beschädigung."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Schlüsselanfertigung",
          "description": "Anfertigung von Schlüsseln aller Art - präzise und zuverlässig."
        }
      }
    ]
  }
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.expertevorort.de'),
  title: 'Schlüsseldienst » 24/7 Notdienst & Festpreisgarantie',
  description: 'Ihr Schlüsseldienst ✓ 24h Notdienst ✓ Türöffnung ohne Schäden ✓ Festpreisgarantie ✓ Sofort vor Ort ➤ Jetzt anrufen!',
  keywords: 'Schlüsseldienst, Türöffnung, Schloss-Austausch, Tresoröffnung, Autoöffnung, Schlüsselanfertigung, Einbruchschutz, Schließanlagen, Notdienst, 24/7 Service, Festpreis',
  openGraph: {
    title: 'Schlüsseldienst » 24/7 Notdienst & Festpreisgarantie',
    description: 'Ihr Schlüsseldienst ✓ 24h Notdienst ✓ Türöffnung ohne Schäden ✓ Festpreisgarantie ✓ Sofort vor Ort',
    url: 'https://www.expertevorort.de/schluesseldienst',
    siteName: 'Experte vor Ort',
    images: [
      {
        url: 'https://www.expertevorort.de/images/hero/locksmith-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Schlüsseldienst - Experte vor Ort',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.expertevorort.de/schluesseldienst',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schlüsseldienst » 24/7 Notdienst & Festpreisgarantie',
    description: 'Ihr Schlüsseldienst ✓ 24h Notdienst ✓ Türöffnung ohne Schäden ✓ Festpreisgarantie ✓ Sofort vor Ort',
    images: ['https://www.expertevorort.de/images/hero/locksmith-hero.jpg'],
  },
};

export default function SchluesseldienstPage() {
  return (
    <>
      <JsonLd data={schemaData} />
      <SubdomainNavbar />
      
      <main className="min-h-screen bg-white">
        <section id="hero" className="relative min-h-screen pt-24">
          {/* Hero Section Content */}
          <SchluesseldienstClient />
        </section>

        <section id="leistungen" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Unsere Leistungen</h2>
            {/* Leistungen Content */}
          </div>
        </section>

        <section id="vorteile" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Ihre Vorteile</h2>
            {/* Vorteile Content */}
          </div>
        </section>

        <section id="preise" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Unsere Preise</h2>
            {/* Preise Content */}
          </div>
        </section>

        <section id="kontakt" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Kontakt</h2>
            {/* Kontakt Content */}
          </div>
        </section>
      </main>
    </>
  );
} 