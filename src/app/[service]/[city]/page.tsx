import { notFound } from 'next/navigation';
import { services } from '@/data/services';

export async function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const city of service.cities) {
      params.push({
        service: service.slug,
        city: city.toLowerCase(),
      });
    }
  }
  return params;
}

export default function CityServicePage({ 
  params 
}: { 
  params: { service: string; city: string } 
}) {
  const service = services.find((s) => s.slug === params.service);
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  
  if (!service || !service.cities.map(c => c.toLowerCase()).includes(params.city)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {service.name} in {city}
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">
            {service.description} in {city}. Wir sind Ihr zuverlässiger Partner für {service.name.toLowerCase()} in {city} und Umgebung.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Unsere Leistungen in {city}
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>✓ 24/7 Notdienst verfügbar</li>
              <li>✓ Schnelle Reaktionszeit</li>
              <li>✓ Festpreisgarantie</li>
              <li>✓ Professionelle Fachkräfte</li>
              <li>✓ Modernste Ausrüstung</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 