'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import ServiceCard from "./ServiceCard";
import { ReactNode } from 'react';

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
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

      {/* Image Background */}
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

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 inline-block mb-6"
        >
          <span className="text-white font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            24/7 Notdienst verfügbar
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-white/90 mb-12"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="tel:017684536648"
            className="bg-white text-[#1a365d] hover:bg-[#90cdf4] px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
          >
            <FaPhone className="animate-pulse group-hover:rotate-12 transition-transform" />
            <span>017684536648</span>
          </a>
          <a 
            href="https://wa.me/017684536648"
            className="bg-[#25D366] text-white hover:bg-[#128C7E] px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
          >
            <FaWhatsapp className="group-hover:rotate-12 transition-transform" />
            <span>WhatsApp Chat</span>
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