'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaTools, FaClock, FaCheck, FaStar } from 'react-icons/fa';
import cities from '@/data/cities.json';

interface Props {
  params: {
    city: string;
    service: string;
  };
}

// Service-Definitionen
const services = {
  schluesseldienst: {
    title: 'Schlüsseldienst',
    descriptions: [
      'Schnelle Türöffnung ohne Schäden',
      'Professioneller Einbruchschutz',
      'Schließanlagen-Installation',
      '24/7 Notdienst verfügbar'
    ],
    features: [
      'Türöffnung ohne Beschädigung',
      'Einbruchschutzberatung',
      'Schließanlagen-Wartung',
      'Schlüssel-Notdienst'
    ],
    benefits: [
      'In 15-30 Minuten vor Ort',
      'Festpreisgarantie',
      'Keine versteckten Kosten',
      'Modernste Werkzeuge'
    ]
  },
  rohrreinigung: {
    title: 'Rohrreinigung',
    descriptions: [
      'Professionelle Rohrreinigung',
      'Verstopfungen schnell beheben',
      'Kamera-Inspektion möglich',
      'Wartung und Vorsorge'
    ],
    features: [
      'Hochdruck-Reinigung',
      'Rohrkamera-Inspektion',
      'Dichtheitsprüfung',
      'Verstopfungsortung'
    ],
    benefits: [
      'Sofortige Hilfe',
      'Nachhaltige Lösung',
      'Faire Preise',
      'Modernste Technik'
    ]
  },
  sanitaer: {
    title: 'Sanitär',
    descriptions: [
      'Kompletter Sanitärservice',
      'Bad- und WC-Installation',
      'Reparatur und Wartung',
      'Modernisierung'
    ],
    features: [
      'Sanitärinstallation',
      'Badrenovierung',
      'Wartungsservice',
      'Leckagebehebung'
    ],
    benefits: [
      'Qualifizierte Fachkräfte',
      'Termingerechte Ausführung',
      'Saubere Arbeit',
      'Festpreisangebot'
    ]
  },
  schaedlingsbekaempfung: {
    title: 'Schädlingsbekämpfung',
    descriptions: [
      'Professionelle Schädlingsbekämpfung',
      'Nachhaltige Lösungen',
      'Präventive Maßnahmen',
      'Diskrete Durchführung'
    ],
    features: [
      'Befallsanalyse',
      'Umweltfreundliche Methoden',
      'Präventionskonzepte',
      'Erfolgsgarantie'
    ],
    benefits: [
      'Schnelle Hilfe',
      'Dauerhafte Lösung',
      'Gesundheitlich unbedenklich',
      'Diskrete Durchführung'
    ]
  },
  elektro: {
    title: 'Elektro',
    descriptions: [
      'Elektrische Installationen',
      'Störungsbehebung',
      'Sicherheitsprüfungen',
      'Smart Home Installation'
    ],
    features: [
      'E-Check',
      'Elektroinstallation',
      'Störungsdienst',
      'Smart Home'
    ],
    benefits: [
      'Geprüfte Elektriker',
      'VDE-konforme Arbeit',
      'Festpreisgarantie',
      'Notdienst verfügbar'
    ]
  },
  entruempelung: {
    title: 'Entrümpelung',
    descriptions: [
      'Professionelle Entrümpelung',
      'Haushaltsauflösung',
      'Sperrmüll-Entsorgung',
      'Besenreine Übergabe'
    ],
    features: [
      'Komplettservice',
      'Fachgerechte Entsorgung',
      'Wertanrechnung möglich',
      'Besenreine Übergabe'
    ],
    benefits: [
      'Festpreisangebot',
      'Schnelle Durchführung',
      'Umweltgerechte Entsorgung',
      'Wertanrechnung'
    ]
  }
};

// Hilfsfunktionen für die Städte
function cityExists(cityName: string): boolean {
  return cities.regions.some(region => 
    region.cities.includes(cityName)
  );
}

function findCityRegion(cityName: string) {
  return cities.regions.find(region => 
    region.cities.includes(cityName)
  );
}

