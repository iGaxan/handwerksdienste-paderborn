'use client';

import ServicePage from '@/components/ServicePage';
import EmergencyBanner from '@/components/EmergencyBanner';
import { 
  FaBolt,
  FaPlug,
  FaLightbulb,
  FaShieldAlt,
  FaHome,
  FaTools,
  FaSearchPlus,
  FaSolarPanel,
  FaChargingStation,
  FaBell
} from 'react-icons/fa';
import type { IconType } from 'react-icons';
import JsonLd from '@/components/JsonLd';
import { notFound } from 'next/navigation';
import { cities } from '../cities';

interface Props {
  params: {
    city: string;
  };
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Elektro-Notdienst",
    description: "24/7 Notdienst bei elektrischen Störungen und Ausfällen. Schnelle Hilfe in jeder Situation.",
    icon: <FaBolt size={24} className="text-white" />,
    href: "/elektro/notdienst",
    image: "/images/services/electrical/emergency.jpg"
  },
  {
    title: "Elektroinstallation",
    description: "Professionelle Elektroinstallationen für Neu- und Altbauten. Von der Planung bis zur Ausführung.",
    icon: <FaPlug size={24} className="text-white" />,
    href: "/elektro/installation",
    image: "/images/services/electrical/installation.jpg"
  },
  {
    title: "Beleuchtung",
    description: "Installation und Wartung von modernen Beleuchtungssystemen. Energieeffiziente Lösungen.",
    icon: <FaLightbulb size={24} className="text-white" />,
    href: "/elektro/beleuchtung",
    image: "/images/services/electrical/lighting.jpg"
  },
  {
    title: "Sicherheitstechnik",
    description: "Installation von Alarmanlagen, Videoüberwachung und Einbruchschutz.",
    icon: <FaShieldAlt size={24} className="text-white" />,
    href: "/elektro/sicherheit",
    image: "/images/services/electrical/security.jpg"
  },
  {
    title: "Smart Home",
    description: "Integration von Smart Home Systemen für mehr Komfort und Energieeffizienz.",
    icon: <FaHome size={24} className="text-white" />,
    href: "/elektro/smart-home",
    image: "/images/services/electrical/smart-home.jpg"
  },
  {
    title: "Reparatur",
    description: "Reparatur und Wartung von elektrischen Anlagen und Geräten.",
    icon: <FaTools size={24} className="text-white" />,
    href: "/elektro/reparatur",
    image: "/images/services/electrical/repair.jpg"
  },
  {
    title: "E-Check",
    description: "Normgerechte Prüfung Ihrer elektrischen Anlagen für maximale Sicherheit.",
    icon: <FaSearchPlus size={24} className="text-white" />,
    href: "/elektro/e-check",
    image: "/images/services/electrical/e-check.jpg"
  },
  {
    title: "Photovoltaik",
    description: "Installation und Wartung von Solaranlagen für nachhaltige Energiegewinnung.",
    icon: <FaSolarPanel size={24} className="text-white" />,
    href: "/elektro/photovoltaik",
    image: "/images/services/electrical/solar.jpg"
  },
  {
    title: "E-Ladestationen",
    description: "Installation von Ladestationen für Elektrofahrzeuge.",
    icon: <FaChargingStation size={24} className="text-white" />,
    href: "/elektro/ladestationen",
    image: "/images/services/electrical/charging.jpg"
  },
  {
    title: "Alarmanlagen",
    description: "Installation und Wartung von Alarmanlagen für Ihr Zuhause.",
    icon: <FaBell size={24} className="text-white" />,
    href: "/elektro/alarmanlagen",
    image: "/images/services/electrical/alarm.jpg"
  }
];

const benefits = [
  "24/7 Notdienst bei Störungen",
  "Festpreisgarantie ohne versteckte Kosten",
  "5 Jahre Garantie auf Installationen",
  "In 20-30 Minuten vor Ort",
  "Meisterbetrieb mit Qualitätsgarantie",
  "Modernste Messtechnik",
  "VDE-geprüfte Arbeit",
  "Alle Elektroarbeiten aus einer Hand"
];

export default function ElektroPage({ params }: Props) {
  const cityData = cities.find((c) => c.slug === params.city);
  
  if (!cityData) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.expertevorort.de/elektro/${params.city}`,
    "name": `Elektriker ${cityData.name} - Experte vor Ort`,
    "image": "https://www.expertevorort.de/images/hero/electrical-hero.jpg",
    "description": `Ihr Elektriker mit 24/7 Notdienst in ${cityData.name}. E-Check, Elektroinstallationen und Smart Home Lösungen.`,
    "url": `https://www.expertevorort.de/elektro/${params.city}`,
    "telephone": "+4917684536648",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": cityData.lat.toString(),
        "longitude": cityData.lng.toString()
      },
      "geoRadius": "30000"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hatzfelder Straße 68 e",
      "addressLocality": cityData.name,
      "postalCode": cityData.zip,
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cityData.lat.toString(),
      "longitude": cityData.lng.toString()
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
      "name": "Elektro Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Elektro-Notdienst",
          "description": "24/7 Notdienst bei elektrischen Störungen und Ausfällen",
          "offers": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "89.00",
              "priceCurrency": "EUR",
              "minPrice": "89.00"
            }
          }
        },
        {
          "@type": "Service",
          "name": "Elektroinstallation",
          "description": "Professionelle Elektroinstallationen für Neu- und Altbauten",
          "offers": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "75.00",
              "priceCurrency": "EUR",
              "minPrice": "75.00"
            }
          }
        },
        {
          "@type": "Service",
          "name": "E-Check",
          "description": "Normgerechte Prüfung Ihrer elektrischen Anlagen",
          "offers": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "95.00",
              "priceCurrency": "EUR",
              "minPrice": "95.00"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "183",
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
        "name": "Thomas Schmidt"
      },
      "datePublished": "2024-01-15"
    }
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <EmergencyBanner />
      <ServicePage 
        title={`Elektriker ${cityData.name} – 24h Notdienst & Elektroinstallation`}
        subtitle={`Ihr Elektro-Meisterbetrieb für alle elektrischen Installationen in ${cityData.name}`}
        heroImage="/images/hero/electrical-hero.jpg"
        services={services}
        benefits={benefits}
      />
    </>
  );
} 