'use client';

import ServicePage from '@/components/ServicePage';
import { 
  FaTruck, 
  FaHome, 
  FaRecycle, 
  FaBoxOpen, 
  FaClipboardList, 
  FaLeaf 
} from 'react-icons/fa';

const services = [
  {
    title: "Haushaltsauflösung",
    description: "Professionelle und diskrete Auflösung von kompletten Haushalten.",
    icon: <FaHome className="text-3xl" />
  },
  {
    title: "Entrümpelung",
    description: "Schnelle und zuverlässige Entrümpelung von Wohnungen, Häusern und Geschäftsräumen.",
    icon: <FaTruck className="text-3xl" />
  },
  {
    title: "Entsorgung",
    description: "Fachgerechte und umweltfreundliche Entsorgung aller Materialien.",
    icon: <FaRecycle className="text-3xl" />
  },
  {
    title: "Wertanrechnung",
    description: "Faire Anrechnung verwertbarer Gegenstände auf den Entrümpelungspreis.",
    icon: <FaBoxOpen className="text-3xl" />
  },
  {
    title: "Bestandsaufnahme",
    description: "Kostenlose Besichtigung und detaillierte Bestandsaufnahme.",
    icon: <FaClipboardList className="text-3xl" />
  },
  {
    title: "Nachhaltigkeit",
    description: "Nachhaltige Verwertung und Recycling wo immer möglich.",
    icon: <FaLeaf className="text-3xl" />
  }
];

const benefits = [
  "Kostenlose Besichtigung vor Ort",
  "Festpreisgarantie ohne versteckte Kosten",
  "Schnelle Terminvergabe",
  "Komplettservice aus einer Hand",
  "Besenreine Übergabe",
  "Umweltgerechte Entsorgung",
  "Wertanrechnung möglich",
  "Diskrete Abwicklung",
  "Professionelles Team"
];

export default function EntruempelungPage() {
  return (
    <ServicePage
      title="Professionelle Entrümpelung & Haushaltsauflösung"
      subtitle="Schnelle und zuverlässige Entrümpelung mit Festpreisgarantie. Diskret, fair und umweltbewusst."
      heroImage="/images/entruempelung-hero.jpg"
      services={services}
      benefits={benefits}
    />
  );
} 