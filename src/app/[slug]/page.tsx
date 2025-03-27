'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import CityServicePage from '@/components/CityServicePage';

export default function SlugPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const service = hostname.split('.')[0]; // Extrahiert den Service aus der Subdomain

  // Normalisiere den Service-Namen
  const normalizeService = (service: string) => {
    return service
      .toLowerCase()
      .replace(/ae/g, 'ä')
      .replace(/oe/g, 'ö')
      .replace(/ue/g, 'ü')
      .replace(/ss/g, 'ß');
  };

  return (
    <CityServicePage 
      city={slug} 
      service={normalizeService(service)}
    />
  );
} 