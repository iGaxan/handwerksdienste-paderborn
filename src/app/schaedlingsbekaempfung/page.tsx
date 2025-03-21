'use client';

import ServicePage from '@/components/ServicePage';
import { 
  FaBug,
  FaSpider,
  FaMouse,
  FaShieldAlt, 
  FaSearchPlus,
  FaDove,
  FaHome,
  FaBroom
} from 'react-icons/fa';
import { GiWoodBeam } from 'react-icons/gi';
import JsonLd from '@/components/JsonLd';

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "PestControlService"],
  "@id": "https://ihre-domain.de/schaedlingsbekaempfung",
  "name": "Schädlingsbekämpfung Paderborn – 24h Notdienst & Kammerjäger",
  "image": "/images/hero/pest-control-hero.jpg",
  "description": "✓ 24/7 Kammerjäger Notdienst in Paderborn ✓ Schädlingsbekämpfung vom Experten ✓ Schnell & diskret ✓ Festpreisgarantie ✓ Tel: 017684536648 ✓ 5 Jahre Garantie",
  "url": "https://ihre-domain.de/schaedlingsbekaempfung",
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
    "name": "Schädlingsbekämpfung Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Nagetierbekämpfung",
        "description": "Professionelle Bekämpfung von Ratten, Mäusen und anderen Nagern",
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "80.00",
            "priceCurrency": "EUR",
            "minPrice": "80.00"
          }
        }
      },
      {
        "@type": "Service",
        "name": "Insektenbekämpfung",
        "description": "Effektive Beseitigung von Wespen, Hornissen, Kakerlaken und anderen Insekten",
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "80.00",
            "priceCurrency": "EUR",
            "minPrice": "80.00"
          }
        }
      },
      {
        "@type": "Service",
        "name": "24/7 Notdienst",
        "description": "Schnelle Hilfe bei akutem Schädlingsbefall",
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "120.00",
            "priceCurrency": "EUR",
            "minPrice": "120.00"
          }
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "147",
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
      "name": "Max Mustermann"
    },
    "datePublished": "2024-01-15"
  }
};

const services = [
  {
    title: "Nagetierbekämpfung",
    description: "Professionelle Bekämpfung von Ratten, Mäusen und anderen Nagern - schnell und diskret.",
    icon: <FaMouse className="text-4xl text-white" />,
    href: "/schaedlingsbekaempfung#nagetiere",
    image: "/images/services/pest-control/rodents.jpg"
  },
  {
    title: "Insektenbekämpfung",
    description: "Effektive Beseitigung von Wespen, Hornissen, Kakerlaken und anderen Insekten.",
    icon: <FaBug className="text-4xl text-white" />,
    href: "/schaedlingsbekaempfung#insekten",
    image: "/images/services/pest-control/insects.jpg"
  },
  {
    title: "Spinnenbekämpfung",
    description: "Fachgerechte Entfernung von Spinnen und deren Nestern aus Ihren Räumlichkeiten.",
    icon: <FaSpider className="text-4xl text-white" />,
    href: "/schaedlingsbekaempfung#spinnen",
    image: "/images/services/pest-control/spiders.jpg"
  },
  {
    title: "Taubenabwehr",
    description: "Dauerhafte Lösungen gegen Taubenbefall inkl. Vergrämung und Montage von Abwehrsystemen.",
    icon: <FaDove className="text-4xl text-white" />,
    href: "/schaedlingsbekaempfung#tauben",
    image: "/images/services/pest-control/pigeons.jpg"
  },
  {
    title: "Holzschädlinge",
    description: "Bekämpfung von Holzwürmern, Hausbock und anderen holzzerstörenden Insekten.",
    icon: <GiWoodBeam className="text-4xl text-white" />,
    href: "/schaedlingsbekaempfung#holz",
    image: "/images/services/pest-control/wood.jpg"
  },
  {
    title: "Bettwanzen",
    description: "Professionelle Bettwanzenbekämpfung mit Wärmebehandlung und chemischer Bekämpfung.",
    icon: <FaBug className="text-4xl text-white" />,
    href: "/schaedlingsbekaempfung#bettwanzen",
    image: "/images/services/pest-control/bedbugs.jpg"
  },
  {
    title: "Gebäudedesinfektion",
    description: "Gründliche Desinfektion von Wohn- und Geschäftsräumen nach Schädlingsbefall.",
    icon: <FaBroom className="text-4xl text-white" />,
    href: "/schaedlingsbekaempfung#desinfektion",
    image: "/images/services/pest-control/disinfection.jpg"
  },
  {
    title: "Vorsorge & Monitoring",
    description: "Präventive Maßnahmen und regelmäßige Kontrollen für dauerhafte Schädlingsfreiheit.",
    icon: <FaHome className="text-4xl text-white" />,
    href: "/schaedlingsbekaempfung#vorsorge",
    image: "/images/services/pest-control/prevention.jpg"
  },
  {
    title: "24/7 Notdienst",
    description: "Schnelle Hilfe bei akutem Schädlingsbefall - in 20-30 Minuten vor Ort.",
    icon: <FaShieldAlt className="text-4xl text-white" />,
    href: "/schaedlingsbekaempfung#notdienst",
    image: "/images/services/pest-control/emergency.jpg"
  },
  {
    title: "Befallsanalyse",
    description: "Gründliche Untersuchung der Befallsituation und Entwicklung einer effektiven Strategie.",
    icon: <FaSearchPlus className="text-4xl text-white" />,
    href: "/schaedlingsbekaempfung#analyse",
    image: "/images/services/pest-control/analysis.jpg"
  }
];

const benefits = [
  "24/7 Notdienst bei akutem Befall",
  "Festpreisgarantie ohne versteckte Kosten",
  "5 Jahre Garantie auf alle Behandlungen",
  "In 20-30 Minuten vor Ort",
  "Zertifizierte Schädlingsbekämpfer",
  "Diskrete Durchführung",
  "Umweltschonende Methoden",
  "Professionelle Ausrüstung"
];

export default function SchaedlingsbekaempfungPage() {
  return (
    <>
      <JsonLd data={schemaData} />
      <ServicePage 
        title="Schädlingsbekämpfung Paderborn – 24h Notdienst & Kammerjäger"
        subtitle="Professionelle Schädlingsbekämpfung vom Experten"
        heroImage="/images/hero/pest-control-hero.jpg"
        services={services}
        benefits={benefits}
      />
    </>
  );
} 