'use client';

import ServicePage from '@/components/ServicePage';
import { 
  FaBolt, 
  FaLightbulb, 
  FaPlug, 
  FaTools, 
  FaShieldAlt, 
  FaSolarPanel 
} from 'react-icons/fa';

const services = [
  {
    title: "Elektro-Notdienst",
    description: "Schnelle Hilfe bei elektrischen Notfällen - 24/7 verfügbar.",
    icon: <FaBolt className="text-3xl" />
  },
  {
    title: "Elektroinstallation",
    description: "Fachgerechte Installation von Elektroleitungen und Anlagen.",
    icon: <FaPlug className="text-3xl" />
  },
  {
    title: "Beleuchtungstechnik",
    description: "Installation und Wartung von Beleuchtungssystemen.",
    icon: <FaLightbulb className="text-3xl" />
  },
  {
    title: "Reparaturen",
    description: "Schnelle und zuverlässige Reparatur elektrischer Anlagen.",
    icon: <FaTools className="text-3xl" />
  },
  {
    title: "Sicherheitstechnik",
    description: "Installation von Sicherheitssystemen und Schutzeinrichtungen.",
    icon: <FaShieldAlt className="text-3xl" />
  },
  {
    title: "Smart Home",
    description: "Integration moderner Smart Home Lösungen.",
    icon: <FaSolarPanel className="text-3xl" />
  }
];

const benefits = [
  "24/7 Notdienst bei elektrischen Problemen",
  "Festpreisgarantie ohne versteckte Kosten",
  "Schnelle Reaktionszeit",
  "Geprüfte Elektrofachkräfte",
  "Modernste Messtechnik",
  "VDE-konforme Ausführung",
  "Umfassende Beratung",
  "Garantie auf alle Arbeiten",
  "E-CHECK zertifiziert"
];

export default function ElektroPage() {
  return (
    <ServicePage
      title="Elektroinstallation & Reparatur"
      subtitle="Ihr Elektrofachbetrieb für alle elektrischen Installationen und Reparaturen. 24/7 Notdienst und höchste Sicherheitsstandards."
      heroImage="/images/elektro-hero.jpg"
      services={services}
      benefits={benefits}
    />
  );
} 