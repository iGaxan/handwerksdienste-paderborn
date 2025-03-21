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
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://ihre-domain.de/entruempelung",
  "name": "Entrümpelung Paderborn – Schnell & Preiswert",
  "image": "/images/entruempelung-hero.jpg",
  "description": "✓ Professionelle Entrümpelung in Paderborn ✓ Haushaltsauflösung ✓ Schnell & zuverlässig ✓ Festpreisgarantie ✓ Tel: 017684536648 ✓ Kostenlose Besichtigung",
  "url": "https://ihre-domain.de/entruempelung",
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
    description: "Professionelle Auflösung kompletter Haushalte inkl. Entsorgung und Reinigung.",
    icon: <FaHome className="text-4xl text-white" />,
    href: "/entruempelung#haushaltsaufloesung",
    image: "/images/services/entruempelung/household.jpg"
  },
  {
    title: "Entrümpelung",
    description: "Schnelle und zuverlässige Entrümpelung von Wohnungen, Häusern und Kellern.",
    icon: <FaTruck className="text-4xl text-white" />,
    href: "/entruempelung#entruempelung",
    image: "/images/services/entruempelung/clearing.jpg"
  },
  {
    title: "Gewerberäumung",
    description: "Räumung von Büros, Lagern und Geschäftsräumen - termingerecht und diskret.",
    icon: <FaWarehouse className="text-4xl text-white" />,
    href: "/entruempelung#gewerbe",
    image: "/images/services/entruempelung/commercial.jpg"
  },
  {
    title: "Nachlassauflösung",
    description: "Pietätvolle und sorgfältige Auflösung von Nachlässen und Wertermittlung.",
    icon: <FaBoxOpen className="text-4xl text-white" />,
    href: "/entruempelung#nachlass",
    image: "/images/services/entruempelung/estate.jpg"
  },
  {
    title: "Sperrmüll-Service",
    description: "Fachgerechte Entsorgung von Sperrmüll und Altmöbeln aller Art.",
    icon: <FaTrash className="text-4xl text-white" />,
    href: "/entruempelung#sperrmuell",
    image: "/images/services/entruempelung/bulky-waste.jpg"
  },
  {
    title: "Wertanrechnung",
    description: "Faire Wertanrechnung für gut erhaltene Möbel und Antiquitäten.",
    icon: <FaHandsHelping className="text-4xl text-white" />,
    href: "/entruempelung#wertanrechnung",
    image: "/images/services/entruempelung/valuation.jpg"
  },
  {
    title: "Bestandsaufnahme",
    description: "Kostenlose Besichtigung und detaillierte Bestandsaufnahme vor Ort.",
    icon: <FaClipboardCheck className="text-4xl text-white" />,
    href: "/entruempelung#bestandsaufnahme",
    image: "/images/services/entruempelung/inventory.jpg"
  },
  {
    title: "Recycling",
    description: "Umweltgerechte Entsorgung und Wiederverwertung von Materialien.",
    icon: <FaRecycle className="text-4xl text-white" />,
    href: "/entruempelung#recycling",
    image: "/images/services/entruempelung/recycling.jpg"
  },
  {
    title: "Grüne Entsorgung",
    description: "Nachhaltige Entsorgung mit Fokus auf Umweltschutz und Recycling.",
    icon: <FaLeaf className="text-4xl text-white" />,
    href: "/entruempelung#green",
    image: "/images/services/entruempelung/green.jpg"
  },
  {
    title: "Express-Service",
    description: "Schnelle Entrümpelung innerhalb von 24 Stunden im Notfall.",
    icon: <FaClock className="text-4xl text-white" />,
    href: "/entruempelung#express",
    image: "/images/services/entruempelung/express.jpg"
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
        heroImage="/images/entruempelung-hero.jpg"
        services={services}
        benefits={benefits}
      />
    </>
  );
} 