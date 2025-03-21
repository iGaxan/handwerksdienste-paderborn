'use client';

import ServicePage from '@/components/ServicePage';
import EmergencyBanner from '@/components/EmergencyBanner';
import { 
  FaKey, 
  FaLock, 
  FaShieldAlt, 
  FaTools, 
  FaDoorOpen, 
  FaHome,
  FaCopy
} from 'react-icons/fa';

const services = [
  {
    title: "Türöffnung ohne Schäden",
    description: "Professionelle Türöffnung bei Aussperrung - schnell und ohne Beschädigung Ihrer Tür.",
    icon: <FaDoorOpen className="text-3xl" />,
    href: "/schluesseldienst/tueroeffnung",
    image: "/images/services/locksmith/door-opening.jpg"
  },
  {
    title: "Schloss-Austausch",
    description: "Austausch und Reparatur von Schließzylindern und Schlössern aller Art.",
    icon: <FaLock className="text-3xl" />,
    href: "/schluesseldienst/schloss-austausch",
    image: "/images/services/locksmith/lock-replacement.jpg"
  },
  {
    title: "Einbruchschutz",
    description: "Sicherheitsberatung und Installation von einbruchhemmenden Systemen.",
    icon: <FaShieldAlt className="text-3xl" />,
    href: "/schluesseldienst/einbruchschutz",
    image: "/images/services/locksmith/security.jpg"
  },
  {
    title: "Schließanlagen",
    description: "Installation und Wartung von mechanischen und elektronischen Schließanlagen.",
    icon: <FaKey className="text-3xl" />,
    href: "/schluesseldienst/schliessanlagen",
    image: "/images/services/locksmith/key-systems.jpg"
  },
  {
    title: "Notfall-Service",
    description: "24/7 Notdienst bei Aussperrung, defekten Schlössern oder nach Einbruch.",
    icon: <FaTools className="text-3xl" />,
    href: "/schluesseldienst/notfall",
    image: "/images/services/locksmith/emergency.jpg"
  },
  {
    title: "Smart Home Security",
    description: "Beratung und Installation von digitalen Zutrittssystemen und Smart Locks.",
    icon: <FaHome className="text-3xl" />,
    href: "/schluesseldienst/smart-home",
    image: "/images/services/locksmith/smart-home.jpg"
  },
  {
    title: "Tresoröffnung & Auto",
    description: "Professionelle Öffnung von Tresoren und Fahrzeugen - schnell und ohne Beschädigung.",
    icon: <FaLock className="text-3xl" />,
    href: "/schluesseldienst/tresor-auto",
    image: "/images/services/locksmith/safe-car.jpg"
  },
  {
    title: "Schlüsselanfertigung",
    description: "Anfertigung von Schlüsseln aller Art - präzise und zuverlässig.",
    icon: <FaCopy className="text-3xl" />,
    href: "/schluesseldienst/schluessel-anfertigung",
    image: "/images/services/locksmith/key-copying.jpg"
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

export default function SchluesseldienstClient() {
  return (
    <>
      <EmergencyBanner />
      <ServicePage
        title="Schlüsseldienst & Türöffnung"
        subtitle="Ihr professioneller Schlüsseldienst für schnelle und schadenfreie Türöffnungen. 24/7 Notdienst mit Festpreisgarantie und 20-30 Minuten Reaktionszeit."
        heroImage="/images/hero/locksmith-hero.jpg"
        services={services}
        benefits={benefits}
        serviceVideo="/images/services/locksmith/998121_Keyhole_Lock_1920x1080.mp4"
      />
    </>
  );
} 