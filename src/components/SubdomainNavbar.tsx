'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FaHome, 
  FaTools, 
  FaInfoCircle, 
  FaPhone, 
  FaEnvelope,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaChevronDown
} from 'react-icons/fa';

const navItems = [
  { name: 'Leistungen', href: '#leistungen', icon: <FaTools className="text-xl" /> },
  { name: 'Vorteile', href: '#vorteile', icon: <FaInfoCircle className="text-xl" /> },
  { name: 'Preise', href: '#preise', icon: <FaHome className="text-xl" /> },
  { name: 'Kontakt', href: '#kontakt', icon: <FaEnvelope className="text-xl" /> },
];

export default function SubdomainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50">
      {/* Emergency Contact Top Bar - Always Visible */}
      <div className="bg-white text-[#1a4d80] py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-4">
            <FaMapMarkerAlt className="text-xl" />
            <span className="text-base">Ihr Notdienst in der Region</span>
          </div>
          <a 
            href="tel:017684536648"
            className="flex items-center space-x-3 text-[#1a4d80] hover:text-[#007BFF] transition-colors font-bold ml-auto md:ml-0"
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
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center">
              <Image
                src="/images/Experten.svg"
                alt="Experten Logo"
                width={180}
                height={45}
                priority
                className="w-auto h-[45px]"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="flex items-center space-x-2 text-white hover:text-[#007BFF] transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                ))}

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
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, '#hero')} 
            className="flex items-center"
          >
            <span className="text-2xl font-bold text-white">
              Notdienst
            </span>
          </a>
          <button
            className="text-3xl text-white p-2"
            onClick={() => setIsOpen(false)}
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="flex items-center space-x-3 text-white text-lg"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 