'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaHistory, 
  FaCheckCircle, 
  FaCog,
  FaMapMarkedAlt,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAward,
  FaCertificate,
  FaHandshake,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaThumbsUp,
  FaHeart
} from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const fadeInUpTransition = {
  duration: 0.5
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-[#1a365d] to-[#2563eb]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/about-hero.jpg"
            alt="Über uns Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ihr Experte für professionelle Handwerksdienstleistungen
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Seit über 15 Jahren setzen wir Maßstäbe in Qualität, Service und Kundenzufriedenheit.
              24/7 für Sie im Einsatz - schnell, zuverlässig und fair.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:017684536648"
                className="bg-white text-[#1a365d] hover:bg-[#90cdf4] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2"
              >
                <FaPhone className="animate-pulse" />
                Jetzt anrufen
              </a>
              <a 
                href="#contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1a365d] px-8 py-4 rounded-full font-bold transition-all"
              >
                Mehr erfahren
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={fadeInUpTransition}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-[#2563eb] font-semibold mb-2 block">UNSERE MISSION</span>
            <h2 className="text-4xl font-bold text-[#1a365d] mb-6">
              Wir machen den Unterschied
            </h2>
            <p className="text-xl text-gray-600">
              Unsere Mission ist es, erstklassige Handwerksdienstleistungen anzubieten, 
              die nicht nur die Erwartungen unserer Kunden erfüllen, sondern übertreffen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart className="text-4xl text-[#2563eb]" />,
                title: "Kundenorientiert",
                description: "Ihre Zufriedenheit steht bei uns an erster Stelle. Wir hören zu und finden die beste Lösung für Ihre Bedürfnisse."
              },
              {
                icon: <FaShieldAlt className="text-4xl text-[#2563eb]" />,
                title: "Qualitätsversprechen",
                description: "Wir arbeiten ausschließlich mit zertifizierten Fachkräften und hochwertigen Materialien für langfristige Lösungen."
              },
              {
                icon: <FaClock className="text-4xl text-[#2563eb]" />,
                title: "Immer für Sie da",
                description: "Unser 24/7 Notdienst garantiert schnelle Hilfe, wenn Sie sie am dringendsten benötigen."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Jahre Erfahrung" },
              { number: "50.000+", label: "Zufriedene Kunden" },
              { number: "100+", label: "Qualifizierte Mitarbeiter" },
              { number: "8", label: "Standorte in Deutschland" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#2563eb] font-semibold mb-2 block">UNSERE LEISTUNGEN</span>
            <h2 className="text-4xl font-bold text-[#1a365d] mb-6">
              Professionelle Lösungen für jeden Bedarf
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaTools />,
                title: "Schlüsseldienst",
                features: ["24/7 Notöffnung", "Einbruchschutz", "Schließanlagen"]
              },
              {
                icon: <FaCog />,
                title: "Rohrreinigung",
                features: ["Verstopfungen beheben", "Kamerainspektion", "Wartung"]
              },
              {
                icon: <FaUsers />,
                title: "Schädlingsbekämpfung",
                features: ["Professionelle Beseitigung", "Präventivmaßnahmen", "Beratung"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#2563eb] text-white rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#2563eb] font-semibold mb-2 block">UNSER TEAM</span>
            <h2 className="text-4xl font-bold text-[#1a365d] mb-6">
              Die Experten hinter unserem Erfolg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unser Team besteht aus hochqualifizierten Fachkräften mit langjähriger Erfahrung
              in ihren jeweiligen Bereichen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Michael Weber",
                position: "Geschäftsführer",
                image: "/images/testimonials/person1.jpg",
                description: "25 Jahre Erfahrung im Handwerksbereich"
              },
              {
                name: "Sarah Schmidt",
                position: "Kundenservice Leiterin",
                image: "/images/testimonials/person2.jpg",
                description: "Expertin für Kundenzufriedenheit"
              },
              {
                name: "Thomas Müller",
                position: "Technischer Leiter",
                image: "/images/testimonials/person3.jpg",
                description: "Meister im Handwerk"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative w-full h-80 mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">{member.name}</h3>
                  <p className="text-[#2563eb] font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#2563eb] font-semibold mb-2 block">AUSZEICHNUNGEN</span>
            <h2 className="text-4xl font-bold text-[#1a365d] mb-6">
              Zertifizierte Qualität
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "ISO 9001", desc: "Zertifiziertes Qualitätsmanagement" },
              { title: "Meisterbetrieb", desc: "Handwerkskammer geprüft" },
              { title: "Top Service", desc: "Ausgezeichneter Kundenservice" },
              { title: "Innovationspreis", desc: "Für digitale Lösungen" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all"
              >
                <FaAward className="text-4xl text-[#2563eb] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#1a365d] mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.desc}</p>
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
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Bereit für professionelle Unterstützung?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontaktieren Sie uns jetzt für eine kostenlose Beratung
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:017684536648"
                className="bg-white text-[#1a365d] hover:bg-[#90cdf4] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2"
              >
                <FaPhone className="animate-pulse" />
                017684536648
              </a>
              <a
                href="https://wa.me/017684536648"
                className="bg-[#25D366] hover:bg-[#128C7E] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2"
              >
                <FaEnvelope />
                Kontakt aufnehmen
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 