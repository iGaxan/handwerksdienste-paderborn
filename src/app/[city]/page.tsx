'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { FaKey, FaWrench, FaBath, FaBug, FaBolt, FaPhoneAlt, FaStar, FaClock, FaCheck } from 'react-icons/fa';

interface Props {
  params: {
    city: string;
  };
}

export default function CityPage({ params }: Props) {
  const city = decodeURIComponent(params.city);
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);

  const services = [
    {
      title: 'Schlüsseldienst',
      description: '24/7 Türöffnung zum Festpreis in ' + formattedCity,
      icon: FaKey,
      href: '/schluesseldienst',
      image: '/images/services/locksmith.jpg'
    },
    {
      title: 'Rohrreinigung',
      description: 'Professionelle Rohrreinigung in ' + formattedCity,
      icon: FaWrench,
      href: '/rohrreinigung',
      image: '/images/services/plumbing.jpg'
    },
    {
      title: 'Sanitär',
      description: 'Kompetente Sanitärinstallation in ' + formattedCity,
      icon: FaBath,
      href: '/sanitaer',
      image: '/images/services/sanitary.jpg'
    },
    {
      title: 'Schädlingsbekämpfung',
      description: 'Effektive Schädlingsbekämpfung in ' + formattedCity,
      icon: FaBug,
      href: '/schaedlingsbekaempfung',
      image: '/images/services/pest-control.jpg'
    },
    {
      title: 'Elektro',
      description: 'Professionelle Elektriker in ' + formattedCity,
      icon: FaBolt,
      href: '/elektro',
      image: '/images/services/electrical.jpg'
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24">
                      <motion.h1
                        {...fadeIn}
                        className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                      >
                        <span className="block">Handwerker in</span>
                        <span className="block text-primary">{formattedCity}</span>
                      </motion.h1>
                      <motion.p
                        {...fadeIn}
                        className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl"
                      >
                        Ihr zuverlässiger Partner für professionelle Handwerksleistungen in {formattedCity}. 24/7 Notdienst zum Festpreis.
                      </motion.p>
                      <motion.div
                        {...fadeIn}
                        className="mt-10 sm:mt-12"
                      >
                        <div className="sm:flex sm:justify-center lg:justify-start">
                          <div className="rounded-md shadow">
                            <a
                              href="tel:0800123456789"
                              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
                            >
                              <FaPhoneAlt className="mr-2" />
                              0800 123456789
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">Unsere Dienstleistungen in {formattedCity}</h2>
            <p className="mt-4 text-xl text-gray-600">
              Professionelle Handwerksleistungen rund um die Uhr
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center text-primary"
                  >
                    Mehr erfahren
                    <motion.svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ x: 0 }}
                      animate={{ x: 3 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </Link>
                </div>
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
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
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">Ihre Vorteile in {formattedCity}</h2>
            <p className="mt-4 text-xl text-gray-600">
              Warum Sie sich für unseren Service entscheiden sollten
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: '24/7 Verfügbarkeit', description: 'Rund um die Uhr für Sie da', icon: FaClock },
              { title: 'Festpreisgarantie', description: 'Transparente Preise ohne versteckte Kosten', icon: FaCheck },
              { title: 'Schneller Service', description: 'In 10-40 Minuten vor Ort', icon: FaBolt },
              { title: 'Top Bewertungen', description: '4.8/5 Sterne bei Google', icon: FaStar }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mx-auto mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">Unser Servicegebiet in {formattedCity}</h2>
            <p className="mt-4 text-xl text-gray-600">
              Wir sind in allen Stadtteilen von {formattedCity} für Sie im Einsatz
            </p>
          </motion.div>

          <div className="mt-12">
            <div className="prose prose-lg mx-auto text-center text-gray-500">
              <p>
                Unser Team ist in ganz {formattedCity} und Umgebung für Sie im Einsatz. 
                Egal ob Innenstadt oder Außenbezirke - wir sind schnell bei Ihnen vor Ort.
              </p>
              <p className="mt-4">
                Rufen Sie uns an und nennen Sie uns Ihren Standort in {formattedCity}. 
                Wir schicken umgehend einen qualifizierten Handwerker zu Ihnen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">Kundenstimmen aus {formattedCity}</h2>
            <p className="mt-4 text-xl text-gray-600">
              Was unsere Kunden über uns sagen
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Lisa M. aus ' + formattedCity,
                text: 'Super schneller Service! Der Handwerker war innerhalb von 20 Minuten da und hat das Problem professionell gelöst.',
                rating: 5
              },
              {
                name: 'Peter K. aus ' + formattedCity,
                text: 'Faire Preise und top Qualität. Die Handwerker waren sehr freundlich und kompetent. Klare Empfehlung!',
                rating: 5
              },
              {
                name: 'Sandra B. aus ' + formattedCity,
                text: 'Endlich ein zuverlässiger Handwerkerservice! Pünktlich, sauber und professionell. Immer wieder gerne!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="mt-4">
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="px-6 py-12 md:p-12 text-center md:text-left">
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Handwerker in {formattedCity} benötigt?
                  </h2>
                  <p className="mt-4 text-lg text-white/90">
                    Unsere Experten sind rund um die Uhr für Sie da. Rufen Sie uns jetzt an!
                  </p>
                </div>
                <div className="mt-8 md:mt-0">
                  <div className="flex justify-center md:justify-end space-x-4">
                    <motion.a
                      href="tel:0800123456789"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:text-lg"
                    >
                      <FaPhoneAlt className="mr-2" />
                      0800 123456789
                    </motion.a>
                    <motion.a
                      href="/kontakt"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-dark hover:bg-primary-darker md:text-lg"
                    >
                      Kontakt
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
} 