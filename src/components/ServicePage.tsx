'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import ServiceCard from "./ServiceCard";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  href: string;
  image: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  services: Service[];
  benefits: string[];
  serviceImages?: string[];
  serviceVideo?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const HeroSection = ({ title, subtitle, heroImage, serviceVideo }: { title: string, subtitle: string, heroImage: string, serviceVideo?: string }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4">
      {/* Video Background */}
      {serviceVideo && (
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={serviceVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Hero Image Fallback */}
      {!serviceVideo && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      <div className="relative z-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a365d] text-white px-6 py-2 rounded-full font-medium whitespace-nowrap text-sm sm:text-base inline-block mb-8"
        >
          <span className="hidden sm:inline">24/7 Notdienst verfügbar</span>
          <span className="sm:hidden">24/7 Notdienst</span>
        </motion.div>

        {/* Desktop Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden sm:block text-3xl md:text-5xl font-bold text-white mb-6"
        >
          {title.includes('&') ? (
            <>
              {title.split('&')[0].trim()}
              <span className="mx-2">&</span>
              <span className="text-blue-300">
                {title.split('&')[1]?.trim()}
              </span>
            </>
          ) : (
            title
          )}
        </motion.h1>

        {/* Mobile Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="block sm:hidden text-[2.2rem] font-bold text-white mb-6"
        >
          {title.includes('&') ? (
            <>
              {title.split('&')[0].trim()}
              <br />
              <span className="text-blue-300">
                {title.split('&')[1]?.trim()}
              </span>
            </>
          ) : (
            title
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/90 text-base sm:text-xl mb-12 max-w-3xl mx-auto px-4"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-sm sm:text-xl mb-12 px-4"
        >
          <span className="inline-flex items-center gap-2">
            Schnell <span className="text-blue-300">✓</span>
          </span>
          {' '}
          <span className="inline-flex items-center gap-2">
            Zuverlässig <span className="text-blue-300">✓</span>
          </span>
          {' '}
          <span className="inline-flex items-center gap-2">
            Fair <span className="text-blue-300">✓</span>
          </span>
          {' '}
          <span className="inline-flex items-center gap-2">
            Umweltfreundlich <span className="text-blue-300">✓</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
        >
          <div className="grid grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">15+</div>
              <div className="text-sm">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">5000+</div>
              <div className="text-sm">Zufriedene Kunden</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">100%</div>
              <div className="text-sm">Festpreisgarantie</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <a
            href="tel:017684536648"
            className="bg-[#1a365d] hover:bg-[#2d4a7c] text-white px-8 py-5 text-lg rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto min-w-[250px]"
          >
            <FaPhone className="text-xl" /> Kostenlos anfragen
          </a>
          <a
            href="https://wa.me/4915735989735"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-5 text-lg rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto min-w-[250px]"
          >
            <FaWhatsapp className="text-xl" /> WhatsApp Anfrage
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default function ServicePage({ 
  title = '', 
  subtitle = '', 
  heroImage = '/images/default-hero.jpg', 
  services = [], 
  benefits = [], 
  serviceImages, 
  serviceVideo 
}: ServicePageProps) {
  if (!title || !subtitle || !services.length || !benefits.length) {
    console.warn('ServicePage: Required props are missing');
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection title={title} subtitle={subtitle} heroImage={heroImage} serviceVideo={serviceVideo} />

      {/* Services Section */}
      {services.length > 0 && (
        <section className="py-20 overflow-x-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <span className="inline-block bg-blue-100 text-[#1a365d] px-4 py-2 rounded-full font-semibold mb-4">
                Unsere Leistungen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
                Professioneller Service
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Wir bieten Ihnen erstklassige Dienstleistungen mit Qualitätsgarantie
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '20-30', label: 'Minuten Reaktionszeit' },
              { value: '24/7', label: 'Notdienst' },
              { value: '100%', label: 'Festpreisgarantie' },
              { value: '4.9', label: 'Kundenbewertung' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#1a365d] mb-2">{item.value}</div>
                <div className="text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="py-20 bg-[#1a365d]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full font-semibold mb-4">
                Ihre Vorteile
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Warum Sie sich für uns entscheiden
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Verlassen Sie sich auf unsere Erfahrung und Professionalität.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/5 p-4 rounded-lg"
                >
                  <div className="bg-white/10 rounded-full p-2 flex-shrink-0">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <span className="text-white text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-blue-100 text-[#1a365d] px-4 py-2 rounded-full font-semibold mb-4">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Kontaktieren Sie uns
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wir sind rund um die Uhr für Sie da. Schreiben Sie uns eine Nachricht.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <ContactForm service={title} />
          </div>
        </div>
      </section>
    </main>
  );
} 