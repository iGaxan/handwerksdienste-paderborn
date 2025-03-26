'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaBuilding } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Schlüsseldienst',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[300px] bg-[#003366] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/contact-hero.jpg"
            alt="Contact Hero"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Kontaktieren Sie uns</h1>
            <p className="text-xl max-w-2xl">
              Wir sind 24/7 für Sie erreichbar. Nutzen Sie unser Kontaktformular oder rufen Sie uns direkt an.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Emergency Contact Banner */}
        <div className="bg-gradient-to-r from-[#003366] to-[#007BFF] p-8 rounded-xl shadow-lg mb-12 text-white">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">24/7 Notdienst Hotline</h2>
              <p className="text-lg opacity-90">Kostenlose Beratung & schnelle Hilfe</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-3xl animate-bounce" />
              <a href="tel:0800123456789" className="text-3xl font-bold hover:text-yellow-300 transition-colors">
                0800 - 123 456 789
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-[#003366] mb-6">Schreiben Sie uns</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                  >
                    <option>Schlüsseldienst</option>
                    <option>Rohrreinigung</option>
                    <option>Sanitär</option>
                    <option>Schädlingsbekämpfung</option>
                    <option>Elektro</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#003366] text-white py-3 px-6 rounded-lg hover:bg-[#007BFF] transition-colors duration-300 font-semibold text-lg"
              >
                Nachricht senden
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold">E-Mail</h3>
                </div>
                <a href="mailto:info@expertevorort.de" className="text-[#007BFF] hover:underline">
                  info@expertevorort.de
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold">Öffnungszeiten</h3>
                </div>
                <p className="text-gray-600">Mo-Fr: 08:00 - 18:00</p>
                <p className="text-gray-600">Sa: 09:00 - 14:00</p>
                <p className="font-semibold text-[#007BFF]">Notdienst: 24/7</p>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center">
                  <FaBuilding className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-semibold">Unsere Standorte</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Berlin (Hauptsitz)</h4>
                  <div className="flex items-start gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-[#007BFF] mt-1" />
                    <p>
                      Berliner Straße 123<br />
                      10115 Berlin
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Hamburg</h4>
                  <div className="flex items-start gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-[#007BFF] mt-1" />
                    <p>
                      Hamburger Straße 456<br />
                      20095 Hamburg
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">München</h4>
                  <div className="flex items-start gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-[#007BFF] mt-1" />
                    <p>
                      Münchener Straße 789<br />
                      80331 München
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Köln</h4>
                  <div className="flex items-start gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-[#007BFF] mt-1" />
                    <p>
                      Kölner Straße 321<br />
                      50667 Köln
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/map.jpg"
                alt="Standorte Karte"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-semibold">
                  Deutschlandweit für Sie im Einsatz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 