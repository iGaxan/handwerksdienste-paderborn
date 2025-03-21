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

const links = [
  { name: 'Home', href: '/' },
  { name: 'Über uns', href: '/about' },
  { name: 'Kontakt', href: '/contact' },
  { name: 'Servicegebiete', href: '/servicegebiete' },
];

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
                <a href="tel:017684536648" className="hover:text-[#60a5fa]">
                  017684536648
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

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#60a5fa]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Öffnungszeiten */}
          <div>
            <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaClock className="mr-2" />
                <span>24/7 Notdienst</span>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#60a5fa]" aria-label="Facebook">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" className="hover:text-[#60a5fa]" aria-label="Instagram">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="hover:text-[#60a5fa]" aria-label="LinkedIn">
                  <FaLinkedin className="text-2xl" />
                </a>
                <a href="https://wa.me/017684536648" className="hover:text-[#60a5fa]" aria-label="WhatsApp">
                  <FaWhatsapp className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Notdienst. Alle Rechte vorbehalten.</p>
            <p className="mt-2">
              Website erstellt von{' '}
              <a 
                href="https://antrieb2punkt0.de/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#60a5fa] transition-colors"
              >
                Antrieb 2.0 UG
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 