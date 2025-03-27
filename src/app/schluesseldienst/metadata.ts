import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.expertevorort.de'),
  title: 'Schlüsseldienst » 24/7 Notdienst & Festpreisgarantie',
  description: 'Ihr Schlüsseldienst ✓ 24h Notdienst ✓ Türöffnung ohne Schäden ✓ Festpreisgarantie ✓ Sofort vor Ort ➤ Jetzt anrufen!',
  keywords: 'Schlüsseldienst, Türöffnung, Schloss-Austausch, Tresoröffnung, Autoöffnung, Schlüsselanfertigung, Einbruchschutz, Schließanlagen, Notdienst, 24/7 Service, Festpreis',
  openGraph: {
    title: 'Schlüsseldienst » 24/7 Notdienst & Festpreisgarantie',
    description: 'Ihr Schlüsseldienst ✓ 24h Notdienst ✓ Türöffnung ohne Schäden ✓ Festpreisgarantie ✓ Sofort vor Ort',
    url: 'https://www.expertevorort.de/schluesseldienst',
    siteName: 'Experte vor Ort',
    images: [
      {
        url: 'https://www.expertevorort.de/images/hero/locksmith-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Schlüsseldienst - Experte vor Ort',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.expertevorort.de/schluesseldienst',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Schlüsseldienst » 24/7 Notdienst & Festpreisgarantie',
    description: 'Ihr Schlüsseldienst ✓ 24h Notdienst ✓ Türöffnung ohne Schäden ✓ Festpreisgarantie ✓ Sofort vor Ort',
    images: ['https://www.expertevorort.de/images/hero/locksmith-hero.jpg'],
  },
}; 