'use client';

import ServicePage from '@/components/ServicePage';
import EmergencyBanner from '@/components/EmergencyBanner';
import { FaShower, FaToilet, FaSink, FaWater, FaTools, FaVideo, FaCheck, FaClock, FaWrench, FaHardHat, FaShieldAlt, FaIndustry } from 'react-icons/fa';
import { MdPlumbing } from 'react-icons/md';
import { GiPipes } from 'react-icons/gi';

const services = [
  {
    title: "Notfall-Rohrreinigung",
    description: "24/7 Soforthilfe bei verstopften Rohren und Abflüssen. Schnelle Reaktionszeit und professionelle Entstopfung.",
    icon: <FaWrench className="text-4xl text-blue-600" />,
    benefits: ["24/7 Notdienst", "Schnelle Reaktionszeit", "Festpreisgarantie"],
    href: "/rohrreinigung#notfall",
    image: "/images/services/plumbing/emergency.jpg"
  },
  {
    title: "Kanalreinigung",
    description: "Professionelle Reinigung von Hausanschlüssen und Kanälen. Beseitigung von Verstopfungen und Ablagerungen im Kanalsystem.",
    icon: <FaIndustry className="text-4xl text-blue-600" />,
    benefits: ["Hochdruckreinigung", "Wurzelentfernung", "Kanalsanierung"],
    href: "/rohrreinigung#kanal",
    image: "/images/services/plumbing/sewer.jpg"
  },
  {
    title: "Abflussreinigung",
    description: "Professionelle Reinigung von Waschbecken, Duschen, Badewannen und Toiletten. Nachhaltige Beseitigung von Verstopfungen.",
    icon: <FaShower className="text-4xl text-blue-600" />,
    benefits: ["Modernste Technik", "Gründliche Reinigung", "Verstopfungsprävention"],
    href: "/rohrreinigung#abfluss",
    image: "/images/services/plumbing/drain.jpg"
  },
  {
    title: "Rohrbruch-Reparatur",
    description: "Schnelle und zuverlässige Reparatur von Rohrbrüchen. Modernste Ortungstechnik und professionelle Schadensbehebung.",
    icon: <FaHardHat className="text-4xl text-blue-600" />,
    benefits: ["Notfall-Service", "Präzise Ortung", "Garantierte Reparatur"],
    href: "/rohrreinigung#rohrbruch",
    image: "/images/services/plumbing/pipe-break.jpg"
  },
  {
    title: "Rohrverlegung",
    description: "Fachgerechte Installation und Verlegung neuer Rohrleitungen. Von der Planung bis zur fertigen Montage aus einer Hand.",
    icon: <GiPipes className="text-4xl text-blue-600" />,
    benefits: ["Qualitätsmaterialien", "Fachgerechte Montage", "Langlebige Lösungen"],
    href: "/rohrreinigung#verlegung",
    image: "/images/services/plumbing/pipe-laying.jpg"
  },
  {
    title: "Hochdruck-Reinigung",
    description: "Effektive Hochdruckreinigung für hartnäckige Verstopfungen. Beseitigt auch festsitzende Ablagerungen zuverlässig.",
    icon: <FaWater className="text-4xl text-blue-600" />,
    benefits: ["Hochdrucktechnik", "Für alle Rohrgrößen", "Nachhaltige Lösung"],
    href: "/rohrreinigung#hochdruck",
    image: "/images/services/plumbing/pressure.jpg"
  },
  {
    title: "Kanal- und Rohrinspektionen",
    description: "Moderne Kamerainspektion zur genauen Problemanalyse. Ermöglicht gezielte und effiziente Reparaturen.",
    icon: <FaVideo className="text-4xl text-blue-600" />,
    benefits: ["HD-Kameratechnik", "Detaillierte Analyse", "Dokumentation"],
    href: "/rohrreinigung#inspektion",
    image: "/images/services/plumbing/inspection.jpg"
  },
  {
    title: "Verstopfungsortung",
    description: "Präzise Ortung von Verstopfungen und Rohrschäden. Minimiert Aufwand und Kosten für die Reparatur.",
    icon: <FaTools className="text-4xl text-blue-600" />,
    benefits: ["Exakte Ortung", "Zeitsparend", "Kostengünstig"],
    href: "/rohrreinigung#ortung",
    image: "/images/services/plumbing/location.jpg"
  },
  {
    title: "Wartung & Prävention",
    description: "Regelmäßige Wartung und vorbeugende Maßnahmen. Verhindert zukünftige Verstopfungen und Rohrschäden.",
    icon: <MdPlumbing className="text-4xl text-blue-600" />,
    benefits: ["Vorsorgende Pflege", "Regelmäßige Checks", "Langfristiger Schutz"],
    href: "/rohrreinigung#wartung",
    image: "/images/services/plumbing/maintenance.jpg"
  }
];

const benefits = [
  "24/7 Notdienst - Rund um die Uhr für Sie da",
  "Festpreisgarantie ohne versteckte Kosten",
  "Schnelle Reaktionszeit von 20-30 Minuten",
  "Modernste Reinigungstechnik für alle Fälle",
  "5 Jahre Garantie auf fertige Arbeiten"
];

export default function RohrreinigungClient() {
  return (
    <>
      <EmergencyBanner />
      <ServicePage
        title="Rohrreinigung & Verstopfungen"
        subtitle="Ihr professioneller Rohrreinigungs-Service für schnelle und zuverlässige Hilfe bei Verstopfungen. 24/7 Notdienst mit Festpreisgarantie und 20-30 Minuten Reaktionszeit."
        heroImage="/images/hero/plumber-hero.jpg"
        services={services}
        benefits={benefits}
        serviceVideo="/images/services/plumbing/plumbing-service.mp4"
      />
    </>
  );
} 