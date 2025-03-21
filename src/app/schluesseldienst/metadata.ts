import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Schlüsseldienst 24/7 | Professionelle Türöffnung & Schlüsselanfertigung',
    description: 'Ihr professioneller Schlüsseldienst für schnelle und schadenfreie Türöffnungen. ✓ 24/7 Notdienst ✓ Festpreisgarantie ✓ Tresoröffnung ✓ Schlüsselanfertigung ✓ Autoöffnung. Jetzt anrufen!',
    keywords: 'Schlüsseldienst, Türöffnung, Schloss-Austausch, Tresoröffnung, Autoöffnung, Schlüsselanfertigung, Einbruchschutz, Schließanlagen, Notdienst, 24/7 Service, Festpreis',
    openGraph: {
      title: 'Schlüsseldienst 24/7 | Professionelle Türöffnung & Schlüsselanfertigung',
      description: 'Ihr professioneller Schlüsseldienst für schnelle und schadenfreie Türöffnungen. ✓ 24/7 Notdienst ✓ Festpreisgarantie ✓ Tresoröffnung ✓ Schlüsselanfertigung ✓ Autoöffnung.',
      images: ['/images/hero/locksmith-hero.jpg'],
      type: 'website',
      locale: 'de_DE',
    },
    alternates: {
      canonical: 'https://ihre-domain.de/schluesseldienst',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
} 