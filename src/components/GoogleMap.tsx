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
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom: 13,
          styles: [
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#1a365d' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#e9e9e9' }]
            }
          ]
        });

        new google.maps.Marker({
          position: { lat, lng },
          map,
          title: `24/7 Handwerker & Notdienst ${city}`,
          animation: google.maps.Animation.DROP
        });
      }
    });
  }, [city, lat, lng]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-xl shadow-lg"
      aria-label={`Standort in ${city}`}
    />
  );
} 