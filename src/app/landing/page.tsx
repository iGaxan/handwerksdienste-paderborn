'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaKey,
  FaWrench,
  FaBug,
  FaBolt,
  FaTint,
  FaPhone,
  FaCheckCircle,
  FaWhatsapp,
  FaStar,
  FaShieldAlt,
  FaClock
} from 'react-icons/fa';
const MotionDiv = motion.div;
const MotionSection = motion.section;
const MotionLink = motion.a;

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const pulseButton = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.02, 1]
  }
};

const rotateIcon = {
  initial: { rotate: 0 },
  animate: { rotate: 360 }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <MotionDiv 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="relative h-[80vh] bg-[#003366]"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero/locksmith-hero.jpg"
            alt="Handwerksdienste in Paderborn"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#0066cc] text-white px-4 py-2 rounded-full font-semibold mb-6">
              Ihr Handwerksprofi in Paderborn
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professionelle Handwerksleistungen in 30 Minuten vor Ort
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="grid grid-cols-3 gap-4 text-white text-center">
                <div>
                  <FaClock className="text-2xl mx-auto mb-2 text-[#0066cc]" />
                  <p className="font-semibold">30 Minuten<br />Reaktionszeit</p>
                </div>
                <div>
                  <FaShieldAlt className="text-2xl mx-auto mb-2 text-[#0066cc]" />
                  <p className="font-semibold">100% Festpreis<br />Garantie</p>
                </div>
                <div>
                  <FaStar className="text-2xl mx-auto mb-2 text-[#0066cc]" />
                  <p className="font-semibold">4.9/5 Sterne<br />Bewertung</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0800123456789"
                className="bg-[#0066cc] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0052a3] transition-colors flex items-center gap-2"
              >
                <FaPhone /> Jetzt anrufen
              </a>
              <a
                href="https://wa.me/0800123456789"
                className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1da851] transition-colors flex items-center gap-2"
              >
                <FaWhatsapp /> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </MotionDiv>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Service Intro */}
        <MotionSection 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-[#003366] px-4 py-2 rounded-full font-semibold mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
            Professionelle Handwerksleistungen in Paderborn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Verlassen Sie sich auf unsere erfahrenen Fachkräfte für schnelle und zuverlässige Hilfe bei allen Handwerksproblemen.
          </p>
        </MotionSection>

        {/* 1. Schlüsseldienst */}
        <MotionSection 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="mb-24 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12">
              <MotionSection 
                variants={rotateIcon}
                transition={{ duration: 0.6 }}
                className="inline-block bg-[#003366] text-white p-3 rounded-full mb-6"
              >
                <FaKey className="text-2xl" />
              </MotionSection>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Schlüsseldienst Paderborn
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Türöffnung ohne Beschädigung</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Schloss-Austausch & Reparatur</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Einbruchschutz & Sicherheitsberatung</span>
                </div>
              </div>
              <div className="flex gap-4">
                <MotionSection 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href="/schluesseldienst"
                    className="inline-block bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Mehr erfahren
                  </Link>
                </MotionSection>
                <MotionSection 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="tel:0800123456789"
                    className="inline-block bg-[#0066cc] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FaPhone className="inline mr-2" />
                    Jetzt anrufen
                  </a>
                </MotionSection>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/hero/locksmith-hero.jpg"
                alt="Schlüsseldienst Paderborn"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent hover:opacity-0 transition-opacity duration-300" />
            </div>
          </div>
        </MotionSection>

        {/* 2. Rohrreinigung */}
        <MotionSection 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="mb-24 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative h-[400px] order-2 md:order-1">
              <Image
                src="/images/hero/plumbing-hero.jpg"
                alt="Rohrreinigung Paderborn"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-white/50 to-transparent hover:opacity-0 transition-opacity duration-300" />
            </div>
            <div className="p-12 order-1 md:order-2">
              <MotionSection 
                variants={rotateIcon}
                transition={{ duration: 0.6 }}
                className="inline-block bg-[#003366] text-white p-3 rounded-full mb-6"
              >
                <FaTint className="text-2xl" />
              </MotionSection>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Rohrreinigung Paderborn
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Verstopfungen schnell beseitigen</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Kamera-Inspektion</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Hochdruck-Reinigung</span>
                </div>
              </div>
              <div className="flex gap-4">
                <MotionSection 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href="/rohrreinigung"
                    className="inline-block bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Mehr erfahren
                  </Link>
                </MotionSection>
                <MotionSection 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="tel:0800123456789"
                    className="inline-block bg-[#0066cc] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FaPhone className="inline mr-2" />
                    Jetzt anrufen
                  </a>
                </MotionSection>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* 3. Sanitär */}
        <MotionSection 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="mb-24 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12">
              <MotionSection 
                variants={rotateIcon}
                transition={{ duration: 0.6 }}
                className="inline-block bg-[#003366] text-white p-3 rounded-full mb-6"
              >
                <FaWrench className="text-2xl" />
              </MotionSection>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Sanitär-Service Paderborn
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Installation & Reparatur</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Wartung von Sanitäranlagen</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Notfall-Reparaturen</span>
                </div>
              </div>
              <div className="flex gap-4">
                <MotionSection 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href="/sanitaer"
                    className="inline-block bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Mehr erfahren
                  </Link>
                </MotionSection>
                <MotionSection 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="tel:0800123456789"
                    className="inline-block bg-[#0066cc] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FaPhone className="inline mr-2" />
                    Jetzt anrufen
                  </a>
                </MotionSection>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/hero/sanitary-hero.jpg"
                alt="Sanitär Paderborn"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent hover:opacity-0 transition-opacity duration-300" />
            </div>
          </div>
        </MotionSection>

        {/* 4. Schädlingsbekämpfung */}
        <MotionSection 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="mb-24 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative h-[400px] order-2 md:order-1">
              <Image
                src="/images/hero/pest-control-hero.jpg"
                alt="Schädlingsbekämpfung Paderborn"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-white/50 to-transparent hover:opacity-0 transition-opacity duration-300" />
            </div>
            <div className="p-12 order-1 md:order-2">
              <MotionSection 
                variants={rotateIcon}
                transition={{ duration: 0.6 }}
                className="inline-block bg-[#003366] text-white p-3 rounded-full mb-6"
              >
                <FaBug className="text-2xl" />
              </MotionSection>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Schädlingsbekämpfung Paderborn
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Professionelle Schädlingsbekämpfung</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Präventive Maßnahmen</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Nachhaltige Lösungen</span>
                </div>
              </div>
              <div className="flex gap-4">
                <MotionSection 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href="/schaedlingsbekaempfung"
                    className="inline-block bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Mehr erfahren
                  </Link>
                </MotionSection>
                <MotionSection 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="tel:0800123456789"
                    className="inline-block bg-[#0066cc] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FaPhone className="inline mr-2" />
                    Jetzt anrufen
                  </a>
                </MotionSection>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* 5. Elektro */}
        <MotionSection 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="mb-24 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12">
              <MotionSection 
                variants={rotateIcon}
                transition={{ duration: 0.6 }}
                className="inline-block bg-[#003366] text-white p-3 rounded-full mb-6"
              >
                <FaBolt className="text-2xl" />
              </MotionSection>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Elektro-Service Paderborn
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Störungsbehebung</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Elektroinstallationen</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0066cc]" />
                  <span>Sicherheitsprüfungen</span>
                </div>
              </div>
              <div className="flex gap-4">
                <MotionSection 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href="/elektro"
                    className="inline-block bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Mehr erfahren
                  </Link>
                </MotionSection>
                <MotionSection 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="tel:0800123456789"
                    className="inline-block bg-[#0066cc] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FaPhone className="inline mr-2" />
                    Jetzt anrufen
                  </a>
                </MotionSection>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/hero/electrical-hero.jpg"
                alt="Elektro-Service Paderborn"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent hover:opacity-0 transition-opacity duration-300" />
            </div>
          </div>
        </MotionSection>

        {/* Trust Section */}
        <MotionSection 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-24 bg-[#003366] text-white rounded-2xl p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Warum Kunden uns vertrauen
            </h2>
            <p className="text-lg opacity-90">
              Über 10.000 zufriedene Kunden in Paderborn und Umgebung
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex text-[#0066cc] mb-2">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="mb-4">"Schnell, professionell und fair im Preis. Absolut empfehlenswert!"</p>
              <p className="font-semibold">- Thomas M. aus Paderborn</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex text-[#0066cc] mb-2">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="mb-4">"Innerhalb von 20 Minuten war der Techniker vor Ort. Super Service!"</p>
              <p className="font-semibold">- Sarah K. aus Delbrück</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex text-[#0066cc] mb-2">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="mb-4">"Kompetente Beratung und erstklassige Arbeit. Danke!"</p>
              <p className="font-semibold">- Michael B. aus Salzkotten</p>
            </div>
          </div>
        </MotionSection>

        {/* FAQ Section */}
        <MotionSection 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-[#003366] px-4 py-2 rounded-full font-semibold mb-4">
              Häufige Fragen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Ihre Fragen - Unsere Antworten
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#003366] mb-4">
                Wie schnell sind Sie vor Ort?
              </h3>
              <p className="text-gray-600">
                In Paderborn und Umgebung garantieren wir eine Reaktionszeit von maximal 30 Minuten. Unser Team ist strategisch in der Region verteilt, um schnellstmöglich bei Ihnen zu sein.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#003366] mb-4">
                Welche Zahlungsmethoden akzeptieren Sie?
              </h3>
              <p className="text-gray-600">
                Wir akzeptieren alle gängigen Zahlungsmethoden: EC-Karte, Kreditkarte, Barzahlung und auf Wunsch auch Rechnung für Geschäftskunden.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#003366] mb-4">
                Arbeiten Sie auch an Feiertagen?
              </h3>
              <p className="text-gray-600">
                Ja, unser Notdienst ist 365 Tage im Jahr, 24 Stunden am Tag für Sie da - auch an Feiertagen und am Wochenende, ohne Aufpreis.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#003366] mb-4">
                Gibt es eine Festpreisgarantie?
              </h3>
              <p className="text-gray-600">
                Ja, Sie erhalten vor Arbeitsbeginn einen verbindlichen Festpreis. Es gibt keine versteckten Kosten oder überraschende Zusatzgebühren.
              </p>
            </div>
          </div>
        </MotionSection>

        {/* Service Areas Section */}
        <MotionSection 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-24 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12">
              <span className="inline-block bg-blue-100 text-[#003366] px-4 py-2 rounded-full font-semibold mb-4">
                Einsatzgebiet
              </span>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Ihr verlässlicher Partner in der Region
              </h2>
              <p className="text-gray-600 mb-8">
                Wir sind in Paderborn und im gesamten Umkreis von 30km für Sie im Einsatz. Unser Kerngebiet umfasst:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-[#003366]">Paderborn</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-[#003366]">Delbrück</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-[#003366]">Bad Lippspringe</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-[#003366]">Salzkotten</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-[#003366]">Hövelhof</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-[#003366]">Bad Wünnenberg</p>
                </div>
              </div>
              <p className="text-gray-600">
                Auch außerhalb dieser Gebiete sind wir für Sie da - sprechen Sie uns einfach an!
              </p>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/cities/paderborn-map.jpg"
                alt="Einsatzgebiet Karte Paderborn"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-white/50 to-transparent hover:opacity-0 transition-opacity duration-300" />
            </div>
          </div>
        </MotionSection>

        {/* CTA Section */}
        <MotionSection 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-[#003366] to-[#0066cc] text-white p-12 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            24/7 Notdienst in Paderborn
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schnelle & professionelle Hilfe garantiert. Festpreisgarantie ohne versteckte Kosten.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <MotionSection whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:0800123456789"
                className="inline-flex items-center gap-2 bg-white text-[#003366] px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                <FaPhone />
                0800 - 123 456 789
              </a>
            </MotionSection>
            <MotionSection whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/0800123456789"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1da851] transition-colors"
              >
                <FaWhatsapp />
                WhatsApp Chat
              </a>
            </MotionSection>
          </div>
        </MotionSection>
      </div>

      {/* Mobile Call Button */}
      <MotionLink
        variants={pulseButton}
        initial="initial"
        animate="animate"
        href="tel:0800123456789"
        className="fixed bottom-6 right-6 md:hidden bg-[#0066cc] text-white p-4 rounded-full shadow-lg hover:bg-[#0052a3] transition-all z-50 hover:shadow-2xl"
      >
        <FaPhone className="text-2xl" />
      </MotionLink>
    </div>
  );
} 