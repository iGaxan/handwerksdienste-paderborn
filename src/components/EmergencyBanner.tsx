'use client';

import { FaPhone, FaWhatsapp, FaBolt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function EmergencyBanner() {
  const pathname = usePathname();
  
  const getEmergencyText = () => {
    if (pathname?.includes('rohrreinigung')) {
      return {
        title: "Verstopfung?",
        subtitle: "Wir sind sofort für Sie da!"
      };
    }
    return {
      title: "Ausgesperrt?",
      subtitle: "Wir sind sofort für Sie da!"
    };
  };

  const emergencyText = getEmergencyText();

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-[rgb(26,54,93)] shadow-lg border-t border-white/10 backdrop-blur-sm pb-safe"
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Notfall-Text - Kompakt auf Mobile, normal auf Desktop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-white"
          >
            <FaBolt className="text-xl md:text-2xl text-blue-400 animate-pulse" />
            <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-2">
              <span className="font-bold text-sm md:text-lg">{emergencyText.title}</span>
              <span className="text-xs md:text-lg">{emergencyText.subtitle}</span>
            </div>
          </motion.div>
          
          {/* Kontakt-Buttons */}
          <div className="flex w-full md:w-auto justify-between gap-2">
            <motion.a
              href="tel:+4917684536648"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-xl font-medium text-sm hover:bg-blue-700 transition-all shadow-lg"
            >
              <FaPhone className="text-base" />
              <div className="hidden md:flex flex-col items-center leading-tight">
                <span>0176 8453</span>
                <span>6648</span>
              </div>
              <span className="md:hidden">0176 84536648</span>
            </motion.a>
            
            <motion.a
              href="https://wa.me/4917684536648"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-xl font-medium text-sm hover:bg-blue-700 transition-all shadow-lg"
            >
              <FaWhatsapp className="text-base" />
              <span>WhatsApp Chat</span>
            </motion.a>
          </div>

          {/* Zusatzinfo - Kompakt auf Mobile, normal auf Desktop */}
          <div className="flex text-xs md:text-sm text-white/80 items-center gap-1 md:gap-2">
            <span className="inline-block w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span>24/7 in 20-30 Min. vor Ort</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 