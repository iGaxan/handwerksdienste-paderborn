import { Metadata } from 'next';
import { findCityRegion, denormalizeCity } from '@/utils/cityUtils';
import CityPageClient from './CityPageClient';

interface Props {
  params: {
    city: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityName = denormalizeCity(params.city);
  const region = findCityRegion(cityName);
  
  const title = `24/7 Handwerker & Notdienst in ${cityName} | Schnell & Zuverlässig`;
  const description = `✓ 24/7 Notdienst in ${cityName} & ${region} ✓ Schlüsseldienst ✓ Rohrreinigung ✓ Sanitär ✓ Entrümpelung ✓ Faire Festpreise ✓ In 20-30 Min. vor Ort`;

  return {
    title,
    description,
    keywords: [`Handwerker ${cityName}`, `Notdienst ${cityName}`, `Schlüsseldienst ${cityName}`, 
              `Rohrreinigung ${cityName}`, `Sanitär ${cityName}`, `Entrümpelung ${cityName}`,
              `24/7 Service ${cityName}`, `Handwerker ${region}`],
    alternates: {
      canonical: `https://www.example.com/${params.city}`
    }
  };
}

export default function CityPage({ params }: Props) {
  return <CityPageClient params={params} />;
} 