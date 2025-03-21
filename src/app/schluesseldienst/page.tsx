import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SchluesseldienstClient from './SchluesseldienstClient';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ihre-domain.de/schluesseldienst",
  "name": "24/7 Schlüsseldienst",
  "image": "/images/hero/locksmith-hero.jpg",
  "description": "Ihr professioneller Schlüsseldienst für schnelle und schadenfreie Türöffnungen. 24/7 Notdienst mit Festpreisgarantie und 20-30 Minuten Reaktionszeit.",
  "priceRange": "€€",
  "telephone": "+49176 84536648",
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
    "streetAddress": "Hatzfelder Str. 68 E",
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Schlüsseldienst 24/7 | Professionelle Türöffnung & Schlüsselanfertigung',
    description: 'Ihr professioneller Schlüsseldienst für schnelle und schadenfreie Türöffnungen. ✓ 24/7 Notdienst ✓ Festpreisgarantie ✓ Tresoröffnung ✓ Schlüsselanfertigung ✓ Autoöffnung. Jetzt anrufen!',
    keywords: 'Schlüsseldienst, Türöffnung, Schloss-Austausch, Tresoröffnung, Autoöffnung, Schlüsselanfertigung, Einbruchschutz, Schließanlagen, Notdienst, 24/7 Service, Festpreis',
    openGraph: {
      title: 'Schlüsseldienst 24/7 | Professionelle Türöffnung & Schlüsselanfertigung',
      description: 'Ihr professioneller Schlüsseldienst für schnelle und schadenfreie Türöffnungen. ✓ 24/7 Notdienst ✓ Festpreisgarantie ✓ Tresoröffnung ✓ Schlüsselanfertigung ✓ Autoöffnung.',
      images: ['/images/hero/locksmith-hero.jpg'],
      type: 'website',
      locale: 'de_DE',
    },
    alternates: {
      canonical: 'https://ihre-domain.de/schluesseldienst',
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
  };
}

export default function SchluessseldienstPage() {
  return (
    <>
      <JsonLd data={schemaData} />
      <SchluesseldienstClient />
    </>
  );
} 