'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  FaPhone, 
  FaKey, 
  FaShower, 
  FaWrench, 
  FaBug, 
  FaBolt, 
  FaCheck, 
  FaArrowRight,
  FaClock,
  FaTools,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaStar,
  FaEnvelope,
  FaBuilding
} from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-[#1a365d]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] to-[#2563eb]/90">
          <Image
            src="/images/hero/locksmith-hero.jpg"
            alt="24/7 Notdienst"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ihr Experte für schnelle & zuverlässige Dienstleistungen!
            </h1>
            <div className="text-xl md:text-2xl text-[#60a5fa] font-semibold mb-6 flex flex-wrap justify-center gap-4">
              <span>Schlüsseldienst</span>
              <span>|</span>
              <span>Rohrreinigung</span>
              <span>|</span>
              <span>Sanitär</span>
              <span>|</span>
              <span>Schädlingsbekämpfung</span>
              <span>|</span>
              <span>Elektro</span>
            </div>
            <h2 className="text-2xl md:text-4xl text-white font-bold mb-12">
              24/7 Notdienst – In 30 Minuten vor Ort!
            </h2>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:01111111111"
                className="bg-[#2563eb] text-white hover:bg-[#1d4ed8] text-xl font-bold px-8 py-4 rounded-full inline-flex items-center space-x-3 transition-all shadow-xl"
              >
                <FaPhone className="text-xl" />
                <span>Jetzt anrufen: 01111111111</span>
              </a>
              <Link 
                href="/kontakt"
                className="bg-white text-[#1a365d] hover:bg-[#1a365d] hover:text-white text-xl font-bold px-8 py-4 rounded-full inline-flex items-center space-x-3 transition-all shadow-xl"
              >
                <span>Soforthilfe anfordern</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dienstleistungen */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
              Unsere Dienstleistungen
            </h2>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaKey />,
                title: 'Schlüsseldienst – 24/7 Soforthilfe',
                desc: 'Zugefallene Tür? Schlüssel verloren? Wir sind rund um die Uhr für Sie da – schnell & beschädigungsfrei.'
              },
              {
                icon: <FaShower />,
                title: 'Rohrreinigung – Verstopfungen beseitigen',
                desc: 'Ob verstopfte Toilette, Waschbecken oder Abflussrohre – wir lösen jedes Problem fachgerecht.'
              },
              {
                icon: <FaWrench />,
                title: 'Sanitär & Heizung – Installation & Reparatur',
                desc: 'Von der Badmodernisierung bis zur Notfallreparatur – wir sind Ihr zuverlässiger Partner für Sanitärtechnik.'
              },
              {
                icon: <FaBug />,
                title: 'Schädlingsbekämpfung – Effektiv & nachhaltig',
                desc: 'Ob Ratten, Kakerlaken oder Wespen – unsere Experten entfernen Schädlinge diskret & umweltfreundlich.'
              },
              {
                icon: <FaBolt />,
                title: 'Elektro-Notdienst – Störungen & Installationen',
                desc: 'Schnelle Hilfe bei Stromausfällen, Kurzschlüssen & Elektroinstallationen für Privathaushalte & Unternehmen.'
              }
            ].map((service) => (
              <div key={service.title} className="group">
                <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:border-[#2563eb]">
                  <div className="bg-[#2563eb] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <Link 
                    href={`/services/${service.title.split(' ')[0].toLowerCase()}`}
                    className="text-[#2563eb] hover:text-[#1d4ed8] font-semibold inline-flex items-center space-x-2"
                  >
                    <span>Mehr erfahren</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Warum Uns */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-12">
              Warum Sie uns wählen sollten?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Wir sind Ihr zuverlässiger Partner für alle handwerklichen Dienstleistungen – kompetent, schnell & fair.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <FaClock />, title: 'Schnell vor Ort', desc: 'In nur 30 Minuten bei Ihnen' },
                { icon: <FaTools />, title: 'Faire Preise', desc: 'Keine versteckten Kosten' },
                { icon: <FaShieldAlt />, title: 'Erfahrene Fachkräfte', desc: 'Geprüfte & zertifizierte Techniker' },
              ].map((feature) => (
                <div key={feature.title} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-[#2563eb] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Einsatzgebiete */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-8">
              Unsere Einsatzgebiete
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Wir sind deutschlandweit für Sie im Einsatz – mit regionalen Standorten in:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt', 'Düsseldorf', 'Stuttgart', 'Leipzig'].map((city) => (
                <span key={city} className="bg-[#2563eb] text-white px-4 py-2 rounded-full">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-xl font-semibold text-[#1a365d]">
              Ihr Standort nicht dabei? Rufen Sie uns an – wir helfen deutschlandweit!
            </p>
          </div>
        </div>
      </section>

      {/* 5. Kundenmeinungen */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center text-[#2563eb] text-3xl mb-4">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
              Das sagen unsere Kunden
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: 'Super Service! Der Techniker war in 20 Minuten da und hat meine Tür in Sekunden geöffnet – ohne Schäden!',
                location: 'Berlin'
              },
              {
                text: 'Schnelle Rohrreinigung! Mein Waschbecken war verstopft – innerhalb von 30 Minuten lief alles wieder perfekt.',
                location: 'München'
              },
              {
                text: 'Zuverlässig & fair! Der Elektriker hat mein Problem schnell gelöst und alles super erklärt. Sehr empfehlenswert!',
                location: 'Frankfurt'
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-[#2563eb] text-xl mb-4">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <div className="flex items-center text-[#1a365d]">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>Kunde aus {review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Kontakt & CTA */}
      <section className="py-20 bg-[#1a365d] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Schnelle Hilfe – Jetzt Kontakt aufnehmen!
            </h2>
            <p className="text-xl mb-12">
              Haben Sie eine dringende Anfrage oder möchten Sie mehr über unsere Dienstleistungen erfahren?
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3">
                <FaPhone className="text-2xl text-[#60a5fa]" />
                <div className="text-left">
                  <div className="font-bold">Notfallnummer</div>
                  <div>01111111111</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaEnvelope className="text-2xl text-[#60a5fa]" />
                <div className="text-left">
                  <div className="font-bold">E-Mail</div>
                  <div>kontakt@service.de</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaBuilding className="text-2xl text-[#60a5fa]" />
                <div className="text-left">
                  <div className="font-bold">Standort</div>
                  <div>Musterstr. 123, Berlin</div>
                </div>
              </div>
            </div>

            <Link 
              href="/kontakt"
              className="bg-[#2563eb] text-white hover:bg-[#1d4ed8] text-xl font-bold px-12 py-6 rounded-full inline-flex items-center space-x-3 transition-all shadow-xl"
            >
              <span>Kontaktformular öffnen</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Call Button */}
      <a
        href="tel:01111111111"
        className="fixed bottom-8 right-8 md:hidden bg-[#2563eb] text-white p-6 rounded-full shadow-2xl hover:bg-[#1d4ed8] transition-all z-50 animate-bounce"
      >
        <FaPhone className="text-3xl" />
      </a>
    </main>
  );
} 