'use client';

import ServicePage from '@/components/ServicePage';
import { 
  FaBug, 
  FaSpider, 
  FaMouse, 
  FaShieldAlt, 
  FaSearchPlus, 
  FaLeaf 
} from 'react-icons/fa';

const services = [
  {
    title: "Schädlingsbekämpfung",
    description: "Professionelle Bekämpfung aller Arten von Schädlingen.",
    icon: <FaBug className="text-3xl" />
  },
  {
    title: "Insektenbekämpfung",
    description: "Effektive Beseitigung von Insekten und Vorbeugung gegen Neubefall.",
    icon: <FaSpider className="text-3xl" />
  },
  {
    title: "Nagetierbekämpfung",
    description: "Fachgerechte Bekämpfung von Mäusen, Ratten und anderen Nagern.",
    icon: <FaMouse className="text-3xl" />
  },
  {
    title: "Präventionskonzepte",
    description: "Individuelle Konzepte zur Vorbeugung von Schädlingsbefall.",
    icon: <FaShieldAlt className="text-3xl" />
  },
  {
    title: "Befallsanalyse",
    description: "Gründliche Analyse des Befalls und Entwicklung gezielter Lösungen.",
    icon: <FaSearchPlus className="text-3xl" />
  },
  {
    title: "Umweltfreundlich",
    description: "Einsatz umweltschonender und nachhaltiger Bekämpfungsmethoden.",
    icon: <FaLeaf className="text-3xl" />
  }
];

const benefits = [
  "24/7 Notdienst bei akutem Befall",
  "Festpreisgarantie ohne versteckte Kosten",
  "Schnelle Reaktionszeit",
  "Zertifizierte Schädlingsbekämpfer",
  "Diskrete Durchführung",
  "Umweltschonende Methoden",
  "Nachhaltige Lösungen",
  "Präventionsberatung",
  "Garantie auf Behandlungen"
];

export default function SchaedlingsbekaempfungPage() {
  return (
    <ServicePage
      title="Professionelle Schädlingsbekämpfung & Prävention"
      subtitle="Schnelle und diskrete Schädlingsbekämpfung mit nachhaltigen Methoden. Zertifizierte Experten für alle Arten von Schädlingen."
      heroImage="/images/hero/pest-control-hero.jpg"
      services={services}
      benefits={benefits}
      serviceVideo="/images/services/pest-control/1115209_Virus_Cleaning_3840x2160.mp4"
    />
  );
} 