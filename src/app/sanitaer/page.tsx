'use client';

import ServicePage from '@/components/ServicePage';
import { 
  FaShower, 
  FaSink, 
  FaToilet, 
  FaWrench, 
  FaTint, 
  FaTools 
} from 'react-icons/fa';

const services = [
  {
    title: "Sanitär-Notdienst",
    description: "Schnelle Hilfe bei Wasserrohrbrüchen und anderen Sanitär-Notfällen.",
    icon: <FaWrench className="text-3xl" />,
    href: "/sanitaer/notdienst",
    image: "/images/services/sanitary/notdienst.jpg"
  },
  {
    title: "Bad-Installation",
    description: "Komplette Badsanierung und Installation von Sanitäranlagen.",
    icon: <FaShower className="text-3xl" />,
    href: "/sanitaer/bad-installation",
    image: "/images/services/sanitary/bad-installation.jpg"
  },
  {
    title: "Wasserinstallation",
    description: "Professionelle Installation und Reparatur von Wasserleitungen.",
    icon: <FaTint className="text-3xl" />,
    href: "/sanitaer/wasserinstallation",
    image: "/images/services/sanitary/wasserinstallation.jpg"
  },
  {
    title: "WC & Sanitär",
    description: "Reparatur und Montage von WCs, Waschbecken und Sanitäranlagen.",
    icon: <FaToilet className="text-3xl" />,
    href: "/sanitaer/wc-sanitaer",
    image: "/images/services/sanitary/wc-sanitaer.jpg"
  },
  {
    title: "Wartung",
    description: "Regelmäßige Wartung Ihrer Sanitäranlagen für lange Lebensdauer.",
    icon: <FaTools className="text-3xl" />,
    href: "/sanitaer/wartung",
    image: "/images/services/sanitary/wartung.jpg"
  },
  {
    title: "Modernisierung",
    description: "Energieeffiziente Modernisierung Ihrer Sanitärinstallationen.",
    icon: <FaSink className="text-3xl" />,
    href: "/sanitaer/modernisierung",
    image: "/images/services/sanitary/modernisierung.jpg"
  }
];

const benefits = [
  "24/7 Notdienst für Sanitär-Notfälle",
  "Festpreisgarantie ohne versteckte Kosten",
  "Schnelle Reaktionszeit",
  "Qualifizierte Sanitär-Fachkräfte",
  "Modernste Werkzeuge und Materialien",
  "Saubere und präzise Arbeitsweise",
  "Umfassende Beratung",
  "Garantie auf alle Arbeiten",
  "Langjährige Erfahrung"
];

export default function SanitaerPage() {
  return (
    <ServicePage
      title="Sanitär-Installation & Reparatur"
      subtitle="Ihr kompetenter Partner für alle Sanitärarbeiten. Von der Notfall-Reparatur bis zur kompletten Badsanierung."
      heroImage="/images/hero/sanitary-hero.jpg"
      services={services}
      benefits={benefits}
      serviceVideo="/images/services/sanitary/5998070_People_Person_3840x2160.mp4"
      serviceImages={[
        "/images/services/sanitary/plumbing-professional-doing-his-job (1).jpg"
      ]}
    />
  );
} 