'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { 
  FaKey, 
  FaLock, 
  FaShieldAlt, 
  FaTools, 
  FaDoorOpen,
  FaPhone, 
  FaWhatsapp,
  FaCheck,
  FaWrench,
  FaWater
} from 'react-icons/fa';

interface Props {
  city: string;
  service: string;
}

export default function CityServicePage({ city, service }: Props) {
  const decodedCity = decodeURIComponent(city);
  
  const getServiceConfig = () => {
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
            description: `Professionelle Türöffnung bei Aussperrung in ${decodedCity} - schnell und ohne Beschädigung Ihrer Tür.`,
            icon: <FaDoorOpen className="text-4xl text-white" />,
            benefits: ["Schadenfreie Öffnung", "24/7 Notdienst", "Festpreisgarantie"],
            image: "/images/services/locksmith/door-opening.jpg"
          },
          {
            title: "Schloss-Austausch",
            description: `Austausch und Reparatur von Schließzylindern und Schlössern aller Art in ${decodedCity}.`,
            icon: <FaLock className="text-4xl text-white" />,
            benefits: ["Qualitätsprodukte", "Fachgerechte Montage", "Garantierte Arbeit"],
            image: "/images/services/locksmith/lock-replacement.jpg"
          },
          {
            title: "Einbruchschutz",
            description: `Sicherheitsberatung und Installation von einbruchhemmenden Systemen in ${decodedCity}.`,
            icon: <FaShieldAlt className="text-4xl text-white" />,
            benefits: ["Sicherheitsberatung", "Professionelle Montage", "Nachhaltiger Schutz"],
            image: "/images/services/locksmith/security.jpg"
          }
        ],
        benefits: [
          "24/7 Notdienst - Tag und Nacht für Sie da",
          "Festpreisgarantie ohne versteckte Kosten",
          "Anfahrt innerhalb von 20-30 Minuten",
          "Schadenfreie Türöffnung",
          "Ausgebildete Fachkräfte mit jahrelanger Erfahrung"
        ],
        heroImage: "/images/hero/locksmith-hero.jpg"
      };
    }
    
    if (normalizedService === 'rohrreinigung') {
      return {
        services: [
          {
            title: "Notfall-Rohrreinigung",
            description: `24/7 Soforthilfe bei verstopften Rohren und Abflüssen in ${decodedCity}. Schnelle Reaktionszeit und professionelle Entstopfung.`,
            icon: <FaWrench className="text-4xl text-white" />,
            benefits: ["Sofortige Hilfe", "Modernste Technik", "Faire Preise"],
            image: "/images/services/plumbing/plumbing-repair-service.jpg"
          },
          {
            title: "Kanalreinigung",
            description: `Professionelle Reinigung von Hausanschlüssen und Kanälen in ${decodedCity}. Beseitigung von Verstopfungen und Ablagerungen.`,
            icon: <FaWater className="text-4xl text-white" />,
            benefits: ["Gründliche Reinigung", "Kamera-Inspektion", "Nachhaltige Lösung"],
            image: "/images/services/plumbing/service-maintenance-worker-repairing.jpg"
          },
          {
            title: "Hochdruck-Reinigung",
            description: `Effektive Hochdruckreinigung für hartnäckige Verstopfungen in ${decodedCity}. Beseitigt auch festsitzende Ablagerungen.`,
            icon: <FaTools className="text-4xl text-white" />,
            benefits: ["Modernste Technik", "Effektive Reinigung", "Langanhaltender Erfolg"],
            image: "/images/services/plumbing/medium-shot-man-posing-studio.jpg"
          }
        ],
        benefits: [
          "24/7 Notdienst - Rund um die Uhr für Sie da",
          "Festpreisgarantie ohne versteckte Kosten",
          "Schnelle Reaktionszeit von 20-30 Minuten",
          "Modernste Reinigungstechnik für alle Fälle",
          "5 Jahre Garantie auf fertige Arbeiten"
        ],
        heroImage: "/images/services/plumbing/plumbing-repair-service.jpg"
      };
    }
    
    return null;
  };

  const config = getServiceConfig();
  if (!config) return null;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-[#003366] to-[#1a4d80]">
        <div className="absolute inset-0 z-0">
          <Image
            src={config.heroImage}
            alt={`${service} in ${decodedCity}`}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {service} in {decodedCity}
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Ihr professioneller {service} für schnelle und zuverlässige Hilfe in {decodedCity}. 
            24/7 Notdienst mit Festpreisgarantie.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="tel:017684536648"
              className="bg-white text-[#003366] px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-3"
            >
              <FaPhone className="animate-pulse" />
              017684536648
            </a>
            <a 
              href="https://wa.me/017684536648"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#22c35e] transition-colors flex items-center justify-center gap-3"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Unsere Leistungen in {decodedCity}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#003366] p-3 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FaCheck className="text-[#003366]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="vorteile" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Ihre Vorteile in {decodedCity}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg flex items-start gap-4"
              >
                <div className="bg-[#003366] p-2 rounded-full text-white">
                  <FaCheck />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-[#003366] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              24/7 Notdienst in {decodedCity}
            </h2>
            <p className="text-xl mb-8">
              Rufen Sie uns jetzt an - wir sind rund um die Uhr für Sie da!
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a 
                href="tel:017684536648"
                className="bg-white text-[#003366] px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-3"
              >
                <FaPhone className="animate-pulse" />
                017684536648
              </a>
              <a 
                href="https://wa.me/017684536648"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#22c35e] transition-colors flex items-center justify-center gap-3"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 