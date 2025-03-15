import { Metadata } from 'next';
import { FaRecycle, FaHome, FaWarehouse, FaBuilding, FaClock, FaCheckCircle, FaLeaf, FaBroom, FaWhatsapp, FaPhone, FaShieldAlt, FaStar, FaTruck, FaHandshake } from 'react-icons/fa';
import ContactForm from '@/components/EntruempelungForm';

export const metadata: Metadata = {
  title: 'Professionelle Entrümpelung & Haushaltsauflösung | Schnell & Zuverlässig',
  description: 'Kompetente Entrümpelung von Wohnungen, Häusern & Gewerbe ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Umweltfreundliche Entsorgung',
  keywords: ['Entrümpelung', 'Haushaltsauflösung', 'Wohnungsentrümpelung', 'Kellerentrümpelung', 'Messie-Wohnungen', 'Sperrmüllentsorgung'],
};

export default function EntruempelungPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section mit Video/Animation Hintergrund */}
      <section className="relative min-h-[80vh] flex items-center bg-[#1a365d]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] to-[#2563eb]/90">
          <div className="absolute inset-0 bg-[url('/images/services/entruempelung-hero.jpg')] bg-cover bg-center opacity-20 animate-ken-burns" />
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#2563eb] text-white px-6 py-2 rounded-full mb-6 animate-bounce">
              24/7 Notdienst verfügbar
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professionelle Entrümpelung & <span className="text-[#60a5fa]">Haushaltsauflösung</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-semibold mb-8">
              Schnell ✓ Zuverlässig ✓ Fair ✓ Umweltfreundlich
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-[#60a5fa] text-4xl font-bold">15+</div>
                  <div className="text-white">Jahre Erfahrung</div>
                </div>
                <div className="text-center">
                  <div className="text-[#60a5fa] text-4xl font-bold">5000+</div>
                  <div className="text-white">Zufriedene Kunden</div>
                </div>
                <div className="text-center">
                  <div className="text-[#60a5fa] text-4xl font-bold">100%</div>
                  <div className="text-white">Festpreisgarantie</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:015735989735"
                className="group bg-[#2563eb] text-white hover:bg-white hover:text-[#2563eb] text-xl font-bold px-8 py-4 rounded-full inline-flex items-center space-x-3 transition-all shadow-xl w-full md:w-auto justify-center"
              >
                <FaPhone className="text-xl group-hover:animate-ping" />
                <span>Kostenlos anfragen</span>
              </a>
              <a 
                href="https://wa.me/4915735989735"
                className="group bg-green-600 text-white hover:bg-white hover:text-green-600 text-xl font-bold px-8 py-4 rounded-full inline-flex items-center space-x-3 transition-all shadow-xl w-full md:w-auto justify-center"
              >
                <FaWhatsapp className="text-xl group-hover:animate-bounce" />
                <span>WhatsApp Anfrage</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { 
                  icon: <FaShieldAlt className="text-3xl md:text-4xl" />, 
                  text: 'Versicherter Service',
                  desc: 'Vollständig abgesichert'
                },
                { 
                  icon: <FaStar className="text-3xl md:text-4xl" />, 
                  text: '5.0 Bewertung',
                  desc: 'Von unseren Kunden'
                },
                { 
                  icon: <FaTruck className="text-3xl md:text-4xl" />, 
                  text: 'Schnelle Ausführung',
                  desc: 'Termine nach Wunsch'
                },
                { 
                  icon: <FaHandshake className="text-3xl md:text-4xl" />, 
                  text: 'Faire Preise',
                  desc: 'Transparent & ehrlich'
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                >
                  <div className="bg-[#2563eb] w-16 h-16 flex items-center justify-center rounded-2xl mb-4 text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-[#1a365d] font-bold text-lg md:text-xl mb-2">
                    {item.text}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section mit verbesserten Karten */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-6">
              Professionelle Entrümpelung mit Festpreisgarantie
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Als erfahrener Entrümpelungs-Spezialist bieten wir Ihnen einen Rundum-Sorglos-Service. 
              Von der kostenlosen Erstbesichtigung bis zur besenreinen Übergabe - wir kümmern uns um alles!
            </p>
            <div className="bg-[#f8fafc] rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Unsere Qualitätsversprechen:</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-left">
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-[#2563eb] flex-shrink-0" />
                  <span>Kostenlose Vor-Ort-Besichtigung</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-[#2563eb] flex-shrink-0" />
                  <span>Festpreisgarantie ohne versteckte Kosten</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-[#2563eb] flex-shrink-0" />
                  <span>Termingarantie & pünktliche Ausführung</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-[#2563eb] flex-shrink-0" />
                  <span>Zertifizierte & geschulte Mitarbeiter</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaHome />,
                title: 'Wohnungsentrümpelung',
                desc: 'Professionelle Kompletträumung von Wohnungen jeder Größe. Vom einzelnen Zimmer bis zur kompletten Etage - schnell, zuverlässig und diskret.',
                features: [
                  'Kostenlose Besichtigung vor Ort',
                  'Festpreisgarantie schriftlich',
                  'Besenreine Übergabe garantiert',
                  'Wertanrechnung möglich'
                ]
              },
              {
                icon: <FaWarehouse />,
                title: 'Keller & Dachboden',
                desc: 'Fachmännische Entrümpelung schwer zugänglicher Bereiche. Wir räumen, sortieren und entsorgen auch sperrige Gegenstände fachgerecht.',
                features: [
                  'Komplette Räumung garantiert',
                  'Sichere Entsorgung nach Vorschrift',
                  'Recycling & Wiederverwertung',
                  'Auch bei schwierigem Zugang'
                ]
              },
              {
                icon: <FaBuilding />,
                title: 'Haushaltsauflösung',
                desc: 'Sensible und pietätvolle Haushaltsauflösung, besonders nach Todesfällen. Wir kümmern uns um alle Formalitäten und die komplette Abwicklung.',
                features: [
                  'Diskrete & pietätvolle Abwicklung',
                  'Wertgegenstände-Anrechnung',
                  'Kompletter Rundumservice',
                  'Rechtssichere Entsorgung'
                ]
              },
              {
                icon: <FaRecycle />,
                title: 'Gewerberäumung',
                desc: 'Professionelle Räumung von Geschäfts- und Büroräumen. Termine auch am Wochenende möglich, damit Ihr Betrieb weiterlaufen kann.',
                features: [
                  'Termingerechte Ausführung',
                  'Auch nachts & am Wochenende',
                  'Zertifizierte Entsorgung',
                  'Inventarlisten möglich'
                ]
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white border-2 border-[#e2e8f0] rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:border-[#2563eb] hover:scale-105">
                <div className="bg-[#2563eb] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-3 text-left">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <FaCheckCircle className="text-[#2563eb] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - NEU */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#1a365d] text-center mb-16">
            Unser Prozess - Einfach & Transparent
          </h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#2563eb] transform -translate-y-1/2 hidden md:block"></div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '01', title: 'Anfrage', desc: 'Kontaktieren Sie uns - telefonisch oder online' },
                { number: '02', title: 'Besichtigung', desc: 'Kostenlose Vor-Ort-Besichtigung' },
                { number: '03', title: 'Angebot', desc: 'Transparentes Festpreisangebot' },
                { number: '04', title: 'Ausführung', desc: 'Professionelle & schnelle Durchführung' }
              ].map((step, index) => (
                <div key={index} className="relative bg-white rounded-xl p-6 shadow-lg">
                  <div className="bg-[#2563eb] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services mit verbessertem Layout */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-6">
              Spezialleistungen & Zusatzservices
            </h2>
            <p className="text-xl text-gray-600">
              Wir bieten Ihnen maßgeschneiderte Lösungen für jede Situation. Unser erfahrenes Team kümmert sich auch um besondere Herausforderungen professionell und zuverlässig.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Messie-Wohnungen reinigen & räumen',
                desc: 'Diskrete und gründliche Reinigung mit speziell geschultem Personal und professioneller Desinfektion'
              },
              {
                title: 'Sperrmüll & Umweltentsorgung',
                desc: 'Fachgerechte Entsorgung nach aktuellen Umweltstandards mit Recycling und Wertstofftrennung'
              },
              {
                title: 'Entrümpelung nach Schäden',
                desc: 'Schnelle Hilfe nach Wasserschäden oder Bränden, inklusive Koordination mit Versicherungen'
              },
              {
                title: 'Demontage & Abbau',
                desc: 'Professioneller Abbau von Möbeln, Küchen und Einbauten durch erfahrene Handwerker'
              },
              {
                title: 'Verwertung & Spende',
                desc: 'Nachhaltige Weitergabe brauchbarer Gegenstände an soziale Einrichtungen'
              },
              {
                title: 'Endreinigung & Übergabe',
                desc: 'Gründliche Reinigung aller Räume für eine einwandfreie Übergabe'
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#2563eb]/10 p-3 rounded-full group-hover:bg-[#2563eb] transition-colors">
                    <FaCheckCircle className="text-[#2563eb] text-xl group-hover:text-white" />
                  </div>
                  <h3 className="text-[#1a365d] font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 pl-14">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section mit Animation */}
      <section className="py-20 bg-[#1a365d] text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Ihre Vorteile bei uns im Überblick
            </h2>
            <p className="text-xl text-gray-300">
              Profitieren Sie von unserem Rundum-Sorglos-Service. Wir garantieren Ihnen eine professionelle, 
              schnelle und umweltgerechte Entrümpelung zu fairen Festpreisen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <FaClock />,
                title: 'Express-Service verfügbar',
                desc: 'Besichtigung innerhalb von 24 Stunden möglich. Bei Notfällen auch am selben Tag.',
                features: ['Schnelle Terminvergabe', 'Flexible Zeitplanung', 'Pünktliche Ausführung']
              },
              {
                icon: <FaLeaf />,
                title: 'Nachhaltige Entsorgung',
                desc: 'Umweltgerechte Entsorgung aller Materialien mit maximaler Recyclingquote und Wertstofftrennung.',
                features: ['Zertifizierte Entsorgung', 'Wertstofftrennung', 'Recycling-Garantie']
              },
              {
                icon: <FaBroom />,
                title: 'Professionelle Übergabe',
                desc: 'Garantiert besenreine Übergabe aller Räumlichkeiten inklusive Dokumentation.',
                features: ['Besenreine Übergabe', 'Abnahmeprotokoll', 'Fotodokumentation']
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300 mb-6">{benefit.desc}</p>
                <ul className="space-y-2 text-left">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <FaCheckCircle className="text-[#60a5fa] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section mit verbessertem Layout */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
                Kostenlose Anfrage stellen
              </h2>
              <p className="text-xl text-gray-600">
                Erhalten Sie ein unverbindliches Angebot für Ihre Entrümpelung
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Contact Buttons mit verbesserten Hover-Effekten */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 md:hidden">
        <a
          href="https://wa.me/4915735989735"
          className="bg-green-600 text-white p-6 rounded-full shadow-2xl hover:bg-white hover:text-green-600 transition-all transform hover:scale-110"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
        <a
          href="tel:015735989735"
          className="bg-[#2563eb] text-white p-6 rounded-full shadow-2xl hover:bg-white hover:text-[#2563eb] transition-all transform hover:scale-110"
        >
          <FaPhone className="text-3xl" />
        </a>
      </div>
    </main>
  );
} 