'use client';

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  city: string;
  lat: number;
  lng: number;
}

export default function GoogleMap({ city, lat, lng }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current!, {
        center: { lat, lng },
        zoom: 13,
        styles: [
          {
            featureType: 'all',
            elementType: 'all',
            stylers: [{ saturation: -100 }]
          }
        ]
      });

      new google.maps.Marker({
        position: { lat, lng },
        map,
        title: `Handwerker Service ${city}`,
        animation: google.maps.Animation.DROP
      });
    });
  }, [city, lat, lng]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-xl shadow-lg overflow-hidden"
      aria-label={`Karte von ${city}`}
    />
  );
} 