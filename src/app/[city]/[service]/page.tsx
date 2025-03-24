import { Metadata } from 'next';
import CityServicePage from './CityServicePage';
import { JsonLd } from 'react-schemaorg';

interface Props {
  params: {
    city: string;
    service: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = decodeURIComponent(params.city);
  const service = decodeURIComponent(params.service);

  const getServiceInfo = (service: string) => {
    const normalizedService = service.toLowerCase()
      .replace(/ä/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/ß/g, 'ss');

    switch (normalizedService) {
      case 'schluesseldienst':
        return {
          title: `Schlüsseldienst in ${city} » 24/7 Notdienst & faire Preise`,
          description: `Ihr Schlüsseldienst in ${city} ✓ 24h Notdienst ✓ 20-30 Min. vor Ort ✓ Festpreisgarantie ✓ Türöffnung ohne Schäden ➤ Jetzt anrufen!`,
          keywords: `Schlüsseldienst ${city}, Türöffnung ${city}, Schlüsselnotdienst ${city}, Einbruchschutz ${city}, Schließanlagen ${city}, Türöffnung ohne Schäden ${city}`,
        };
      case 'rohrreinigung':
        return {
          title: `Rohrreinigung in ${city} » 24/7 Notdienst & Festpreisgarantie`,
          description: `Professionelle Rohrreinigung in ${city} ✓ 24h Notdienst ✓ 20-30 Min. vor Ort ✓ Verstopfung beseitigen ✓ Kanalreinigung ➤ Jetzt anrufen!`,
          keywords: `Rohrreinigung ${city}, Kanalreinigung ${city}, Abflussreinigung ${city}, Verstopfung ${city}, Rohrreinigungsservice ${city}, Kanalsanierung ${city}`,
        };
      case 'sanitaer':
      case 'sanitär':
        return {
          title: `Sanitär in ${city} » 24/7 Notdienst für Sanitäranlagen`,
          description: `Ihr Sanitär-Notdienst in ${city} ✓ 24h Service ✓ Schnell vor Ort ✓ Bad-Installation ✓ Sanitäranlagen-Reparatur ➤ Jetzt kontaktieren!`,
          keywords: `Sanitär ${city}, Klempner ${city}, Sanitärinstallation ${city}, Badinstallation ${city}, Sanitär-Notdienst ${city}, Heizungsinstallation ${city}`,
        };
      case 'schaedlingsbekaempfung':
      case 'schädlingsbekämpfung':
        return {
          title: `Schädlingsbekämpfung in ${city} » Professionell & Diskret`,
          description: `Schädlingsbekämpfung in ${city} ✓ Schnelle Hilfe ✓ Diskrete Behandlung ✓ Nachhaltige Bekämpfung ✓ Alle Schädlingsarten ➤ Jetzt anfragen!`,
          keywords: `Schädlingsbekämpfung ${city}, Kammerjäger ${city}, Insektenbekämpfung ${city}, Rattenbekämpfung ${city}, Wespenbekämpfung ${city}, Taubenabwehr ${city}`,
        };
      case 'elektro':
        return {
          title: `Elektriker in ${city} » 24/7 Notdienst & E-Check`,
          description: `Ihr Elektriker in ${city} ✓ 24h Notdienst ✓ E-Check ✓ Elektroinstallationen ✓ Smart Home ✓ Festpreisgarantie ➤ Jetzt kontaktieren!`,
          keywords: `Elektriker ${city}, Elektroinstallation ${city}, Elektro-Notdienst ${city}, E-Check ${city}, Smart Home Installation ${city}, Elektriker Notdienst ${city}`,
        };
      case 'entruempelung':
      case 'entrümpelung':
        return {
          title: `Entrümpelung in ${city} » Faire Preise & Festpreisgarantie`,
          description: `Professionelle Entrümpelung in ${city} ✓ Haushaltsauflösung ✓ Faire Preise ✓ Schnelle Termine ✓ Komplette Räumung ➤ Kostenlos anfragen!`,
          keywords: `Entrümpelung ${city}, Haushaltsauflösung ${city}, Wohnungsauflösung ${city}, Entrümpelungsservice ${city}, Sperrmüll ${city}, Räumung ${city}`,
        };
      default:
        return {
          title: `${service} in ${city} » 24/7 Service & faire Preise`,
          description: `Ihr ${service} in ${city} ✓ Schneller Service ✓ Faire Preise ✓ Professionelle Ausführung ➤ Jetzt kontaktieren!`,
          keywords: `${service} ${city}, ${service} Service ${city}, ${service} Notdienst ${city}`,
        };
    }
  };

  const serviceInfo = getServiceInfo(service);

  return {
    metadataBase: new URL('https://www.expertevorort.de'),
    title: serviceInfo.title,
    description: serviceInfo.description,
    keywords: serviceInfo.keywords,
    alternates: {
      canonical: `https://www.expertevorort.de/${city}/${service}`,
    },
    openGraph: {
      title: serviceInfo.title,
      description: serviceInfo.description,
      url: `https://www.expertevorort.de/${city}/${service}`,
      siteName: 'Experte vor Ort',
      locale: 'de_DE',
      type: 'website',
      images: [{
        url: `/images/og/${service.toLowerCase()}-og.jpg`,
        width: 1200,
        height: 630,
        alt: serviceInfo.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: serviceInfo.title,
      description: serviceInfo.description,
      images: [`/images/og/${service.toLowerCase()}-og.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default function ServicePage({ params }: Props) {
  const { city, service } = params;
  const decodedCity = decodeURIComponent(city);
  const decodedService = decodeURIComponent(service);
  
  // Schema.org data for rich snippets
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${decodedService} in ${decodedCity} - Experte vor Ort`,
    "image": `/images/hero/${service.toLowerCase()}-hero.jpg`,
    "description": `Professioneller ${decodedService} in ${decodedCity} mit 24/7 Notdienst und Festpreisgarantie`,
    "@id": `https://www.expertevorort.de/${city}/${service}`,
    "url": `https://www.expertevorort.de/${city}/${service}`,
    "telephone": "017684536648",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hatzfelder Str. 68 E",
      "addressLocality": "Bielefeld",
      "postalCode": "33104",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.0376",
      "longitude": "8.5744"
    },
    "areaServed": {
      "@type": "City",
      "name": decodedCity
    },
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
    }
  };

  return (
    <>
      <JsonLd item={schemaData} />
      <CityServicePage city={city} service={service} />
    </>
  );
}