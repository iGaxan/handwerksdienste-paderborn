'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  image: string;
}

export default function ServiceCard({ title, description, icon, href, image }: ServiceCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-[#1a365d]">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-[#1a365d]">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="relative h-48 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
} 