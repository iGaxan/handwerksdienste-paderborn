import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elektriker Paderborn – 24h Notdienst & Elektroinstallation | Tel: 017684536648',
  description: '🏆 Elektriker in Paderborn ✓ 24/7 Notdienst ✓ E-Check ✓ Elektroinstallation ✓ Smart Home ✓ In 20-30 Min. vor Ort ✓ 5 Jahre Garantie ✓ Festpreisgarantie',
  keywords: [
    'Elektriker Paderborn',
    'Elektro Notdienst Paderborn',
    'Elektroinstallation',
    'E-Check',
    'Smart Home Installation',
    'Elektriker 24/7',
    'Elektrotechnik Paderborn',
    'Elektroarbeiten',
    'Beleuchtungstechnik',
    'Sicherheitstechnik',
    'Photovoltaik Installation',
    'E-Mobilität Wallbox',
    'Elektro Meisterbetrieb',
    'Notrufsysteme',
    'Elektro Störungsdienst'
  ].join(', '),
  openGraph: {
    title: 'Elektriker Paderborn – Ihr Elektro-Meisterbetrieb vor Ort | ☎ 017684536648',
    description: '🏆 Professionelle Elektroinstallationen in Paderborn ✓ 24/7 Notdienst ✓ 5 Jahre Garantie ✓ Festpreisgarantie ✓ Alle Elektroarbeiten ✓ Meisterbetrieb ✓ Schnell & zuverlässig',
    images: [
      {
        url: '/images/electrical-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Elektriker Paderborn - Professioneller Elektro-Service'
      }
    ],
    type: 'website',
    locale: 'de_DE',
    siteName: 'Elektriker Paderborn'
  },
  alternates: {
    canonical: 'https://ihre-domain.de/elektro',
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
  verification: {
    google: 'Ihre-Google-Verification-ID',
  },
  other: {
    'facebook-domain-verification': 'Ihre-Facebook-Domain-ID'
  }
};

export default function ElektroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 