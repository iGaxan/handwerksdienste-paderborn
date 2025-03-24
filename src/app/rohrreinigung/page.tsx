import { Metadata } from 'next';
import RohrreinigungClient from './RohrreinigungClient';
import JsonLd from '@/components/JsonLd';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.expertevorort.de/rohrreinigung",
  "name": "Rohrreinigung - Experte vor Ort",
  "image": "https://www.expertevorort.de/images/hero/plumbing-hero.jpg",
  "description": "Ihre Rohrreinigung mit 24/7 Notdienst. Verstopfungen beseitigen, Kamera-Inspektion und Kanalreinigung.",
  "url": "https://www.expertevorort.de/rohrreinigung",
  "telephone": "+4917684536648",
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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.expertevorort.de'),
  title: 'Rohrreinigung » 24/7 Notdienst & Festpreisgarantie',
  description: 'Ihre Rohrreinigung ✓ 24h Notdienst ✓ Verstopfungen beseitigen ✓ Kamera-Inspektion ✓ Festpreisgarantie ➤ Jetzt anrufen!',
  keywords: 'Rohrreinigung Paderborn, Verstopfung, Abflussreinigung, Kanalreinigung, Notdienst, Hochdruckreinigung, Rohrverstopfung, Rohrbruch, Rohrverlegung, Kamerainspektion',
  alternates: {
    canonical: 'https://www.expertevorort.de/rohrreinigung',
  },
  openGraph: {
    title: 'Rohrreinigung » 24/7 Notdienst & Festpreisgarantie',
    description: 'Ihre Rohrreinigung ✓ 24h Notdienst ✓ Verstopfungen beseitigen ✓ Kamera-Inspektion ✓ Festpreisgarantie',
    url: 'https://www.expertevorort.de/rohrreinigung',
    siteName: 'Experte vor Ort',
    images: [
      {
        url: 'https://www.expertevorort.de/images/hero/plumbing-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Rohrreinigung - Experte vor Ort',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohrreinigung » 24/7 Notdienst & Festpreisgarantie',
    description: 'Ihre Rohrreinigung ✓ 24h Notdienst ✓ Verstopfungen beseitigen ✓ Kamera-Inspektion ✓ Festpreisgarantie',
    images: ['https://www.expertevorort.de/images/hero/plumbing-hero.jpg'],
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

export default function Rohrreinigung() {
  return (
    <>
      <JsonLd data={schemaData} />
      <RohrreinigungClient />
    </>
  );
}
