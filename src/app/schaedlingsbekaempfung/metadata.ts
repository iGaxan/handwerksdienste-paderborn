import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.expertevorort.de'),
  title: 'Schädlingsbekämpfung » Professionell & Diskret',
  description: 'Ihre Schädlingsbekämpfung ✓ Schnelle Hilfe ✓ Diskrete Behandlung ✓ Nachhaltige Bekämpfung ✓ Alle Schädlingsarten ➤ Jetzt anfragen!',
  alternates: {
    canonical: 'https://www.expertevorort.de/schaedlingsbekaempfung',
  },
  openGraph: {
    title: 'Schädlingsbekämpfung » Professionell & Diskret',
    description: 'Ihre Schädlingsbekämpfung ✓ Schnelle Hilfe ✓ Diskrete Behandlung ✓ Nachhaltige Bekämpfung ✓ Alle Schädlingsarten',
    url: 'https://www.expertevorort.de/schaedlingsbekaempfung',
    siteName: 'Experte vor Ort',
    images: [
      {
        url: 'https://www.expertevorort.de/images/hero/pest-control-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Schädlingsbekämpfung - Experte vor Ort',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schädlingsbekämpfung » Professionell & Diskret',
    description: 'Ihre Schädlingsbekämpfung ✓ Schnelle Hilfe ✓ Diskrete Behandlung ✓ Nachhaltige Bekämpfung ✓ Alle Schädlingsarten',
    images: ['https://www.expertevorort.de/images/hero/pest-control-hero.jpg'],
  },
}; 