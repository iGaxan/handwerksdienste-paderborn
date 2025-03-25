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
    title: "Kanalreinigung",
    description: "Professionelle Reinigung von Abwasserkanälen und Rohrleitungen mit modernster Technik.",
    icon: <FaWrench className="text-3xl" />,
    href: "/kanalreinigung",
    image: "/images/kanalreinigung.jpg"
  },
  {
    title: "Kamera-Inspektion",
    description: "Genaue Untersuchung der Kanäle mit hochauflösender Kameratechnik zur Schadenserkennung.",
    icon: <FaVideo className="text-3xl" />,
    href: "/kanalreinigung/kamera-inspektion",
    image: "/images/kamera-inspektion.jpg"
  },
  {
    title: "Hochdruck-Spülung",
    description: "Effektive Reinigung mit Hochdruckspülung für hartnäckige Verstopfungen und Ablagerungen.",
    icon: <FaWater className="text-3xl" />,
    href: "/kanalreinigung/hochdruck-spuelung",
    image: "/images/hochdruck-spuelung.jpg"
  },
  {
    title: "Wartung & Pflege",
    description: "Regelmäßige Wartung Ihrer Kanalsysteme zur Vorbeugung von Verstopfungen und Schäden.",
    icon: <FaTools className="text-3xl" />,
    href: "/kanalreinigung/wartung",
    image: "/images/wartung.jpg"
  },
  {
    title: "Leckageortung",
    description: "Präzise Ortung von Leckagen und Rohrbrüchen mit modernster Technik.",
    icon: <FaSearchLocation className="text-3xl" />,
    href: "/kanalreinigung/leckageortung",
    image: "/images/leckageortung.jpg"
  },
  {
    title: "Umweltfreundlich",
    description: "Einsatz umweltschonender Reinigungsmethoden und -mittel.",
    icon: <FaRecycle className="text-3xl" />,
    href: "/kanalreinigung/umweltfreundlich",
    image: "/images/umweltfreundlich.jpg"
  }
];

const benefits = [
  "Erfahrene Fachkräfte",
  "Umweltschonende Methoden",
  "Schnelle Reaktionszeiten",
  "Dokumentierte Inspektionen",
  "24/7 Notdienst verfügbar",
  "Festpreisgarantie",
  "Modernste Reinigungstechnik",
  "Langfristige Lösungen",
  "Garantie auf alle Arbeiten"
];

export default function KanalreinigungPage() {
  return (
    <ServicePage
      title="Professionelle Kanalreinigung & Inspektion"
      subtitle="Ihr Experte für schnelle und zuverlässige Kanalreinigung. 24/7 Notdienst mit modernster Technik und Festpreisgarantie."
      heroImage="/images/kanalreinigung-hero.jpg"
      services={services}
      benefits={benefits}
    />
  );
} 