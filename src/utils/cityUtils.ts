import cities from '@/data/cities.json';

export function findCityRegion(cityName: string): string {
  for (const region of cities.regions) {
    if (region.cities.includes(cityName)) {
      return region.name;
    }
  }
  return '';
}

export function normalizeCity(city: string): string {
  return city.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ü/g, 'ue')
    .replace(/ö/g, 'oe')
    .replace(/ä/g, 'ae')
    .replace(/ß/g, 'ss');
}

export function denormalizeCity(city: string): string {
  return city
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/ue/g, 'ü')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ss/g, 'ß');
}

export function getAllCities(): string[] {
  return cities.regions.flatMap(region => region.cities);
}

export function getCityCoordinates(cityName: string): { lat: number; lng: number } | null {
  // Hier könnten die tatsächlichen Koordinaten der Städte hinterlegt werden
  const coordinates: { [key: string]: { lat: number; lng: number } } = {
    'Paderborn': { lat: 51.7189, lng: 8.7575 },
    'Bielefeld': { lat: 52.0302, lng: 8.5325 },
    'Gütersloh': { lat: 51.9071, lng: 8.3826 },
    // Weitere Städte hier hinzufügen
  };
  
  return coordinates[cityName] || null;
} 