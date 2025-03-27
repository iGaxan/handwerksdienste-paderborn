import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import ServicePage from '@/components/ServicePage';
import EmergencyBanner from '@/components/EmergencyBanner';
import { getServiceConfig } from '@/utils/serviceConfig';

export async function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const city of service.cities) {
      params.push({
        slug: service.slug,
        location: city.toLowerCase(),
      });
    }
  }
  return params;
}

export default function ServiceLocationPage({ 
  params 
}: { 
  params: { slug: string; location: string } 
}) {
  const service = services.find((s) => s.slug === params.slug);
  const location = params.location.charAt(0).toUpperCase() + params.location.slice(1);
  
  if (!service || !service.cities.map(c => c.toLowerCase()).includes(params.location)) {
    notFound();
  }

  const config = getServiceConfig(service.slug, location);

  return (
    <>
      <EmergencyBanner />
      <ServicePage 
        title={config.title}
        subtitle={config.subtitle}
        heroImage={config.heroImage}
        services={config.services}
        benefits={config.benefits}
        serviceImages={config.serviceImages}
        serviceVideo={config.serviceVideo}
      />
    </>
  );
} 