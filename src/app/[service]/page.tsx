import { notFound } from 'next/navigation';
import { services } from '@/data/services';

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = services.find((s) => s.slug === params.service);
  
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {service.name} - Ihr Experte vor Ort
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">
            {service.description}
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Unsere Servicegebiete
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {service.cities.map((city) => (
                <a
                  key={city}
                  href={`/${service.slug}/${city.toLowerCase()}`}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  {city}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 