import { notFound } from 'next/navigation';
import { services } from '@/data/services';

export async function generateStaticParams() {
  return services.map((service) => ({
    subdomain: service.slug,
  }));
}

export default function SubdomainPage({ params }: { params: { subdomain: string } }) {
  const service = services.find((s) => s.slug === params.subdomain);
  
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {service.name} in Ihrer Region
        </h1>
        {/* Hier kommt der spezifische Inhalt für die jeweilige Dienstleistung */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600">
            Professionelle {service.name.toLowerCase()} - Schnell und zuverlässig für Sie da!
          </p>
        </div>
      </div>
    </div>
  );
} 