// Content-Variation Helper
function getUniqueContent(cityName: string, serviceKey: string) {
  const service = services[serviceKey as keyof typeof services];
  const region = findCityRegion(cityName);
  
  if (!service || !region) return null;

  // Erstelle einzigartige Beschreibungen basierend auf Stadt und Region
  const uniqueIntro = `Als Ihr zuverlässiger ${service.title}-Partner in ${cityName} bieten wir Ihnen erstklassige Dienstleistungen im gesamten ${region.name}. Unsere langjährige Erfahrung und die ausgezeichnete Kenntnis der lokalen Gegebenheiten machen uns zu Ihrem idealen Ansprechpartner für ${service.title.toLowerCase()}.`;
  
  return {
    ...service,
    uniqueIntro,
    regionInfo: `Unser ${service.title} ist in ganz ${region.name} für Sie im Einsatz. Besonders in ${cityName} und Umgebung sind wir Ihr kompetenter Ansprechpartner.`
  };
}

export default function ServicePage({ params }: Props) {
  const citySlug = decodeURIComponent(params.city)
    .replace(/-/g, ' ')
    .replace(/ue/g, 'ü')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (!cityExists(citySlug)) {
    return null; // Next.js wird automatisch zur 404-Seite weiterleiten
  }

  const serviceContent = getUniqueContent(citySlug, params.service);
  if (!serviceContent) {
    return null;
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1a365d]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-[#2563eb] text-white px-6 py-2 rounded-full mb-6"
            >
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-lg" />
                <span>{serviceContent.title} in {citySlug}</span>
              </div>
            </motion.div>
            <motion.h1
              {...fadeIn}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ihr {serviceContent.title} in {citySlug}
            </motion.h1>
            <motion.p
              {...fadeIn}
              className="text-xl text-white/90 mb-12"
            >
              {serviceContent.uniqueIntro}
            </motion.p>
            <motion.div
              {...fadeIn}
              className="flex flex-col md:flex-row gap-6 justify-center"
            >
              <a 
                href="tel:017684536648"
                className="group bg-[#2563eb] text-white hover:bg-white hover:text-[#2563eb] text-xl font-bold px-8 py-4 rounded-full inline-flex items-center justify-center space-x-3 transition-all shadow-xl"
              >
                <FaPhone className="text-xl group-hover:animate-ping" />
                <span>Kostenlos anfragen</span>
              </a>
              <a 
                href="https://wa.me/4915735989735"
                className="group bg-green-600 text-white hover:bg-white hover:text-green-600 text-xl font-bold px-8 py-4 rounded-full inline-flex items-center justify-center space-x-3 transition-all shadow-xl"
              >
                <FaWhatsapp className="text-xl group-hover:animate-bounce" />
                <span>WhatsApp Anfrage</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#1a365d] mb-8">
              Unsere {serviceContent.title}-Leistungen in {citySlug}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {serviceContent.regionInfo}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceContent.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex-shrink-0">
                    <FaTools className="h-6 w-6 text-[#2563eb]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#1a365d]">
                    {feature}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {serviceContent.descriptions[index]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1a365d]">
              Ihre Vorteile bei unserem {serviceContent.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceContent.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#2563eb] text-white mx-auto mb-4">
                  {index === 0 ? <FaClock className="h-6 w-6" /> :
                   index === 1 ? <FaCheck className="h-6 w-6" /> :
                   index === 2 ? <FaTools className="h-6 w-6" /> :
                   <FaStar className="h-6 w-6" />}
                </div>
                <h3 className="text-lg font-medium text-[#1a365d] mb-2">
                  {benefit}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#1a365d] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {serviceContent.title} in {citySlug} benötigt?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Kontaktieren Sie uns jetzt für ein unverbindliches Angebot!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="tel:017684536648"
                className="bg-white text-[#1a365d] hover:bg-[#2563eb] hover:text-white px-8 py-4 rounded-full inline-flex items-center justify-center space-x-3 transition-all font-bold"
              >
                <FaPhone className="text-xl" />
                <span>017684536648</span>
              </a>
              <a 
                href="https://wa.me/4915735989735"
                className="bg-green-500 text-white hover:bg-white hover:text-green-500 px-8 py-4 rounded-full inline-flex items-center justify-center space-x-3 transition-all font-bold"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 