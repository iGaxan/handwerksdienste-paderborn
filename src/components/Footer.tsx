'use client';

import Link from 'next/link';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Kontakt */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#60a5fa]" />
                <span>015735989735</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#60a5fa]" />
                <span>kontakt@service.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#60a5fa]" />
                <span>Musterstr. 123, Berlin</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="text-[#60a5fa]" />
                <span>24/7 Notdienst</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/landing" className="hover:text-[#60a5fa] transition-colors">
                  Handwerksdienste Paderborn
                </Link>
              </li>
              <li>
                <Link href="/schluesseldienst" className="hover:text-[#60a5fa] transition-colors">
                  Schlüsseldienst
                </Link>
              </li>
              <li>
                <Link href="/rohrreinigung" className="hover:text-[#60a5fa] transition-colors">
                  Rohrreinigung
                </Link>
              </li>
              <li>
                <Link href="/sanitaer" className="hover:text-[#60a5fa] transition-colors">
                  Sanitär & Heizung
                </Link>
              </li>
              <li>
                <Link href="/schaedlingsbekaempfung" className="hover:text-[#60a5fa] transition-colors">
                  Schädlingsbekämpfung
                </Link>
              </li>
              <li>
                <Link href="/elektro" className="hover:text-[#60a5fa] transition-colors">
                  Elektro-Notdienst
                </Link>
              </li>
            </ul>
          </div>

          {/* Einsatzgebiete */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Einsatzgebiete</h3>
            <div className="flex flex-wrap gap-2">
              {['Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt', 'Düsseldorf'].map((city) => (
                <span 
                  key={city}
                  className="bg-[#2563eb] px-3 py-1 rounded-full text-sm hover:bg-[#1d4ed8] transition-colors cursor-default"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Folgen Sie uns</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-[#60a5fa] hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-[#60a5fa] hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-[#60a5fa] hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
            <a 
              href="tel:015735989735"
              className="bg-[#2563eb] text-white hover:bg-[#1d4ed8] px-6 py-3 rounded-full inline-flex items-center space-x-2 transition-colors"
            >
              <FaPhone />
              <span>Jetzt anrufen</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2563eb]/20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2025 24/7 Service. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/impressum" className="text-gray-300 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-300 hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-gray-300 hover:text-white transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 