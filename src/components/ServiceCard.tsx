'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  href: string;
  image: string;
}

export default function ServiceCard({ title, description, icon, href, image }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start w-full h-full"
    >
      <div className="bg-[#1a365d] text-white p-3 sm:p-4 rounded-xl mb-3 sm:mb-4">
        {icon}
      </div>
      <h3 className="text-base sm:text-lg font-bold text-[#1a365d] mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 flex-grow">
        {description}
      </p>
    </motion.div>
  );
} 