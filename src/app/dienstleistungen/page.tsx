'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaKey, 
  FaWrench, 
  FaShower, 
  FaBug, 
  FaBolt, 
  FaTools,
  FaArrowRight
} from 'react-icons/fa';

const services = [
  {
    name: 'Schlüsseldienst',
    href: '/schluesseldienst',
    icon: <FaKey className="text-3xl md:text-4xl" />,
    description: '24/7 Türöffnung - Schlüsselnotdienst',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Rohrreinigung',
    href: '/rohrreinigung',
    icon: <FaWrench className="text-3xl md:text-4xl" />,
    description: 'Professionelle Rohrreinigung - Verstopfungen lösen',
    color: 'from-green-500 to-green-700'
  },
  {
    name: 'Sanitär',
    href: '/sanitaer',
    icon: <FaShower className="text-3xl md:text-4xl" />,
    description: 'Sanitärinstallation - Reparaturen',
    color: 'from-cyan-500 to-cyan-700'
  },
  {
    name: 'Schädlingsbekämpfung',
    href: '/schaedlingsbekaempfung',
    icon: <FaBug className="text-3xl md:text-4xl" />,
    description: 'Professionelle Schädlingsbekämpfung',
    color: 'from-red-500 to-red-700'
  },
  {
    name: 'Elektro',
    href: '/elektro',
    icon: <FaBolt className="text-3xl md:text-4xl" />,
    description: 'Elektriker - Elektroinstallationen',
    color: 'from-yellow-500 to-yellow-700'
  },
  {
    name: 'Entrümpelung',
    href: '/entruempelung',
    icon: <FaTools className="text-3xl md:text-4xl" />,
    description: 'Haushaltsauflösung - Entrümpelung',
    color: 'from-purple-500 to-purple-700'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export default function DienstleistungenPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2563eb] py-20 px-4">
        <div className="container mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Unsere Dienstleistungen
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Professionelle Handwerksleistungen rund um die Uhr verfügbar
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.href}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-h-[200px]"
              >
                <Link href={service.href}>
                  <div className={`bg-gradient-to-br ${service.color} rounded-xl p-4 h-full text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                    <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <div className="text-2xl">
                        {service.icon}
                      </div>
                    </div>
                    <h2 className="text-lg font-bold mb-2">{service.name}</h2>
                    <p className="text-sm text-white/90 mb-3 leading-snug">{service.description}</p>
                    <div className="flex items-center text-white/90 hover:text-white text-xs">
                      <span>Mehr erfahren</span>
                      <FaArrowRight className="ml-2 text-xs" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">
            Notfall? Wir sind 24/7 für Sie da!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Unsere Experten sind rund um die Uhr für Notfälle verfügbar. Kontaktieren Sie uns jetzt!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:017684536648"
              className="bg-[#1a365d] text-white px-8 py-4 rounded-full font-bold hover:bg-[#2563eb] transition-colors inline-flex items-center justify-center space-x-2"
            >
              <FaWrench className="text-xl" />
              <span>Jetzt anrufen</span>
            </a>
            <a
              href="https://wa.me/017684536648"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-colors inline-flex items-center justify-center space-x-2"
            >
              <FaWrench className="text-xl" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 