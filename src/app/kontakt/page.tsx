import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Kontakt - ServicePro',
  description: 'Kontaktieren Sie uns für professionelle Handwerksleistungen rund um die Uhr. Wir sind für Sie da!',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Kontakt</h1>
          <p className="mt-4 text-xl text-gray-600">
            Wir sind rund um die Uhr für Sie erreichbar
          </p>
        </div>
        <ContactSection />
      </div>
    </main>
  );
} 