'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  image: string;
}

const ServiceCard = ({ title, description, icon, href, image }: ServiceCardProps) => {
  return (
    <motion.a
      href={href}
      className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-2 text-base text-gray-500">
          {description}
        </p>
        <div className="mt-4 flex items-center text-primary">
          <span className="text-sm font-medium">Mehr erfahren</span>
          <motion.svg
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ x: 0 }}
            animate={{ x: 3 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </div>
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </motion.a>
  );
};

export default ServiceCard; 