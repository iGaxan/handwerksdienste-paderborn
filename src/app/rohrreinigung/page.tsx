import { Metadata } from 'next';
import RohrreinigungClient from './RohrreinigungClient';
import JsonLd from '@/components/JsonLd';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ihre-domain.de/rohrreinigung",
  "name": "24/7 Rohrreinigung Notdienst",
  "image": "/images/hero/plumber-hero.jpg",
  "description": "Professioneller Rohrreinigungsservice mit 24/7 Notdienst für Verstopfungen, Kanalreinigung und Rohrbruch-Reparaturen. 5 Jahre Garantie auf alle Arbeiten.",
  "url": "https://ihre-domain.de/rohrreinigung",
  "telephone": "+49176 84536648",
  "areaServed": "Paderborn und Umgebung",
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
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hatzfelder Str. 68 E",
    "addressLocality": "Paderborn",
    "postalCode": "33104",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.7189205",
    "longitude": "8.7419121"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Rohrreinigungsservices",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Notfall-Rohrreinigung",
          "description": "24/7 Soforthilfe bei verstopften Rohren und Abflüssen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kanalreinigung",
          "description": "Professionelle Reinigung von Hausanschlüssen und Kanälen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rohrbruch-Reparatur",
          "description": "Schnelle und zuverlässige Reparatur von Rohrbrüchen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rohrverlegung",
          "description": "Fachgerechte Installation und Verlegung neuer Rohrleitungen"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "147"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Garantie",
      "value": "5 Jahre auf alle fertigen Arbeiten"
    },
    {
      "@type": "PropertyValue",
      "name": "Reaktionszeit",
      "value": "20-30 Minuten im Notfall"
    }
  ]
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rohrreinigung & Verstopfungen | 24/7 Notdienst Paderborn',
    description: 'Professionelle Rohrreinigung, Kanalreinigung und Rohrbruch-Reparatur in Paderborn. ✓ 24/7 Notdienst ✓ 20-30 Min. vor Ort ✓ Festpreisgarantie ✓ 5 Jahre Garantie ✓ Modernste Technik',
    keywords: 'Rohrreinigung Paderborn, Verstopfung, Abflussreinigung, Kanalreinigung, Notdienst, Hochdruckreinigung, Rohrverstopfung, Rohrbruch, Rohrverlegung, Kamerainspektion',
    openGraph: {
      title: 'Rohrreinigung & Verstopfungen | 24/7 Notdienst Paderborn',
      description: 'Professionelle Rohrreinigung und Verstopfungsbeseitigung in Paderborn. ✓ 24/7 Notdienst ✓ Festpreisgarantie ✓ Kanalreinigung ✓ Rohrbruch-Reparatur ✓ 5 Jahre Garantie',
      images: ['/images/hero/plumber-hero.jpg'],
      type: 'website',
      locale: 'de_DE',
    },
    alternates: {
      canonical: 'https://ihre-domain.de/rohrreinigung',
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

export default function Rohrreinigung() {
  return (
    <>
      <JsonLd data={schemaData} />
      <RohrreinigungClient />
    </>
  );
}
