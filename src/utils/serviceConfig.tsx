import {
  FaKey,
  FaLock,
  FaShieldAlt,
  FaTools,
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
  FaSpider,
  FaSprayCan,
  FaBuilding,
  FaBolt,
  FaLightbulb,
  FaNetworkWired,
  FaTrash,
  FaRecycle,
  FaTruck,
  FaCouch,
} from 'react-icons/fa';
import { GiPipes, GiRat, GiBirdCage } from 'react-icons/gi';
import { BiBug } from 'react-icons/bi';
import { ReactNode } from 'react';

interface ServiceConfig {
  title: string;
  subtitle: string;
  heroImage: string;
  services: Array<{
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
    image: string;
  }>;
  benefits: string[];
  serviceImages?: string[];
  serviceVideo?: string;
}

const defaultBenefits = [
  '24/7 Notdienst verfügbar',
  'Schnelle Reaktionszeit',
  'Festpreisgarantie',
  'Professionelle Fachkräfte',
  'Modernste Ausrüstung',
];

export function getServiceConfig(slug: string, location: string): ServiceConfig {
  const configs: { [key: string]: (location: string) => ServiceConfig } = {
    schluesseldienst: (location) => ({
      title: `Schlüsseldienst ${location}`,
      subtitle: `Ihr zuverlässiger Schlüsseldienst in ${location} - 24/7 Notdienst, faire Preise, schnelle Hilfe`,
      heroImage: '/images/locksmith-hero.jpg',
      services: [
        {
          title: 'Türöffnung',
          description: `Professionelle Türöffnung in ${location} bei Aussperrung oder verlorenen Schlüsseln`,
          icon: <FaKey className="w-6 h-6" />,
          href: '/tueroeffnung',
          image: '/images/door-opening.jpg',
        },
        {
          title: 'Schloss austauschen',
          description: 'Sicherheitsschlösser einbauen und alte Schlösser austauschen',
          icon: <FaLock className="w-6 h-6" />,
          href: '/schloss-austauschen',
          image: '/images/lock-change.jpg',
        },
        {
          title: 'Einbruchschutz',
          description: 'Präventive Sicherheitsberatung und Einbruchschutz',
          icon: <FaShieldAlt className="w-6 h-6" />,
          href: '/einbruchschutz',
          image: '/images/security.jpg',
        },
      ],
      benefits: defaultBenefits,
    }),
    sanitaer: (location) => ({
      title: `Sanitär ${location}`,
      subtitle: `Professionelle Sanitärarbeiten in ${location} - Von Reparaturen bis zur kompletten Installation`,
      heroImage: '/images/plumbing-hero.jpg',
      services: [
        {
          title: 'Sanitärinstallation',
          description: `Fachgerechte Installation von Sanitäranlagen in ${location}`,
          icon: <FaTools className="w-6 h-6" />,
          href: '/installation',
          image: '/images/plumbing-installation.jpg',
        },
        {
          title: 'WC & Toilette',
          description: 'Reparatur und Installation von WCs und Toiletten',
          icon: <FaToilet className="w-6 h-6" />,
          href: '/wc-toilette',
          image: '/images/toilet.jpg',
        },
        {
          title: 'Waschbecken',
          description: 'Montage und Reparatur von Waschbecken',
          icon: <FaSink className="w-6 h-6" />,
          href: '/waschbecken',
          image: '/images/sink.jpg',
        },
      ],
      benefits: defaultBenefits,
    }),
    rohrreinigung: (location) => ({
      title: `Rohrreinigung ${location}`,
      subtitle: `Professionelle Rohrreinigung in ${location} - Schnell, gründlich und nachhaltig`,
      heroImage: '/images/drain-cleaning-hero.jpg',
      services: [
        {
          title: 'Verstopfungen lösen',
          description: `Schnelle Beseitigung von Rohrverstopfungen in ${location}`,
          icon: <GiPipes className="w-6 h-6" />,
          href: '/verstopfung',
          image: '/images/clogged-drain.jpg',
        },
        {
          title: 'Kamerainspektion',
          description: 'Moderne Rohrkamerainspektion zur Problemerkennung',
          icon: <FaVideo className="w-6 h-6" />,
          href: '/kamerainspektion',
          image: '/images/pipe-inspection.jpg',
        },
        {
          title: 'Hochdruckreinigung',
          description: 'Gründliche Rohrreinigung mit Hochdrucktechnik',
          icon: <FaWater className="w-6 h-6" />,
          href: '/hochdruckreinigung',
          image: '/images/pressure-cleaning.jpg',
        },
      ],
      benefits: defaultBenefits,
    }),
    elektro: (location) => ({
      title: `Elektriker ${location}`,
      subtitle: `Ihr kompetenter Elektriker in ${location} - Für alle elektrischen Installationen und Reparaturen`,
      heroImage: '/images/electrician-hero.jpg',
      services: [
        {
          title: 'Elektroinstallation',
          description: `Professionelle Elektroinstallationen in ${location}`,
          icon: <FaBolt className="w-6 h-6" />,
          href: '/installation',
          image: '/images/electrical-installation.jpg',
        },
        {
          title: 'Beleuchtung',
          description: 'Installation und Wartung von Beleuchtungssystemen',
          icon: <FaLightbulb className="w-6 h-6" />,
          href: '/beleuchtung',
          image: '/images/lighting.jpg',
        },
        {
          title: 'Netzwerk & Datentechnik',
          description: 'Installation von Netzwerk- und Datenleitungen',
          icon: <FaNetworkWired className="w-6 h-6" />,
          href: '/netzwerk',
          image: '/images/network.jpg',
        },
      ],
      benefits: defaultBenefits,
    }),
  };

  const configGenerator = configs[slug];
  if (!configGenerator) {
    throw new Error(`No configuration found for service: ${slug}`);
  }

  return configGenerator(location);
} 