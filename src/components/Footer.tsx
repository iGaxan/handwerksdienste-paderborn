'use client';

import Link from 'next/link';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';
import cities from '@/data/cities.json';

const services = [
  { name: 'Schlüsseldienst', href: 'schluesseldienst' },
  { name: 'Rohrreinigung', href: 'rohrreinigung' },
  { name: 'Sanitär', href: 'sanitaer' },
  { name: 'Schädlingsbekämpfung', href: 'schaedlingsbekaempfung' },
  { name: 'Elektro', href: 'elektro' },
  { name: 'Entrümpelung', href: 'entruempelung' }
];

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:015735989735" className="hover:text-[#60a5fa]">
                  015735989735
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@example.com" className="hover:text-[#60a5fa]">
                  info@example.com
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Hauptstraße 1, 33098 Paderborn</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={`/${service.href}`} className="hover:text-[#60a5fa]">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicegebiete nach Regionen */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Servicegebiete</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {cities.regions.map((region) => (
                <div key={region.name}>
                  <h4 className="font-bold text-[#60a5fa] mb-2">{region.name}</h4>
                  <ul className="space-y-1">
                    {region.cities.map((city) => (
                      <li key={city}>
                        <Link 
                          href={`/${city.toLowerCase().replace(/\s+/g, '-').replace(/ü/g, 'ue').replace(/ö/g, 'oe').replace(/ä/g, 'ae').replace(/ß/g, 'ss')}`}
                          className="text-sm hover:text-[#60a5fa]"
                        >
                          {city}
                        </Link>
                        <ul className="ml-3 mt-1 space-y-1">
                          {services.map((service) => (
                            <li key={`${city}-${service.href}`}>
                              <Link 
                                href={`/${city.toLowerCase().replace(/\s+/g, '-').replace(/ü/g, 'ue').replace(/ö/g, 'oe').replace(/ä/g, 'ae').replace(/ß/g, 'ss')}/${service.href}`}
                                className="text-xs text-gray-300 hover:text-[#60a5fa]"
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright & Social Media */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300">
              © {new Date().getFullYear()} Alle Rechte vorbehalten
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/impressum" className="text-sm text-gray-300 hover:text-[#60a5fa]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-sm text-gray-300 hover:text-[#60a5fa]">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-sm text-gray-300 hover:text-[#60a5fa]">
                AGB
              </Link>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#60a5fa]">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-[#60a5fa]">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 