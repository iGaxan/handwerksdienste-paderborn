import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.expertevorort.de'),
  title: 'Elektriker » 24/7 Notdienst & E-Check',
  description: 'Ihr Elektriker ✓ 24h Notdienst ✓ E-Check ✓ Elektroinstallationen ✓ Smart Home ✓ Festpreisgarantie ➤ Jetzt kontaktieren!',
  alternates: {
    canonical: 'https://www.expertevorort.de/elektro',
  },
  openGraph: {
    title: 'Elektriker » 24/7 Notdienst & E-Check',
    description: 'Ihr Elektriker ✓ 24h Notdienst ✓ E-Check ✓ Elektroinstallationen ✓ Smart Home ✓ Festpreisgarantie',
    url: 'https://www.expertevorort.de/elektro',
    siteName: 'Experte vor Ort',
    images: [
      {
        url: 'https://www.expertevorort.de/images/hero/electrical-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Elektriker - Experte vor Ort',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elektriker » 24/7 Notdienst & E-Check',
    description: 'Ihr Elektriker ✓ 24h Notdienst ✓ E-Check ✓ Elektroinstallationen ✓ Smart Home ✓ Festpreisgarantie',
    images: ['https://www.expertevorort.de/images/hero/electrical-hero.jpg'],
  },
}; 