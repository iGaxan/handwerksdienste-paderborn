'use client';

import ServicePage from '@/components/ServicePage';
import { 
  FaKey, 
  FaLock, 
  FaShieldAlt, 
  FaTools, 
  FaDoorOpen, 
  FaHome 
} from 'react-icons/fa';

const services = [
  {
    title: "Türöffnung ohne Schäden",
    description: "Professionelle Türöffnung bei Aussperrung - schnell und ohne Beschädigung Ihrer Tür.",
    icon: <FaDoorOpen className="text-3xl" />
  },
  {
    title: "Schloss-Austausch",
    description: "Austausch und Reparatur von Schließzylindern und Schlössern aller Art.",
    icon: <FaLock className="text-3xl" />
  },
  {
    title: "Einbruchschutz",
    description: "Sicherheitsberatung und Installation von einbruchhemmenden Systemen.",
    icon: <FaShieldAlt className="text-3xl" />
  },
  {
    title: "Schließanlagen",
    description: "Installation und Wartung von mechanischen und elektronischen Schließanlagen.",
    icon: <FaKey className="text-3xl" />
  },
  {
    title: "Notfall-Service",
    description: "24/7 Notdienst bei Aussperrung, defekten Schlössern oder nach Einbruch.",
    icon: <FaTools className="text-3xl" />
  },
  {
    title: "Smart Home Security",
    description: "Beratung und Installation von digitalen Zutrittssystemen und Smart Locks.",
    icon: <FaHome className="text-3xl" />
  }
];

const benefits = [
  "24/7 Notdienst - Tag und Nacht für Sie da",
  "Festpreisgarantie ohne versteckte Kosten",
  "Anfahrt innerhalb von 20-30 Minuten",
  "Schadenfreie Türöffnung",
  "Ausgebildete Fachkräfte mit jahrelanger Erfahrung",
  "Modernste Werkzeuge und Techniken",
  "Kostenlose Sicherheitsberatung",
  "TÜV-geprüfte Schlösser und Schließanlagen",
  "Rechnung mit Garantie"
];

export default function SchluessseldienstPage() {
  return (
    <ServicePage
      title="Schlüsseldienst & Türöffnung"
      subtitle="Ihr professioneller Schlüsseldienst für schnelle und schadenfreie Türöffnungen. 24/7 Notdienst mit Festpreisgarantie und 20-30 Minuten Reaktionszeit."
      heroImage="/images/hero/locksmith-hero.jpg"
      services={services}
      benefits={benefits}
      serviceVideo="/images/services/locksmith/998121_Keyhole_Lock_1920x1080.mp4"
    />
  );
} 