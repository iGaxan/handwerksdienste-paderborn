import { Metadata } from 'next';
import cities from '@/data/cities.json';

// Service-spezifische Metadaten
const serviceMetadata = {
  schluesseldienst: {
    title: 'Schlüsseldienst',
    description: '24/7 Schlüsseldienst mit Festpreisgarantie. Türöffnung ohne Schäden, schnell und zuverlässig. Qualifizierte Fachkräfte und modernste Werkzeuge.',
    keywords: ['Schlüsseldienst', 'Türöffnung', 'Einbruchschutz', 'Schließanlagen']
  },
  rohrreinigung: {
    title: 'Rohrreinigung',
    description: 'Professionelle Rohrreinigung & Verstopfungsbeseitigung. 24/7 Notdienst, modernste Technik, faire Preise. Nachhaltige Lösungen für alle Rohrsysteme.',
    keywords: ['Rohrreinigung', 'Verstopfung', 'Kanalreinigung', 'Rohrsanierung']
  },
  sanitaer: {
    title: 'Sanitär',
    description: 'Ihr Sanitär-Fachbetrieb für Installation, Wartung und Reparatur. Kompetente Beratung, faire Preise und hochwertige Ausführung aller Sanitärarbeiten.',
    keywords: ['Sanitär', 'Klempner', 'Sanitärinstallation', 'Badezimmer']
  },
  schaedlingsbekaempfung: {
    title: 'Schädlingsbekämpfung',
    description: 'Professionelle Schädlingsbekämpfung mit nachhaltiger Wirkung. Diskrete und effektive Beseitigung aller Schädlingsarten. Präventive Maßnahmen und Beratung.',
    keywords: ['Schädlingsbekämpfung', 'Kammerjäger', 'Schädlingsbefall', 'Ungeziefer']
  },
  elektro: {
    title: 'Elektro',
    description: 'Ihr Elektrofachbetrieb für alle elektrischen Installationen. 24/7 Notdienst, E-Check, Smart Home Lösungen und professionelle Elektroarbeiten.',
    keywords: ['Elektriker', 'Elektroinstallation', 'E-Check', 'Elektrotechnik']
  },
  entruempelung: {
    title: 'Entrümpelung',
    description: 'Professionelle Entrümpelung und Haushaltsauflösung. Schnell, zuverlässig und kostengünstig. Komplette Räumung und fachgerechte Entsorgung.',
    keywords: ['Entrümpelung', 'Haushaltsauflösung', 'Räumung', 'Entsorgung']
  }
};

// Hilfsfunktion um zu prüfen, ob eine Stadt existiert
function cityExists(cityName: string): boolean {
  return cities.regions.some(region => 
    region.cities.includes(cityName)
  );
}

// Hilfsfunktion um die Region einer Stadt zu finden
function findCityRegion(cityName: string) {
  return cities.regions.find(region => 
    region.cities.includes(cityName)
  );
}

// Generiere die Metadata für die Service-Seite
export async function generateMetadata({ params }: { params: { city: string, service: string } }): Promise<Metadata> {
  const citySlug = decodeURIComponent(params.city)
    .replace(/-/g, ' ')
    .replace(/ue/g, 'ü')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (!cityExists(citySlug)) {
    return {
      title: 'Service nicht gefunden',
      description: 'Die angeforderte Service-Seite wurde nicht gefunden.'
    };
  }

  const region = findCityRegion(citySlug);
  const service = serviceMetadata[params.service as keyof typeof serviceMetadata];

  if (!service) {
    return {
      title: 'Service nicht gefunden',
      description: 'Die angeforderte Service-Seite wurde nicht gefunden.'
    };
  }

  return {
    title: `${service.title} ${citySlug} » 24/7 Service | Faire Preise`,
    description: `${service.description} ✓ Ihr ${service.title} in ${citySlug} und ${region?.name} ✓ 24/7 Notdienst ✓ Faire Festpreise ✓ Sofort vor Ort`,
    keywords: [
      ...service.keywords,
      `${service.title} ${citySlug}`,
      `${service.title} ${region?.name}`,
      '24/7 Notdienst',
      'Festpreisgarantie'
    ]
  };
} 