'use client';

import ServicePage from '@/components/ServicePage';
import { 
  FaWater, 
  FaFan, 
  FaThermometerHalf, 
  FaSearchPlus, 
  FaHome, 
  FaShieldAlt 
} from 'react-icons/fa';

const services = [
  {
    title: "Wasserschadensanierung",
    description: "Professionelle Beseitigung von Wasserschäden aller Art.",
    icon: <FaWater className="text-3xl" />,
    href: "/wasserschaden/sanierung",
    image: "/images/services/water-damage/sanierung.jpg"
  },
  {
    title: "Trocknung",
    description: "Schnelle und effektive Trocknung mit modernster Technik.",
    icon: <FaFan className="text-3xl" />,
    href: "/wasserschaden/trocknung",
    image: "/images/services/water-damage/trocknung.jpg"
  },
  {
    title: "Feuchtemessung",
    description: "Präzise Messung und Dokumentation der Feuchtigkeit.",
    icon: <FaThermometerHalf className="text-3xl" />,
    href: "/wasserschaden/feuchtemessung",
    image: "/images/services/water-damage/feuchtemessung.jpg"
  },
  {
    title: "Schadensanalyse",
    description: "Gründliche Analyse des Wasserschadens und seiner Ursachen.",
    icon: <FaSearchPlus className="text-3xl" />,
    href: "/wasserschaden/analyse",
    image: "/images/services/water-damage/analyse.jpg"
  },
  {
    title: "Komplettsanierung",
    description: "Vollständige Sanierung von der Trocknung bis zur Renovierung.",
    icon: <FaHome className="text-3xl" />,
    href: "/wasserschaden/komplettsanierung",
    image: "/images/services/water-damage/komplettsanierung.jpg"
  },
  {
    title: "Präventivmaßnahmen",
    description: "Beratung und Umsetzung vorbeugender Maßnahmen.",
    icon: <FaShieldAlt className="text-3xl" />,
    href: "/wasserschaden/praeventiv",
    image: "/images/services/water-damage/praeventiv.jpg"
  }
];

const benefits = [
  "24/7 Notdienst bei Wasserschäden",
  "Schnelle Reaktionszeit",
  "Modernste Trocknungstechnik",
  "Erfahrene Sanierungsexperten",
  "Schimmelprävention",
  "Versicherungsabwicklung",
  "Dokumentierte Trocknung",
  "Garantierte Qualität",
  "Komplettservice"
];

export default function WasserschadenPage() {
  return (
    <ServicePage
      title="Wasserschadensanierung & Trocknung"
      subtitle="Professionelle Wasserschadenbeseitigung mit 24/7 Notdienst. Schnelle Hilfe und nachhaltige Sanierung bei Wasserschäden aller Art."
      heroImage="/images/wasserschaden-hero.jpg"
      services={services}
      benefits={benefits}
    />
  );
} 