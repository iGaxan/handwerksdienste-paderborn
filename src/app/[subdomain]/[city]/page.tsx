import { notFound } from 'next/navigation';
import { services } from '@/data/services';

export async function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const city of service.cities) {
      params.push({
        subdomain: service.slug,
        city: city.toLowerCase(),
      });
    }
  }
  return params;
}

export default function CityPage({ 
  params 
}: { 
  params: { subdomain: string; city: string } 
}) {
  const service = services.find((s) => s.slug === params.subdomain);
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  
  if (!service || !service.cities.includes(city)) {
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
            {service.description}
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Warum uns wählen?
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