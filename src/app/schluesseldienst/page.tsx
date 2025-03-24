import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SchluesseldienstClient from './SchluesseldienstClient';

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

export default function SchluessseldienstPage() {
  return (
    <>
      <JsonLd data={schemaData} />
      <SchluesseldienstClient />
    </>
  );
} 