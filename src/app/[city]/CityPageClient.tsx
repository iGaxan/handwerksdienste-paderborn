'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { FaKey, FaWrench, FaBath, FaBug, FaBolt, FaPhoneAlt, FaStar, FaClock, FaCheck, FaMapMarkerAlt, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { findCityRegion, getCityCoordinates, denormalizeCity } from '@/utils/cityUtils';
import GoogleMap from '@/components/GoogleMap';
import OptimizedImage from '@/components/OptimizedImage';
import Script from 'next/script';

interface Props {
  params: {
    city: string;
  };
}

export default function CityPageClient({ params }: Props) {
  const cityName = denormalizeCity(params.city);
  const region = findCityRegion(cityName);
  const coordinates = getCityCoordinates(cityName);

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://www.example.com/${params.city}#LocalBusiness`,
    name: `24/7 Handwerker & Notdienst ${cityName}`,
    image: 'https://www.example.com/images/logo.webp',
    telephone: '015735989735',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hauptstraße 1',
      addressLocality: cityName,
      postalCode: '33098',
      addressCountry: 'DE'
    },
    geo: coordinates ? {
      '@type': 'GeoCoordinates',
      latitude: coordinates.lat,
      longitude: coordinates.lng
    } : undefined,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    sameAs: [
      'https://www.facebook.com/example',
      'https://www.instagram.com/example'
    ]
  };

  return (
    <>
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-[#1a365d]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] to-[#2563eb]/90">
            <OptimizedImage
              src="/images/hero-bg.jpg"
              alt={`Handwerker Service in ${cityName}`}
              width={1920}
              height={1080}
              className="absolute inset-0 object-cover opacity-20"
              priority
            />
          </div>
          
          <div className="container relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                24/7 Handwerker & Notdienst in {cityName}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Ihr zuverlässiger Partner für alle Handwerksleistungen in {cityName} & {region}
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a 
                  href="tel:015735989735"
                  className="group bg-[#2563eb] hover:bg-white hover:text-[#2563eb] text-white px-8 py-4 rounded-full inline-flex items-center justify-center space-x-3 transition-all"
                >
                  <FaPhone className="text-xl" />
                  <span>In 20-30 Min. vor Ort</span>
                </a>
                <a 
                  href="https://wa.me/4915735989735"
                  className="group bg-green-600 hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-full inline-flex items-center justify-center space-x-3 transition-all"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp Anfrage</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] text-center mb-12">
              Unsere Leistungen in {cityName}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaKey />,
                  title: `Schlüsseldienst ${cityName}`,
                  desc: `Schnelle Türöffnung in ${cityName} - Tag und Nacht für Sie verfügbar.`,
                  href: `/${params.city}/schluesseldienst`
                },
                {
                  icon: <FaWrench />,
                  title: `Rohrreinigung ${cityName}`,
                  desc: `Professionelle Rohrreinigung in ${cityName} - Verstopfungen schnell beseitigt.`,
                  href: `/${params.city}/rohrreinigung`
                },
                {
                  icon: <FaBath />,
                  title: `Sanitär ${cityName}`,
                  desc: `Kompetenter Sanitär-Service in ${cityName} - Von der Reparatur bis zur Installation.`,
                  href: `/${params.city}/sanitaer`
                },
                {
                  icon: <FaBug />,
                  title: `Schädlingsbekämpfung ${cityName}`,
                  desc: `Effektive Schädlingsbekämpfung in ${cityName} - Nachhaltig und sicher.`,
                  href: `/${params.city}/schaedlingsbekaempfung`
                },
                {
                  icon: <FaBolt />,
                  title: `Elektro ${cityName}`,
                  desc: `Ihr Elektriker in ${cityName} - Für alle elektrischen Installationen und Reparaturen.`,
                  href: `/${params.city}/elektro`
                }
              ].map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="bg-[#2563eb] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Standort Section */}
        {coordinates && (
          <section className="py-20 bg-gray-50">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] text-center mb-12">
                Ihr Handwerker in {cityName}
              </h2>
              <div className="max-w-5xl mx-auto">
                <GoogleMap
                  city={cityName}
                  lat={coordinates.lat}
                  lng={coordinates.lng}
                />
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
} 