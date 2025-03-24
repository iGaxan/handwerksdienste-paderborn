import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.expertevorort.de'),
  title: 'Entrümpelung » Faire Preise & Festpreisgarantie',
  description: 'Ihre Entrümpelung ✓ Haushaltsauflösung ✓ Faire Preise ✓ Schnelle Termine ✓ Komplette Räumung ➤ Kostenlos anfragen!',
  alternates: {
    canonical: 'https://www.expertevorort.de/entruempelung',
  },
  openGraph: {
    title: 'Entrümpelung » Faire Preise & Festpreisgarantie',
    description: 'Ihre Entrümpelung ✓ Haushaltsauflösung ✓ Faire Preise ✓ Schnelle Termine ✓ Komplette Räumung',
    url: 'https://www.expertevorort.de/entruempelung',
    siteName: 'Experte vor Ort',
    images: [
      {
        url: 'https://www.expertevorort.de/images/hero/clearance-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung - Experte vor Ort',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung » Faire Preise & Festpreisgarantie',
    description: 'Ihre Entrümpelung ✓ Haushaltsauflösung ✓ Faire Preise ✓ Schnelle Termine ✓ Komplette Räumung',
    images: ['https://www.expertevorort.de/images/hero/clearance-hero.jpg'],
  },
}; 