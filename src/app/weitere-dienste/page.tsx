'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaTools, FaCheck, FaPhoneAlt, FaWhatsapp, FaArrowRight, FaShieldAlt, FaClock, FaHome } from 'react-icons/fa';

const services = [
  {
    title: "Wasserschadensanierung",
    description: "Professionelle Beseitigung von Wasserschäden und Trocknung",
    details: [
      "24/7 Notfall-Service bei Wasserschäden",
      "Modernste Trocknungstechnik",
      "Schimmelpilzbekämpfung",
      "Bautrocknung und Sanierung",
      "Leckageortung"
    ]
  },
  {
    title: "Entrümpelung & Haushaltsauflösung",
    description: "Komplette Räumung und fachgerechte Entsorgung",
    details: [
      "Kostenlose Besichtigung und Angebot",
      "Komplette Haushaltsauflösungen",
      "Fachgerechte Entsorgung",
      "Wertanrechnung möglich",
      "Besenreine Übergabe"
    ]
  },
  {
    title: "Garten- und Landschaftspflege",
    description: "Professionelle Pflege und Gestaltung von Außenanlagen",
    details: [
      "Rasenpflege und -neuanlage",
      "Heckenschnitt und Baumfällung",
      "Pflasterarbeiten",
      "Zaunbau und -reparatur",
      "Winterdienst"
    ],
    services: [
      {
        title: "Gartenpflege",
        items: [
          "Regelmäßige Rasenpflege",
          "Vertikutieren und Düngen",
          "Unkrautbekämpfung",
          "Beetpflege und Bepflanzung",
          "Gehölzschnitt"
        ],
        link: "/gartenpflege"
      },
      {
        title: "Baumpflege",
        items: [
          "Professioneller Baumschnitt",
          "Kronenpflege",
          "Totholzentfernung",
          "Sturmschadenbeseitigung",
          "Fällung mit Seilklettertechnik"
        ],
        link: "/baumpflege"
      },
      {
        title: "Pflasterarbeiten",
        items: [
          "Terrassen und Wege",
          "Hofeinfahrten",
          "Natursteinverlegung",
          "Reparatur und Sanierung",
          "Entwässerungssysteme"
        ],
        link: "/pflasterarbeiten"
      },
      {
        title: "Zaunbau",
        items: [
          "Metallzäune und Tore",
          "Holzzäune",
          "Sichtschutzelemente",
          "Gabionen",
          "Reparaturservice"
        ],
        link: "/zaunbau"
      }
    ]
  },
  {
    title: "Renovierung & Malerarbeiten",
    description: "Kompetente Renovierung und hochwertige Malerarbeiten",
    details: [
      "Innen- und Außenanstriche",
      "Tapezierarbeiten",
      "Fassadenrenovierung",
      "Bodenbelagsarbeiten",
      "Trockenbau"
    ]
  }
];

const additionalServices = [
  "Dachrinnenreinigung",
  "Kellersanierung",
  "Fensterreinigung",
  "Graffitientfernung",
  "Einbruchschutz",
  "Klimaanlagen-Service",
  "Kaminreinigung",
  "Poolreinigung und -wartung"
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const fadeInUpTransition = {
  duration: 0.5
};

export default function WeitereDienste() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a365d] to-[#2563eb] text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
            >
              <span className="flex items-center gap-2">
                <FaTools className="text-[#90cdf4]" />
                24/7 Notdienst verfügbar
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Weitere Dienstleistungen
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl opacity-90 mb-8"
            >
              Ihr zuverlässiger Partner für alle Fälle - Professionell, schnell und fair
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="tel:017684536648"
                className="bg-white text-[#1a365d] hover:bg-[#90cdf4] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2"
              >
                <FaPhoneAlt className="animate-pulse" />
                017684536648
              </a>
              <a
                href="https://wa.me/017684536648"
                className="bg-[#25D366] hover:bg-[#128C7E] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2"
              >
                <FaWhatsapp />
                WhatsApp Chat
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={fadeInUpTransition}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
              Unsere zusätzlichen Dienstleistungen
            </h2>
            <p className="text-xl text-gray-600">
              Entdecken Sie unser breites Spektrum an professionellen Leistungen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
              >
                <h3 className="text-2xl font-bold text-[#1a365d] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services List */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={fadeInUpTransition}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
              Weitere Spezialleistungen
            </h2>
            <p className="text-xl text-gray-600">
              Für jeden Bedarf die passende Lösung
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all"
              >
                <FaTools className="text-[#1a365d] text-3xl mx-auto mb-4" />
                <h3 className="font-bold text-[#1a365d]">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={fadeInUpTransition}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
              Ihre Vorteile
            </h2>
            <p className="text-xl text-gray-600">
              Warum Sie sich für uns entscheiden sollten
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaClock />,
                title: "24/7 Erreichbarkeit",
                description: "Wir sind rund um die Uhr für Sie da - auch an Sonn- und Feiertagen"
              },
              {
                icon: <FaShieldAlt />,
                title: "Qualitätsgarantie",
                description: "Höchste Qualitätsstandards und ausgebildete Fachkräfte"
              },
              {
                icon: <FaHome />,
                title: "Komplettservice",
                description: "Alle Leistungen aus einer Hand - von der Beratung bis zur Ausführung"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#1a365d] rounded-full flex items-center justify-center text-white text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2563eb] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={fadeInUpTransition}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Benötigen Sie Unterstützung?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontaktieren Sie uns jetzt für eine kostenlose Beratung!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:017684536648"
                className="bg-white text-[#1a365d] hover:bg-[#90cdf4] px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
              >
                <FaPhoneAlt className="animate-pulse" />
                017684536648
              </a>
              <a
                href="https://wa.me/017684536648"
                className="bg-[#25D366] hover:bg-[#128C7E] px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
              >
                <FaWhatsapp />
                WhatsApp Chat
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garten Section with Detailed Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={fadeInUpTransition}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#1a365d] text-white px-6 py-2 rounded-full mb-4">
              Garten- & Landschaftspflege
            </span>
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
              Professionelle Gartendienste
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der regelmäßigen Gartenpflege bis zu komplexen Landschaftsbauprojekten - wir sind Ihr kompetenter Partner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services[2]?.services?.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1a365d] mb-4">{service.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#2563eb] hover:text-[#1a365d] font-medium group"
                  >
                    Mehr erfahren
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/garten-und-landschaftspflege"
              className="inline-flex items-center gap-2 bg-[#1a365d] text-white px-8 py-4 rounded-full font-bold hover:bg-[#2563eb] transition-all group"
            >
              Alle Gartendienstleistungen entdecken
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 