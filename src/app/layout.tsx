import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '24/7 Service - Ihr Experte für Notdienste',
  description: 'Schlüsseldienst, Rohrreinigung, Sanitär, Schädlingsbekämpfung und Elektro-Notdienst - Schnell und zuverlässig für Sie da!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-[104px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 