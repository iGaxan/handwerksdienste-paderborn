import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entrümpelung Paderborn – Schnell & Preiswert | Tel: 017684536648',
  description: '🏆 Entrümpelung in Paderborn ✓ Haushaltsauflösung ✓ Express-Service ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Wertanrechnung möglich ✓ Umweltgerecht',
  keywords: [
    'Entrümpelung Paderborn',
    'Haushaltsauflösung Paderborn',
    'Wohnungsauflösung',
    'Entrümpelungsfirma',
    'Nachlassauflösung',
    'Sperrmüll Entsorgung',
    'Express Entrümpelung',
    'Gewerberäumung',
    'Kellerentrümpelung',
    'Wertanrechnung Möbel',
    'Kostenlose Besichtigung',
    'Besenreine Übergabe',
    'Umweltgerechte Entsorgung',
    'Recycling Service',
    'Entrümpelung Kosten'
  ].join(', '),
  openGraph: {
    title: 'Entrümpelung Paderborn – Ihr Experte vor Ort | ☎ 017684536648',
    description: '🏆 Professionelle Entrümpelung in Paderborn ✓ Express-Service ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Faire Wertanrechnung ✓ Umweltgerecht ✓ Über 15 Jahre Erfahrung',
    images: [
      {
        url: '/images/entruempelung-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Paderborn - Professioneller Entrümpelungs-Service'
      }
    ],
    type: 'website',
    locale: 'de_DE',
    siteName: 'Entrümpelung Paderborn'
  },
  alternates: {
    canonical: 'https://ihre-domain.de/entruempelung',
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

export default function EntruempelungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 