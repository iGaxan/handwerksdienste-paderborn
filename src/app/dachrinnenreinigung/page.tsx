'use client';

import ServicePage from '@/components/ServicePage';
import { 
  FaHome, 
  FaLeaf, 
  FaWater, 
  FaTools, 
  FaSearchPlus, 
  FaShieldAlt 
} from 'react-icons/fa';

const services = [
  {
    title: "Dachrinnenreinigung",
    description: "Gründliche Reinigung von Dachrinnen und Fallrohren.",
    icon: <FaHome className="text-3xl" />
  },
  {
    title: "Laubschutz",
    description: "Installation von Laubschutzgittern zur Vorbeugung.",
    icon: <FaLeaf className="text-3xl" />
  },
  {
    title: "Ablaufprüfung",
    description: "Kontrolle und Sicherstellung der Wasserableitung.",
    icon: <FaWater className="text-3xl" />
  },
  {
    title: "Reparatur",
    description: "Reparatur und Austausch beschädigter Dachrinnen.",
    icon: <FaTools className="text-3xl" />
  },
  {
    title: "Inspektion",
    description: "Detaillierte Inspektion des Dachrinnen-Systems.",
    icon: <FaSearchPlus className="text-3xl" />
  },
  {
    title: "Vorbeugung",
    description: "Präventive Maßnahmen gegen Verstopfungen.",
    icon: <FaShieldAlt className="text-3xl" />
  }
];

const benefits = [
  "Professionelle Reinigung",
  "Festpreisgarantie",
  "Erfahrene Fachkräfte",
  "Modernste Ausrüstung",
  "Sicherheit durch Fachkompetenz",
  "Nachhaltige Lösungen",
  "Umfassender Service",
  "Garantierte Sauberkeit",
  "Präventive Maßnahmen"
];

export default function DachrinnenreinigungPage() {
  return (
    <ServicePage
      title="Dachrinnenreinigung & Wartung"
      subtitle="Professionelle Reinigung und Wartung Ihrer Dachrinnen. Vorbeugender Schutz gegen Verstopfungen und Wasserschäden."
      heroImage="/images/dachrinnen-hero.jpg"
      services={services}
      benefits={benefits}
    />
  );
} 