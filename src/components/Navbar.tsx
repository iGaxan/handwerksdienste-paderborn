'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaHome, 
  FaTools, 
  FaInfoCircle, 
  FaPhone, 
  FaEnvelope,
  FaBars,
  FaTimes,
  FaKey,
  FaShower,
  FaWrench,
  FaBug,
  FaBolt,
  FaChevronDown,
  FaWhatsapp,
  FaMapMarkerAlt
} from 'react-icons/fa';

const mainServices = [
  { name: 'Schlüsseldienst', href: '/schluesseldienst', icon: <FaKey className="text-xl" /> },
  { name: 'Rohrreinigung', href: '/rohrreinigung', icon: <FaWrench className="text-xl" /> },
  { name: 'Sanitär', href: '/sanitaer', icon: <FaShower className="text-xl" /> },
  { name: 'Schädlingsbekämpfung', href: '/schaedlingsbekaempfung', icon: <FaBug className="text-xl" /> },
  { name: 'Elektro', href: '/elektro', icon: <FaBolt className="text-xl" /> },
  { name: 'Entrümpelung', href: '/entruempelung', icon: <FaTools className="text-xl" /> }
];

const cities = [
  'Bielefeld', 'Gütersloh', 'Herford', 'Minden', 'Detmold'
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50">
      {/* Emergency Contact Top Bar - Always Visible */}
      <div className="bg-[#003366] text-white py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-4">
            <FaMapMarkerAlt className="text-xl" />
            <span className="text-base">Ihr Notdienst in der Region</span>
          </div>
          <a 
            href="tel:017684536648"
            className="flex items-center space-x-3 text-white hover:text-[#007BFF] transition-colors font-bold ml-auto md:ml-0"
          >
            <FaPhone className="text-xl animate-pulse" />
            <span className="text-base">24/7 Notdienst: 017684536648</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#003366] w-full">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                Notdienst
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-6">
                <Link 
                  href="/" 
                  className="flex items-center space-x-2 text-white hover:text-[#007BFF] transition-colors"
                >
                  <FaHome className="text-xl" />
                  <span>Home</span>
                </Link>

                {/* Services Dropdown */}
                <div className="relative group">
                  <button 
                    className="flex items-center space-x-2 text-white hover:text-[#007BFF] transition-colors"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <FaTools className="text-xl" />
                    <span>Dienstleistungen</span>
                    <FaChevronDown className="text-sm ml-1" />
                  </button>

                  <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${servicesOpen ? 'block' : 'hidden'}`}>
                    {mainServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center space-x-3 px-6 py-4 hover:bg-[#003366] hover:text-white text-[#003366] transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-gray-100 last:border-b-0"
                      >
                        {service.icon}
                        <span className="font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/about" 
                  className="flex items-center space-x-2 text-white hover:text-[#007BFF] transition-colors"
                >
                  <FaInfoCircle className="text-xl" />
                  <span>Über uns</span>
                </Link>

                <Link 
                  href="/contact" 
                  className="flex items-center space-x-2 text-white hover:text-[#007BFF] transition-colors"
                >
                  <FaEnvelope className="text-xl" />
                  <span>Kontakt</span>
                </Link>

                <a 
                  href="https://wa.me/017684536648" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#1a4d80] text-white px-5 py-2 rounded-full flex items-center space-x-2 hover:bg-[#007BFF] transition-colors shadow-lg ml-6"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-3xl text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#003366] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <span className="text-2xl font-bold text-white">
              Notdienst
            </span>
          </Link>
          <button
            className="text-3xl text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="h-full overflow-y-auto pb-20">
          {/* Emergency Contact */}
          <a 
            href="tel:017684536648"
            className="flex items-center justify-between p-4 bg-[#1a4d80] text-white"
          >
            <div className="flex items-center space-x-3">
              <FaPhone className="text-xl animate-pulse" />
              <span className="font-bold">24/7 Notdienst</span>
            </div>
            <span className="text-sm">017684536648</span>
          </a>

          {/* Navigation Links */}
          <div className="p-4 space-y-6">
            {/* Home */}
            <Link
              href="/"
              className="flex items-center space-x-3 text-white text-lg"
              onClick={() => setIsOpen(false)}
            >
              <FaHome className="text-xl" />
              <span>Home</span>
            </Link>

            {/* Services Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white text-lg">
                <FaTools className="text-xl" />
                <span>Dienstleistungen</span>
              </div>
              <div className="grid grid-cols-2 gap-4 pl-8">
                {mainServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex flex-col items-center p-4 bg-white/5 rounded-lg text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="bg-white/10 p-3 rounded-full mb-2">
                      {service.icon}
                    </div>
                    <span className="text-sm text-center">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* About */}
            <Link
              href="/about"
              className="flex items-center space-x-3 text-white text-lg"
              onClick={() => setIsOpen(false)}
            >
              <FaInfoCircle className="text-xl" />
              <span>Über uns</span>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="flex items-center space-x-3 text-white text-lg"
              onClick={() => setIsOpen(false)}
            >
              <FaEnvelope className="text-xl" />
              <span>Kontakt</span>
            </Link>
          </div>

          {/* Bottom Actions */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#003366] border-t border-white/10">
            <div className="flex gap-4">
              <a 
                href="tel:017684536648"
                className="flex-1 bg-[#1a4d80] text-white px-4 py-3 rounded-full flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <FaPhone className="text-xl" />
                <span>Anrufen</span>
              </a>
              <a 
                href="https://wa.me/017684536648"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white px-4 py-3 rounded-full flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 