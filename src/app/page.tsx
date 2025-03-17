'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaKey, 
  FaWrench, 
  FaBug, 
  FaBolt, 
  FaShower,
  FaClock,
  FaTools,
  FaShieldAlt,
  FaStar,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
};

const heroImages = [
  '/images/hero/locksmith-hero.jpg',
  '/images/hero/plumbing-hero.jpg',
  '/images/hero/sanitary-hero.jpg'
];

export default function Home() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Image Carousel */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#1a365d] to-[#2563eb] overflow-hidden">
        {heroImages.map((img, index) => (
          <motion.div
            key={img}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentHeroImage === index ? 1 : 0,
              scale: currentHeroImage === index ? 1.1 : 1
            }}
            transition={{ duration: 1.5 }}
          >
          <Image
              src={img}
              alt={`Notdienst Bild ${index + 1}`}
            fill
              className="object-cover opacity-20"
              priority={index === 0}
          />
          </motion.div>
        ))}
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Ihr Experte für schnelle & zuverlässige Notdienste
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-[#90cdf4] text-xl mb-8"
            >
              {[
                { text: 'schluesseldienst', icon: <FaKey /> },
                { text: 'Rohrreinigung', icon: <FaWrench /> },
                { text: 'Sanitär', icon: <FaShower /> },
                { text: 'Elektro', icon: <FaBolt /> }
              ].map((service, index) => (
                <motion.span
                  key={service.text}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {service.icon}
                  <span>{service.text}</span>
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-white"
            >
              {[
                { number: '30', text: 'Minuten Reaktionszeit', icon: <FaClock /> },
                { number: '24/7', text: 'Erreichbarkeit', icon: <FaCheckCircle /> },
                { number: '100%', text: 'Festpreisgarantie', icon: <FaShieldAlt /> },
                { number: '15+', text: 'Jahre Erfahrung', icon: <FaTools /> }
              ].map((stat, index) => (
                <motion.div
                  key={stat.text}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="absolute -right-4 -bottom-4 text-4xl text-white/10 group-hover:text-white/20 transition-colors">
                    {stat.icon}
            </div>
                  <div className="text-3xl font-bold text-[#90cdf4]">{stat.number}</div>
                  <div className="text-sm">{stat.text}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="tel:01111111111"
                className="bg-white text-[#1a365d] hover:bg-[#90cdf4] px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="animate-pulse group-hover:rotate-12 transition-transform" />
                <span>01111111111</span>
              </motion.a>
              <motion.a
                href="https://wa.me/01111111111"
                className="bg-[#25D366] text-white hover:bg-[#128C7E] px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="group-hover:rotate-12 transition-transform" />
                <span>WhatsApp Chat</span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section with Image Previews */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#1a365d] text-white px-6 py-2 rounded-full mb-4">
              Unsere Dienstleistungen
            </span>
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
              Professionelle Lösungen für Ihre Probleme
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'schluesseldienst',
                desc: 'Türöffnung ohne Schäden, Schloss-Austausch & Einbruchschutz',
                image: '/images/hero/locksmith-hero.jpg'
              },
              {
                title: 'Rohrreinigung',
                desc: 'Verstopfungen beseitigen, Kamera-Inspektion & Hochdruck-Reinigung',
                image: '/images/hero/plumbing-hero.jpg'
              },
              {
                title: 'Sanitaer',
                desc: 'Installation, Reparatur & Wartung von Sanitäranlagen',
                image: '/images/hero/sanitary-hero.jpg'
              },
              {
                title: 'schaedlingsbekaempfung',
                desc: 'Professionelle & nachhaltige Schädlingsbekämpfung',
                image: '/images/services/pest-control/unrecognizable-person-white-chemical-protection-suit-doing-disinfection-public-areas-stop-spreading-highly-contagious-corona-virus.jpg'
              },
              {
                title: 'Elektro',
                desc: 'Störungsbehebung, Installationen & Sicherheitsprüfungen',
                image: '/images/services/electrical/electrician-builder-work-examines-cable-connection-electrical-line-fuselage-industrial-switchboard-professional-overalls-with-electrician-s-tool.jpg'
              },
              {
                title: 'Weitere Dienste',
                desc: 'Maßgeschneiderte Lösungen für Ihre Anforderungen',
                image: ''
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  {service.image ? (
                    <>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    </>
                  ) : (
                    <div className="h-full bg-[#1a365d] flex items-center justify-center">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  )}
                  {service.image && (
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    </div>
                  )}
                  </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <Link 
                    href={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#2563eb] hover:text-[#1a365d] font-medium flex items-center gap-2 group/link"
                  >
                    Mehr erfahren
                    <FaArrowRight className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators with Animated Stats */}
      <section className="py-20 bg-[#1a365d] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/locksmith-hero.jpg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d] to-[#2563eb] opacity-90" />
        <div className="container relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Warum Kunden uns vertrauen
            </h2>
            <p className="text-xl opacity-80">
              Über 5000+ zufriedene Kunden in der Region
            </p>
          </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
              {
                title: "Schneller Service",
                desc: "Innerhalb von 30 Minuten sind wir bei Ihnen vor Ort.",
                icon: <FaClock />,
                stat: "30 Min"
              },
              {
                title: "Faire Preise",
                desc: "Transparente Festpreise ohne versteckte Kosten.",
                icon: <FaShieldAlt />,
                stat: "100%"
              },
              {
                title: "Erfahrene Profis",
                desc: "Qualifizierte und zertifizierte Fachkräfte.",
                icon: <FaTools />,
                stat: "15+ Jahre"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl group hover:bg-white/20 transition-colors"
              >
                <motion.div 
                  className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-80 mb-4">{item.desc}</p>
                <div className="text-3xl font-bold text-[#90cdf4]">{item.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Profile Images */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#1a365d] text-white px-6 py-2 rounded-full mb-4">
              Kundenstimmen
                </span>
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
              Das sagen unsere Kunden
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Schneller und professioneller Service. In 20 Minuten war der Techniker da und hat das Problem gelöst.",
                author: "Thomas M.",
                location: "Paderborn",
                image: "/images/testimonials/person-1.jpg",
                service: "schluesseldienst"
              },
              {
                text: "Faire Preise und top Beratung. Der Handwerker hat sich Zeit genommen und alles erklärt.",
                author: "Sarah K.",
                location: "Delbrück",
                image: "/images/testimonials/person-2.jpg",
                service: "Sanitär"
              },
              {
                text: "Auch am Sonntag schnell zur Stelle und sehr kompetent. Absolut empfehlenswert!",
                author: "Michael B.",
                location: "Salzkotten",
                image: "/images/testimonials/person-3.jpg",
                service: "Elektro"
              }
            ].map((review, index) => (
              <motion.div
                key={review.author}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg group hover:shadow-2xl transition-all"
              >
                <div className="flex text-[#FFD700] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <FaStar />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{review.text}</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.image}
                      alt={review.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a365d]">{review.author}</div>
                    <div className="text-gray-500 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-sm" />
                      {review.location}
                    </div>
                    <div className="text-[#2563eb] text-sm">{review.service}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Video */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2563eb] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/videos/service-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <FaPhone className="text-[#1a365d] text-3xl animate-pulse" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-6">
              24/7 Notdienst - Wir sind für Sie da!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schnelle & professionelle Hilfe garantiert. Rufen Sie uns jetzt an!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:01111111111"
                className="bg-white text-[#1a365d] hover:bg-[#90cdf4] px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="animate-pulse group-hover:rotate-12 transition-transform" />
                <span>01111111111</span>
              </motion.a>
              <motion.a
                href="https://wa.me/01111111111"
                className="bg-[#25D366] text-white hover:bg-[#128C7E] px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="group-hover:rotate-12 transition-transform" />
                <span>WhatsApp Chat</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fixed Call Button with Pulse Effect */}
      <motion.a
        href="tel:01111111111"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-[#1a365d] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg md:hidden z-50"
      >
        <div className="absolute inset-0 bg-[#1a365d] rounded-full animate-ping opacity-25"></div>
        <FaPhone className="text-2xl animate-pulse" />
      </motion.a>
    </main>
  );
} 