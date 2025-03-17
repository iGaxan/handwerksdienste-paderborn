'use client';

import ServicePage from '@/components/ServicePage';
import { 
  FaWrench, 
  FaVideo, 
  FaWater, 
  FaTools, 
  FaSearchLocation, 
  FaRecycle 
} from 'react-icons/fa';

const services = [
  {
    title: "Notfall-Rohrreinigung",
    description: "Schnelle Hilfe bei verstopften Rohren - 24/7 Notdienst für akute Probleme.",
    icon: <FaWrench className="text-3xl" />
  },
  {
    title: "Kamera-Inspektion",
    description: "Modernste Kameratechnik zur genauen Lokalisation von Verstopfungen und Schäden.",
    icon: <FaVideo className="text-3xl" />
  },
  {
    title: "Hochdruck-Reinigung",
    description: "Professionelle Reinigung mit Hochdruckspülung für hartnäckige Verstopfungen.",
    icon: <FaWater className="text-3xl" />
  },
  {
    title: "Wartung & Pflege",
    description: "Regelmäßige Wartung Ihrer Rohrleitungen zur Vorbeugung von Verstopfungen.",
    icon: <FaTools className="text-3xl" />
  },
  {
    title: "Leckageortung",
    description: "Präzise Ortung von Leckagen und Rohrbrüchen mit modernster Technik.",
    icon: <FaSearchLocation className="text-3xl" />
  },
  {
    title: "Umweltfreundlich",
    description: "Einsatz umweltschonender Reinigungsmethoden und -mittel.",
    icon: <FaRecycle className="text-3xl" />
  }
];

const benefits = [
  "24/7 Notdienst bei akuten Verstopfungen",
  "Festpreisgarantie ohne versteckte Kosten",
  "Anfahrt innerhalb von 20-30 Minuten",
  "Modernste Reinigungstechnik",
  "Ausgebildete Fachkräfte",
  "Umweltschonende Methoden",
  "Kamera-Inspektion inklusive",
  "Langfristige Lösungen",
  "Garantie auf alle Arbeiten"
];

export default function RohrreinigungPage() {
  return (
    <ServicePage
      title="Rohrreinigung & Verstopfungen"
      subtitle="Professionelle Rohrreinigung und Verstopfungsbeseitigung"
      heroImage="/images/rohrreinigung-hero.jpg"
      services={services}
      benefits={benefits}
    />
  );
}
