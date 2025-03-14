'use client';

import Image from 'next/image';
import { useState } from 'react';
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
  FaHandshake
} from 'react-icons/fa';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[400px] bg-[#003366] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/about-hero.jpg"
            alt="About Hero"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Ihr zuverlässiger Partner für Handwerksdienstleistungen
            </h1>
            <p className="text-xl opacity-90">
              Seit über 15 Jahren sind wir Ihr kompetenter Ansprechpartner für alle Handwerksdienstleistungen in Deutschland. 
              Qualität, Zuverlässigkeit und Kundenzufriedenheit stehen bei uns an erster Stelle.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaAward className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Höchste Qualität</h3>
              <p className="text-gray-600 text-center">
                Wir arbeiten ausschließlich mit qualifizierten Fachkräften und hochwertigen Materialien.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaCertificate className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Schneller Service</h3>
              <p className="text-gray-600 text-center">
                24/7 Notdienst und garantierte Reaktionszeiten für Ihre Sicherheit.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaHandshake className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Faire Preise</h3>
              <p className="text-gray-600 text-center">
                Transparente Festpreise ohne versteckte Kosten.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#003366] to-[#007BFF] rounded-xl p-12 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="opacity-90">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50.000+</div>
              <div className="opacity-90">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="opacity-90">Qualifizierte Mitarbeiter</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="opacity-90">Standorte in Deutschland</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
            Unser Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/testimonials/person1.jpg"
                  alt="Michael Weber"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Michael Weber</h3>
              <p className="text-[#007BFF]">Geschäftsführer</p>
            </div>
            <div className="text-center group">
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/testimonials/person2.jpg"
                  alt="Sarah Schmidt"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Schmidt</h3>
              <p className="text-[#007BFF]">Kundenservice Leiterin</p>
            </div>
            <div className="text-center group">
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/testimonials/person3.jpg"
                  alt="Thomas Müller"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Thomas Müller</h3>
              <p className="text-[#007BFF]">Technischer Leiter</p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
            Unsere Geschichte
          </h2>
          <div className="space-y-12">
            {[
              {
                year: '2000',
                title: 'Die Gründung',
                desc: 'Beginn als lokaler Schlüsseldienst mit dem Ziel, schnelle und faire Hilfe zu leisten.'
              },
              {
                year: '2010',
                title: 'Expansion der Services',
                desc: 'Erweiterung um Rohrreinigung, Sanitär und Elektro-Notdienst.'
              },
              {
                year: '2015',
                title: 'Deutschlandweite Präsenz',
                desc: 'Aufbau eines bundesweiten Netzwerks von qualifizierten Partnern.'
              },
              {
                year: '2025',
                title: 'Innovation & Digitalisierung',
                desc: 'Einführung modernster Technologien und Online-Buchungssysteme.'
              }
            ].map((milestone, index) => (
              <div key={index} className="flex items-center gap-8 group">
                <div className="w-32 h-32 flex-shrink-0 bg-[#003366] rounded-xl text-white flex flex-col items-center justify-center group-hover:bg-[#007BFF] transition-colors">
                  <div className="text-2xl font-bold">{milestone.year}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
            Unsere Einsatzgebiete
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                Wir sind deutschlandweit für Sie im Einsatz. Unsere Standorte garantieren 
                schnelle Hilfe in Ihrer Region.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt',
                  'Düsseldorf', 'Stuttgart', 'Leipzig'
                ].map((city) => (
                  <span 
                    key={city}
                    className="bg-[#003366] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#007BFF] transition-colors cursor-pointer"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/map.jpg"
                alt="Unsere Standorte"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#003366] rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bereit für professionelle Unterstützung?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Kontaktieren Sie uns noch heute für eine kostenlose Beratung
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="tel:0800123456789"
              className="bg-white text-[#003366] px-8 py-3 rounded-full font-semibold hover:bg-[#007BFF] hover:text-white transition-colors"
            >
              0800 - 123 456 789
            </a>
            <a 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#003366] transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 