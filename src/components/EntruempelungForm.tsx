'use client';

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function EntruempelungForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    type: '',
    size: '',
    details: '',
    date: '',
    phone: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Hier kommt später die Formular-Verarbeitung
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ihr vollständiger Name"
          />
        </div>

        {/* Adresse */}
        <div>
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
            Adresse
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Straße, Hausnummer, PLZ, Ort"
          />
        </div>

        {/* Art der Entrümpelung */}
        <div>
          <label htmlFor="type" className="block text-gray-700 font-semibold mb-2">
            Art der Entrümpelung
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Bitte wählen...</option>
            <option value="wohnung">Wohnungsentrümpelung</option>
            <option value="haus">Haushaltsauflösung</option>
            <option value="keller">Keller- & Dachbodenentrümpelung</option>
            <option value="gewerbe">Gewerbe- & Büroauflösung</option>
            <option value="messie">Messie-Wohnung</option>
            <option value="sperrmüll">Sperrmüllentsorgung</option>
          </select>
        </div>

        {/* Größe */}
        <div>
          <label htmlFor="size" className="block text-gray-700 font-semibold mb-2">
            Größe der Räumung (m²)
          </label>
          <input
            type="number"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="z.B. 80"
          />
        </div>

        {/* Besonderheiten */}
        <div className="md:col-span-2">
          <label htmlFor="details" className="block text-gray-700 font-semibold mb-2">
            Besonderheiten
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
            placeholder="Möbel, Elektrogeräte, Sondermüll, etc."
          />
        </div>

        {/* Wunschtermin */}
        <div>
          <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
            Wunschtermin
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
            Telefonnummer
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Für Rückfragen"
          />
        </div>

        {/* E-Mail */}
        <div className="md:col-span-2">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ihre E-Mail-Adresse"
          />
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-[#2563eb] text-white py-4 px-8 rounded-xl hover:bg-[#1d4ed8] transition-all flex items-center justify-center space-x-2 text-lg font-semibold"
        >
          <span>Anfrage absenden</span>
          <FaPaperPlane />
        </button>
      </div>
    </form>
  );
} 