'use client';

import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingEmergencyButton() {
  return (
    <div className="fixed right-4 bottom-32 z-40 flex flex-col gap-4 md:hidden">
      <motion.a
        href="tel:+4917684536648"
        className="bg-[#25ae60] text-white rounded-full p-4 shadow-lg backdrop-blur-sm border border-white/10 hover:bg-[#229954] transition-all flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="relative">
          <FaPhoneAlt className="text-2xl" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
        </div>
        <span className="text-sm font-medium pr-1">0176 84536648</span>
      </motion.a>

      <motion.a
        href="https://wa.me/4917684536648"
        className="bg-[#25D366] text-white rounded-full p-4 shadow-lg backdrop-blur-sm border border-white/10 hover:bg-[#128C7E] transition-all flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
      >
        <FaWhatsapp className="text-2xl" />
        <span className="text-sm font-medium pr-1">WhatsApp</span>
      </motion.a>

      <motion.div
        className="absolute -z-10 inset-0 blur-xl bg-gradient-to-r from-red-500/20 to-green-500/20 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
} 