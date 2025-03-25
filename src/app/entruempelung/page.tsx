'use client';

import ServicePage from '@/components/ServicePage';
import EmergencyBanner from '@/components/EmergencyBanner';
import { 
  FaTruck,
  FaRecycle,
  FaHome,
  FaWarehouse,
  FaBoxOpen,
  FaTrash,
  FaHandsHelping,
  FaClipboardCheck,
  FaLeaf,
  FaClock
} from 'react-icons/fa';
import JsonLd from '@/components/JsonLd';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.expertevorort.de/entruempelung",
  "name": "Entrümpelung - Experte vor Ort",
  "image": "https://www.expertevorort.de/images/hero/clearance-hero.jpg",
  "description": "Ihre Entrümpelung und Haushaltsauflösung. Faire Preise und umweltgerechte Entsorgung garantiert.",
  "url": "https://www.expertevorort.de/entruempelung",
  "telephone": "+4917684536648",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "51.7189205",
      "longitude": "8.7419121"
    },
    "geoRadius": "30000"
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
    "latitude": "51.7189205",
    "longitude": "8.7419121"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "€€",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Entrümpelung Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Haushaltsauflösung",
        "description": "Komplette Haushaltsauflösung inkl. Entsorgung",
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "299.00",
            "priceCurrency": "EUR",
            "minPrice": "299.00"
          }
        }
      },
      {
        "@type": "Service",
        "name": "Entrümpelung",
        "description": "Professionelle Entrümpelung von Wohnungen und Häusern",
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "249.00",
            "priceCurrency": "EUR",
            "minPrice": "249.00"
          }
        }
      },
      {
        "@type": "Service",
        "name": "Express-Entrümpelung",
        "description": "Schnelle Entrümpelung innerhalb von 24 Stunden",
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "399.00",
            "priceCurrency": "EUR",
            "minPrice": "399.00"
          }
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Maria Weber"
    },
    "datePublished": "2024-01-15"
  }
};

const services = [
  {
    title: "Haushaltsauflösung",
    description: "Komplette Haushaltsauflösung inkl. Entsorgung und Verwertung.",
    icon: <FaHome className="text-4xl text-white" />,
    href: "/entruempelung/haushaltsaufloesung",
    image: "/images/services/clearance/household.jpg"
  },
  {
    title: "Entrümpelung",
    description: "Professionelle Entrümpelung von Wohnungen und Häusern.",
    icon: <FaTruck className="text-4xl text-white" />,
    href: "/entruempelung/entruempelung",
    image: "/images/services/clearance/clearance.jpg"
  },
  {
    title: "Express-Entrümpelung",
    description: "Schnelle Entrümpelung innerhalb von 24 Stunden.",
    icon: <FaClock className="text-4xl text-white" />,
    href: "/entruempelung/express",
    image: "/images/services/clearance/express.jpg"
  },
  {
    title: "Keller-Entrümpelung",
    description: "Spezialisierte Entrümpelung von Kellern und Lagerräumen.",
    icon: <FaWarehouse className="text-4xl text-white" />,
    href: "/entruempelung/keller",
    image: "/images/services/clearance/cellar.jpg"
  },
  {
    title: "Dachboden-Entrümpelung",
    description: "Professionelle Entrümpelung von Dachböden.",
    icon: <FaBoxOpen className="text-4xl text-white" />,
    href: "/entruempelung/dachboden",
    image: "/images/services/clearance/attic.jpg"
  },
  {
    title: "Garten-Entrümpelung",
    description: "Entrümpelung und Entsorgung von Gartenabfällen.",
    icon: <FaLeaf className="text-4xl text-white" />,
    href: "/entruempelung/garten",
    image: "/images/services/clearance/garden.jpg"
  },
  {
    title: "Gewerbe-Entrümpelung",
    description: "Entrümpelung von Geschäftsräumen und Büros.",
    icon: <FaTrash className="text-4xl text-white" />,
    href: "/entruempelung/gewerbe",
    image: "/images/services/clearance/commercial.jpg"
  },
  {
    title: "Nachlassregelung",
    description: "Sensible und professionelle Nachlassregelung.",
    icon: <FaHandsHelping className="text-4xl text-white" />,
    href: "/entruempelung/nachlass",
    image: "/images/services/clearance/estate.jpg"
  },
  {
    title: "Recycling",
    description: "Umweltgerechte Entsorgung und Verwertung.",
    icon: <FaRecycle className="text-4xl text-white" />,
    href: "/entruempelung/recycling",
    image: "/images/services/clearance/recycling.jpg"
  },
  {
    title: "Dokumentation",
    description: "Ausführliche Dokumentation aller Arbeiten.",
    icon: <FaClipboardCheck className="text-4xl text-white" />,
    href: "/entruempelung/dokumentation",
    image: "/images/services/clearance/documentation.jpg"
  }
];

const benefits = [
  "Kostenlose Besichtigung vor Ort",
  "Festpreisgarantie ohne versteckte Kosten",
  "Express-Service innerhalb 24h möglich",
  "Besenreine Übergabe",
  "Wertanrechnung möglich",
  "Umweltgerechte Entsorgung",
  "Komplett-Service aus einer Hand",
  "Über 15 Jahre Erfahrung"
];

export default function EntruempelungPage() {
  return (
    <>
      <JsonLd data={schemaData} />
      <EmergencyBanner />
      <ServicePage 
        title="Entrümpelung Paderborn – Schnell & Preiswert"
        subtitle="Ihr Experte für Entrümpelung und Haushaltsauflösung"
        heroImage="/images/hero/clearance-hero.jpg"
        services={services}
        benefits={benefits}
      />
    </>
  );
} 