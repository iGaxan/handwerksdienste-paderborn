'use client';

import ServicePage from '@/components/ServicePage';
import { 
  FaWater, 
  FaCamera, 
  FaPump, 
  FaSearchLocation, 
  FaTools, 
  FaRecycle 
} from 'react-icons/fa';

const services = [
  {
    title: "Kanalreinigung",
    description: "Professionelle Reinigung von Abwasserkanälen und Rohrleitungen.",
    icon: <FaWater className="text-3xl" />
  },
  {
    title: "Kanalinspektion",
    description: "HD-Kamerabefahrung zur Zustandserfassung und Schadenserkennung.",
    icon: <FaCamera className="text-3xl" />
  },
  {
    title: "Hochdruckspülung",
    description: "Effektive Reinigung mit modernster Hochdrucktechnik.",
    icon: <FaPump className="text-3xl" />
  },
  {
    title: "Ortung & Analyse",
    description: "Präzise Ortung von Schäden und Verstopfungen.",
    icon: <FaSearchLocation className="text-3xl" />
  },
  {
    title: "Wartung",
    description: "Regelmäßige Wartung und Pflege von Kanalsystemen.",
    icon: <FaTools className="text-3xl" />
  },
  {
    title: "Umweltschutz",
    description: "Umweltschonende Reinigung und Entsorgung.",
    icon: <FaRecycle className="text-3xl" />
  }
];

const benefits = [
  "24/7 Notdienst bei Verstopfungen",
  "Festpreisgarantie ohne versteckte Kosten",
  "Modernste Reinigungstechnik",
  "HD-Kamerainspektion",
  "Erfahrene Fachkräfte",
  "Umweltschonende Methoden",
  "Schnelle Reaktionszeiten",
  "Dokument 