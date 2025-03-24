import { Metadata } from 'next';
import CityServicePage from './CityServicePage';
import JsonLd from '@/components/JsonLd';
import cities from '@/data/cities.json';

interface Props {
  params: {
    city: string;
    service: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  const serviceName = params.service.charAt(0).toUpperCase() + params.service.slice(1);
  
  return {
    title: `${serviceName} ${cityName} – 24h Notdienst & Soforthilfe`,
    description: `Ihr professioneller ${serviceName} in ${cityName}. 24/7 Notdienst mit Festpreisgarantie und 20-30 Minuten Reaktionszeit.`,
  };
}

export default function ServicePage({ params }: Props) {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  const serviceName = params.service.charAt(0).toUpperCase() + params.service.slice(1);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://ihre-domain.de/${params.city}/${params.service}`,
    "name": `${serviceName} ${cityName} – 24h Notdienst`,
    "image": `/images/hero/${params.service}-hero.jpg`,
    "description": `Ihr professioneller ${serviceName} in ${cityName}. 24/7 Notdienst mit Festpreisgarantie und 20-30 Minuten Reaktionszeit.`,
    "url": `https://ihre-domain.de/${params.city}/${params.service}`,
    "telephone": "+49176 84536648",
    "areaServed": `${cityName} und Umgebung`,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hatzfelder Str. 68 E",
      "addressLocality": cityName,
      "postalCode": "33104",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.7189205",
      "longitude": "8.7419121"
    }
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <CityServicePage city={cityName} service={serviceName} />
    </>
  );
}