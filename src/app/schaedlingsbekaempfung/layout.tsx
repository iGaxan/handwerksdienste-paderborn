import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schädlingsbekämpfung Paderborn – 24h Notdienst & Kammerjäger | Tel: 017684536648',
  description: '🏆 Kammerjäger & Schädlingsbekämpfung in Paderborn ✓ 24/7 Notdienst ✓ Ratten, Mäuse, Wespen, Bettwanzen ✓ In 20-30 Min. vor Ort ✓ 5 Jahre Garantie ✓ Festpreisgarantie',
  keywords: [
    'Schädlingsbekämpfung Paderborn',
    'Kammerjäger Paderborn',
    'Schädlingsbekämpfer',
    'Rattenbekämpfung',
    'Mäusebekämpfung',
    'Wespenentfernung',
    'Bettwanzenbekämpfung',
    'Taubenabwehr',
    'Holzschädlinge',
    'Kakerlaken entfernen',
    'Notdienst Schädlinge',
    'Schädlingsbekämpfung Notfall',
    'IHK Schädlingsbekämpfer',
    'Kammerjäger 24/7',
    'Schädlingsbekämpfung Kosten'
  ].join(', '),
  openGraph: {
    title: 'Schädlingsbekämpfung Paderborn – Ihr Kammerjäger vor Ort | ☎ 017684536648',
    description: '🏆 Professionelle Schädlingsbekämpfung in Paderborn ✓ 24/7 Notdienst ✓ 5 Jahre Garantie ✓ Festpreisgarantie ✓ Alle Schädlinge ✓ TÜV-geprüft ✓ Diskret & schnell',
    images: [
      {
        url: '/images/hero/pest-control-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Schädlingsbekämpfung Paderborn - Professioneller Kammerjäger Service'
      }
    ],
    type: 'website',
    locale: 'de_DE',
    siteName: 'Schädlingsbekämpfung Paderborn'
  },
  alternates: {
    canonical: 'https://ihre-domain.de/schaedlingsbekaempfung',
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

export default function SchaedlingsbekaempfungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 