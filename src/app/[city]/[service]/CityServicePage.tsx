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
  FaCopy,
  FaShower,
  FaToilet,
  FaSink,
  FaWater,
  FaVideo,
  FaIndustry,
  FaHardHat,
  FaWrench,
  FaBath,
  FaTint,
  FaCog,
  FaCheck,
  FaBug,
  FaSpider,
  FaLeaf,
  FaSprayCan,
  FaBuilding,
  FaBolt,
  FaPlug,
  FaLightbulb,
  FaSolarPanel,
  FaNetworkWired,
  FaTrash,
  FaRecycle,
  FaTruck,
  FaWarehouse,
  FaBoxOpen,
  FaCouch
} from 'react-icons/fa';
import { GiPipes, GiRat, GiBirdCage } from 'react-icons/gi';
import { BiBug } from 'react-icons/bi';

interface Props {
  city: string;
  service: string;
}

export default function CityServicePage({ city, service }: Props) {
  // Decode the city name from URL encoding
  const decodedCity = decodeURIComponent(city);
  
  const getServiceConfig = () => {
    // Normalize service name for comparison
    const normalizedService = service.toLowerCase()
      .replace(/ä/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/ß/g, 'ss');

    if (normalizedService === 'schluesseldienst') {
      return {
        services: [
          {
            title: "Türöffnung ohne Schäden",
            description: `Professionelle Türöffnung bei Aussperrung in ${decodedCity} - schnell und ohne Beschädigung Ihrer Tür. Modernste Technik für schadenfreie Öffnungen.`,
            icon: <FaDoorOpen className="text-4xl text-white" />,
            benefits: ["Schadenfreie Öffnung", "24/7 Notdienst", "Festpreisgarantie"],
            href: `/${decodedCity}/schluesseldienst#tueroeffnung`,
            image: "/images/services/locksmith/door-opening.jpg"
          },
          {
            title: "Schloss-Austausch",
            description: `Austausch und Reparatur von Schließzylindern und Schlössern aller Art in ${decodedCity}. Professionelle Installation mit Garantie.`,
            icon: <FaLock className="text-4xl text-white" />,
            benefits: ["Qualitätsprodukte", "Fachgerechte Montage", "Garantierte Arbeit"],
            href: `/${decodedCity}/schluesseldienst#schloss`,
            image: "/images/services/locksmith/lock-replacement.jpg"
          },
          {
            title: "Einbruchschutz",
            description: `Sicherheitsberatung und Installation von einbruchhemmenden Systemen in ${decodedCity}. Modernste Sicherheitstechnik für Ihr Zuhause.`,
            icon: <FaShieldAlt className="text-4xl text-white" />,
            benefits: ["Sicherheitsberatung", "Professionelle Montage", "Nachhaltiger Schutz"],
            href: `/${decodedCity}/schluesseldienst#einbruchschutz`,
            image: "/images/services/locksmith/security.jpg"
          },
          {
            title: "Schließanlagen",
            description: `Installation und Wartung von mechanischen und elektronischen Schließanlagen in ${decodedCity}. Individuelle Lösungen für Ihre Anforderungen.`,
            icon: <FaKey className="text-4xl text-white" />,
            benefits: ["Maßgeschneiderte Lösungen", "Regelmäßige Wartung", "Technischer Support"],
            href: `/${decodedCity}/schluesseldienst#schliessanlagen`,
            image: "/images/services/locksmith/key-systems.jpg"
          },
          {
            title: "Notfall-Service",
            description: `24/7 Notdienst bei Aussperrung, defekten Schlössern oder nach Einbruch in ${decodedCity}. Schnelle Hilfe in jeder Situation.`,
            icon: <FaTools className="text-4xl text-white" />,
            benefits: ["24/7 Verfügbar", "Schnelle Reaktionszeit", "Notfall-Hilfe"],
            href: `/${decodedCity}/schluesseldienst#notfall`,
            image: "/images/services/locksmith/emergency.jpg"
          }
        ],
        benefits: [
          "24/7 Notdienst - Tag und Nacht für Sie da",
          "Festpreisgarantie ohne versteckte Kosten",
          "Anfahrt innerhalb von 20-30 Minuten",
          "Schadenfreie Türöffnung",
          "Ausgebildete Fachkräfte mit jahrelanger Erfahrung",
          "Modernste Werkzeuge und Techniken",
          "Kostenlose Sicherheitsberatung",
          "TÜV-geprüfte Schlösser und Schließanlagen",
          "Rechnung mit Garantie"
        ],
        heroImage: "/images/hero/locksmith-hero.jpg",
        serviceVideo: "/images/services/locksmith/998121_Keyhole_Lock_1920x1080.mp4"
      };
    } else if (normalizedService === 'rohrreinigung') {
      return {
        services: [
          {
            title: "Notfall-Rohrreinigung",
            description: `24/7 Soforthilfe bei verstopften Rohren und Abflüssen in ${decodedCity}. Schnelle Reaktionszeit und professionelle Entstopfung.`,
            icon: <FaTools className="text-4xl text-white" />,
            benefits: ["24/7 Notdienst", "Schnelle Reaktionszeit", "Festpreisgarantie"],
            href: `/${decodedCity}/rohrreinigung#notfall`,
            image: "/images/services/plumbing/emergency.jpg"
          },
          {
            title: "Kanalreinigung",
            description: `Professionelle Reinigung von Hausanschlüssen und Kanälen in ${decodedCity}. Beseitigung von Verstopfungen und Ablagerungen im Kanalsystem.`,
            icon: <FaIndustry className="text-4xl text-white" />,
            benefits: ["Hochdruckreinigung", "Wurzelentfernung", "Kanalsanierung"],
            href: `/${decodedCity}/rohrreinigung#kanal`,
            image: "/images/services/plumbing/sewer.jpg"
          },
          {
            title: "Abflussreinigung",
            description: `Professionelle Reinigung von Waschbecken, Duschen, Badewannen und Toiletten in ${decodedCity}. Nachhaltige Beseitigung von Verstopfungen.`,
            icon: <FaShower className="text-4xl text-white" />,
            benefits: ["Modernste Technik", "Gründliche Reinigung", "Verstopfungsprävention"],
            href: `/${decodedCity}/rohrreinigung#abfluss`,
            image: "/images/services/plumbing/drain.jpg"
          },
          {
            title: "Rohrbruch-Reparatur",
            description: `Schnelle und zuverlässige Reparatur von Rohrbrüchen in ${decodedCity}. Modernste Ortungstechnik und professionelle Schadensbehebung.`,
            icon: <FaHardHat className="text-4xl text-white" />,
            benefits: ["Notfall-Service", "Präzise Ortung", "Garantierte Reparatur"],
            href: `/${decodedCity}/rohrreinigung#rohrbruch`,
            image: "/images/services/plumbing/pipe-break.jpg"
          },
          {
            title: "Rohrverlegung",
            description: `Fachgerechte Installation und Verlegung neuer Rohrleitungen in ${decodedCity}. Von der Planung bis zur fertigen Montage aus einer Hand.`,
            icon: <GiPipes className="text-4xl text-white" />,
            benefits: ["Qualitätsmaterialien", "Fachgerechte Montage", "Langlebige Lösungen"],
            href: `/${decodedCity}/rohrreinigung#verlegung`,
            image: "/images/services/plumbing/pipe-laying.jpg"
          }
        ],
        benefits: [
          "24/7 Notdienst für verstopfte Rohre",
          "Festpreisgarantie ohne versteckte Kosten",
          "Anfahrt innerhalb von 20-30 Minuten",
          "Modernste Reinigungstechnik",
          "Ausgebildete Fachkräfte mit jahrelanger Erfahrung",
          "Kamera-Inspektion möglich",
          "Hochdruckreinigung",
          "Nachhaltige Lösungen",
          "Rechnung mit Garantie"
        ],
        heroImage: "/images/hero/plumbing-hero.jpg",
        serviceVideo: "/images/services/plumbing/plumbing-service.mp4"
      };
    } else if (normalizedService === 'sanitaer' || normalizedService === 'sanitär') {
      return {
        services: [
          {
            title: "Notfall-Sanitär",
            description: `24/7 Soforthilfe bei Wasserschäden und defekten Sanitäranlagen in ${decodedCity}. Schnelle Reaktionszeit und professionelle Reparatur.`,
            icon: <FaTools className="text-4xl text-white" />,
            benefits: ["24/7 Notdienst", "Schnelle Reaktionszeit", "Festpreisgarantie"],
            href: `/${decodedCity}/sanitaer#notfall`,
            image: "/images/services/sanitary/emergency.jpg"
          },
          {
            title: "Bad-Installation",
            description: `Professionelle Installation und Renovierung von Bädern in ${decodedCity}. Von der Planung bis zur fertigen Montage aus einer Hand.`,
            icon: <FaBath className="text-4xl text-white" />,
            benefits: ["Maßgeschneiderte Lösungen", "Qualitätsprodukte", "Fachgerechte Montage"],
            href: `/${decodedCity}/sanitaer#bad`,
            image: "/images/services/sanitary/bathroom.jpg"
          },
          {
            title: "WC-Installation",
            description: `Installation und Reparatur von Toiletten und WC-Anlagen in ${decodedCity}. Modernste Technik und hygienische Standards.`,
            icon: <FaToilet className="text-4xl text-white" />,
            benefits: ["Hygienische Standards", "Modernste Technik", "Garantierte Arbeit"],
            href: `/${decodedCity}/sanitaer#wc`,
            image: "/images/services/sanitary/toilet.jpg"
          },
          {
            title: "Wasserinstallation",
            description: `Professionelle Installation und Reparatur von Wasserleitungen in ${decodedCity}. Zuverlässige Lösungen für Ihr Zuhause.`,
            icon: <FaTint className="text-4xl text-white" />,
            benefits: ["Wasserdichte Installation", "Energieeffizient", "Langlebige Lösungen"],
            href: `/${decodedCity}/sanitaer#wasser`,
            image: "/images/services/sanitary/water.jpg"
          },
          {
            title: "Heizungsanlagen",
            description: `Installation und Wartung von Heizungsanlagen in ${decodedCity}. Effiziente und umweltfreundliche Lösungen.`,
            icon: <FaCog className="text-4xl text-white" />,
            benefits: ["Energieeffizient", "Umweltfreundlich", "Regelmäßige Wartung"],
            href: `/${decodedCity}/sanitaer#heizung`,
            image: "/images/services/sanitary/heating.jpg"
          }
        ],
        benefits: [
          "24/7 Notdienst für Wasserschäden",
          "Festpreisgarantie ohne versteckte Kosten",
          "Anfahrt innerhalb von 20-30 Minuten",
          "Modernste Installationstechnik",
          "Ausgebildete Fachkräfte mit jahrelanger Erfahrung",
          "Energieeffiziente Lösungen",
          "Hygienische Standards",
          "Nachhaltige Lösungen",
          "Rechnung mit Garantie"
        ],
        heroImage: "/images/hero/sanitary-hero.jpg",
        serviceVideo: "/images/services/sanitary/sanitary-service.mp4"
      };
    } else if (normalizedService === 'schaedlingsbekaempfung' || normalizedService === 'schädlingsbekämpfung') {
      return {
        services: [
          {
            title: "Notfall-Schädlingsbekämpfung",
            description: `24/7 Soforthilfe bei akutem Schädlingsbefall in ${decodedCity}. Schnelle und diskrete Schädlingsbekämpfung für Privathaushalte und Unternehmen.`,
            icon: <FaBug className="text-4xl text-white" />,
            benefits: ["24/7 Notdienst", "Schnelle Reaktionszeit", "Diskrete Behandlung"],
            href: `/${decodedCity}/schaedlingsbekaempfung#notfall`,
            image: "/images/services/pest-control/emergency.jpg"
          },
          {
            title: "Insektenbekämpfung",
            description: `Professionelle Bekämpfung von Insekten wie Kakerlaken, Bettwanzen und Ameisen in ${decodedCity}. Nachhaltige und sichere Methoden.`,
            icon: <FaSpider className="text-4xl text-white" />,
            benefits: ["Effektive Bekämpfung", "Präventionskonzepte", "Gesundheitsverträglich"],
            href: `/${decodedCity}/schaedlingsbekaempfung#insekten`,
            image: "/images/services/pest-control/insects.jpg"
          },
          {
            title: "Nagetierbekämpfung",
            description: `Fachgerechte Bekämpfung von Ratten, Mäusen und anderen Nagetieren in ${decodedCity}. Professionelle und humane Schädlingsbekämpfung.`,
            icon: <GiRat className="text-4xl text-white" />,
            benefits: ["Humane Methoden", "Langfristiger Schutz", "Präventivmaßnahmen"],
            href: `/${decodedCity}/schaedlingsbekaempfung#nagetiere`,
            image: "/images/services/pest-control/rodents.jpg"
          },
          {
            title: "Taubenabwehr",
            description: `Installation von Taubenabwehrsystemen und Reinigung von Taubenkot in ${decodedCity}. Dauerhafte Lösungen für Gebäudeschutz.`,
            icon: <GiBirdCage className="text-4xl text-white" />,
            benefits: ["Nachhaltige Abwehr", "Gebäudeschutz", "Professionelle Reinigung"],
            href: `/${decodedCity}/schaedlingsbekaempfung#tauben`,
            image: "/images/services/pest-control/pigeons.jpg"
          },
          {
            title: "Wespen- & Hornissenentfernung",
            description: `Sichere und fachgerechte Entfernung von Wespen- und Hornissennestern in ${decodedCity}. Schnelle Hilfe bei akuter Gefährdung.`,
            icon: <BiBug className="text-4xl text-white" />,
            benefits: ["Artgerechte Umsiedlung", "Schnelle Hilfe", "Präventionsberatung"],
            href: `/${decodedCity}/schaedlingsbekaempfung#wespen`,
            image: "/images/services/pest-control/wasps.jpg"
          }
        ],
        benefits: [
          "24/7 Notdienst bei akutem Schädlingsbefall",
          "Festpreisgarantie ohne versteckte Kosten",
          "Schnelle Reaktionszeit binnen 30-60 Minuten",
          "Diskrete und professionelle Behandlung",
          "Ausgebildete Schädlingsbekämpfer mit Sachkundenachweis",
          "Umweltfreundliche und gesundheitsverträgliche Methoden",
          "Nachhaltige Präventionskonzepte",
          "Einsatz modernster Bekämpfungsmethoden",
          "Schriftliche Garantie auf unsere Leistungen"
        ],
        heroImage: "/images/hero/pest-control-hero.jpg",
        serviceVideo: "/images/services/pest-control/pest-control-service.mp4"
      };
    } else if (normalizedService === 'elektro') {
      return {
        services: [
          {
            title: "Notfall-Elektriker",
            description: `24/7 Soforthilfe bei Stromausfällen und elektrischen Notfällen in ${decodedCity}. Schnelle Reaktionszeit und professionelle Problemlösung.`,
            icon: <FaBolt className="text-4xl text-white" />,
            benefits: ["24/7 Notdienst", "Schnelle Reaktionszeit", "Festpreisgarantie"],
            href: `/${decodedCity}/elektro#notfall`,
            image: "/images/services/electrical/emergency.jpg"
          },
          {
            title: "Elektroinstallationen",
            description: `Professionelle Installation und Modernisierung von Elektroanlagen in ${decodedCity}. Von der Planung bis zur Ausführung aus einer Hand.`,
            icon: <FaPlug className="text-4xl text-white" />,
            benefits: ["Fachgerechte Installation", "Modernste Technik", "Sicherheitsprüfung"],
            href: `/${decodedCity}/elektro#installation`,
            image: "/images/services/electrical/installation.jpg"
          },
          {
            title: "Beleuchtungstechnik",
            description: `Installation und Wartung von Beleuchtungssystemen in ${decodedCity}. Energieeffiziente Lösungen für Innen- und Außenbereiche.`,
            icon: <FaLightbulb className="text-4xl text-white" />,
            benefits: ["LED-Technik", "Energieeffizient", "Smart Home Integration"],
            href: `/${decodedCity}/elektro#beleuchtung`,
            image: "/images/services/electrical/lighting.jpg"
          },
          {
            title: "Smart Home",
            description: `Installation und Einrichtung von Smart Home Systemen in ${decodedCity}. Intelligente Vernetzung für mehr Komfort und Sicherheit.`,
            icon: <FaNetworkWired className="text-4xl text-white" />,
            benefits: ["Intelligente Steuerung", "Energiemanagement", "Fernzugriff"],
            href: `/${decodedCity}/elektro#smart-home`,
            image: "/images/services/electrical/smart-home.jpg"
          },
          {
            title: "E-Check & Prüfungen",
            description: `Professionelle Überprüfung Ihrer elektrischen Anlagen in ${decodedCity}. Sicherheit und Vorschriftsmäßigkeit garantiert.`,
            icon: <FaCheck className="text-4xl text-white" />,
            benefits: ["E-Check zertifiziert", "Normgerecht", "Dokumentation"],
            href: `/${decodedCity}/elektro#pruefung`,
            image: "/images/services/electrical/testing.jpg"
          }
        ],
        benefits: [
          "24/7 Notdienst bei elektrischen Störungen",
          "Festpreisgarantie ohne versteckte Kosten",
          "Schnelle Reaktionszeit binnen 30-60 Minuten",
          "VDE-konforme Installationen",
          "Ausgebildete Elektriker mit Meisterqualifikation",
          "Modernste Mess- und Prüftechnik",
          "Smart Home Expertise",
          "Energieeffiziente Lösungen",
          "Schriftliche Garantie auf alle Arbeiten"
        ],
        heroImage: "/images/hero/electrical-hero.jpg",
        serviceVideo: "/images/services/electrical/electrical-service.mp4"
      };
    } else if (normalizedService === 'entruempelung' || normalizedService === 'entrümpelung') {
      return {
        services: [
          {
            title: "Wohnungsauflösung",
            description: `Professionelle und diskrete Wohnungsauflösung in ${decodedCity}. Komplette Räumung und Entsorgung aus einer Hand.`,
            icon: <FaHome className="text-4xl text-white" />,
            benefits: ["Komplettservice", "Diskrete Abwicklung", "Besenreine Übergabe"],
            href: `/${decodedCity}/entruempelung#wohnungsaufloesung`,
            image: "/images/services/clearance/apartment.jpg"
          },
          {
            title: "Haushaltsauflösung",
            description: `Fachgerechte Haushaltsauflösung und Entrümpelung in ${decodedCity}. Schnell, zuverlässig und kostengünstig.`,
            icon: <FaCouch className="text-4xl text-white" />,
            benefits: ["Faire Preise", "Komplette Räumung", "Verwertbare Gegenstände"],
            href: `/${decodedCity}/entruempelung#haushaltsaufloesung`,
            image: "/images/services/clearance/household.jpg"
          },
          {
            title: "Geschäftsauflösung",
            description: `Professionelle Auflösung von Büros, Läden und Gewerbeflächen in ${decodedCity}. Termingerechte und effiziente Durchführung.`,
            icon: <FaWarehouse className="text-4xl text-white" />,
            benefits: ["Termingerecht", "Effiziente Abwicklung", "Geschäftsdiskret"],
            href: `/${decodedCity}/entruempelung#geschaeftsaufloesung`,
            image: "/images/services/clearance/business.jpg"
          },
          {
            title: "Entrümpelung & Entsorgung",
            description: `Fachgerechte Entrümpelung und umweltgerechte Entsorgung in ${decodedCity}. Von einzelnen Möbeln bis zur kompletten Immobilie.`,
            icon: <FaTrash className="text-4xl text-white" />,
            benefits: ["Umweltgerecht", "Schnelle Durchführung", "Faire Preise"],
            href: `/${decodedCity}/entruempelung#entruempelung`,
            image: "/images/services/clearance/disposal.jpg"
          },
          {
            title: "Sperrmüll-Express",
            description: `Schnelle und unkomplizierte Sperrmüllabholung in ${decodedCity}. Flexible Termine und faire Festpreise.`,
            icon: <FaTruck className="text-4xl text-white" />,
            benefits: ["Express-Service", "Flexible Termine", "Festpreisgarantie"],
            href: `/${decodedCity}/entruempelung#sperrmuell`,
            image: "/images/services/clearance/bulky-waste.jpg"
          }
        ],
        benefits: [
          "Kostenlose Besichtigung und Angebot",
          "Festpreisgarantie ohne versteckte Kosten",
          "Schnelle Terminvergabe",
          "Besenreine Übergabe",
          "Fachgerechte Entsorgung aller Materialien",
          "Verwertung brauchbarer Gegenstände",
          "Diskrete und professionelle Abwicklung",
          "Umweltgerechte Entsorgung",
          "Kompetente Beratung und Planung"
        ],
        heroImage: "/images/hero/clearance-hero.jpg",
        serviceVideo: "/images/services/clearance/clearance-service.mp4"
      };
    }
    return null;
  };

  const config = getServiceConfig();
  if (!config) return null;

  return (
    <>
      <EmergencyBanner />
      <ServicePage
        title={`${service} in ${decodedCity}`}
        subtitle={`Ihr professioneller ${service} für schnelle und zuverlässige Hilfe in ${decodedCity}. Komplettservice mit Festpreisgarantie und umweltgerechter Entsorgung.`}
        heroImage={config.heroImage}
        services={config.services.map(service => ({
          ...service,
          description: service.description.replace(city, decodedCity)
        }))}
        benefits={config.benefits}
        serviceVideo={config.serviceVideo}
      />
    </>
  );
}