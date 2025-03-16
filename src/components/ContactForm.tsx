'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

interface ContactFormProps {
  service: string;
}

export default function ContactForm({ service }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: service,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Hier später die API-Integration implementieren
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulierte Verzögerung
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Ihre Telefonnummer"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          E-Mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Ihre E-Mail-Adresse"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Ihre Nachricht an uns"
        />
      </div>

      <div className="flex items-center justify-between">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white
            transition-all duration-200
            ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1a365d] hover:bg-[#0f2b4a]'}
          `}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              <FaPaperPlane />
              Nachricht senden
            </>
          )}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-green-600 font-medium"
          >
            Nachricht erfolgreich gesendet!
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-red-600 font-medium"
          >
            Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
          </motion.div>
        )}
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Ihre Daten werden vertraulich behandelt und nur zur Bearbeitung Ihrer Anfrage verwendet.
        Weitere Informationen finden Sie in unserer Datenschutzerklärung.
      </p>
    </motion.form>
  );
} 