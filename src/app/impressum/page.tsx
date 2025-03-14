import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum - ServicePro',
  description: 'Rechtliche Informationen und Kontaktdaten von ServicePro.',
};

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="bg-white shadow rounded-lg p-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-600">
              ServicePro GmbH<br />
              Musterstraße 123<br />
              12345 Musterstadt
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Vertreten durch</h2>
            <p className="text-gray-600">
              Max Mustermann<br />
              Geschäftsführer
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Kontakt</h2>
            <p className="text-gray-600">
              Telefon: 0800 123456789<br />
              E-Mail: info@servicepro.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Registereintrag</h2>
            <p className="text-gray-600">
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Musterstadt<br />
              Registernummer: HRB 12345
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
            <p className="text-gray-600">
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              DE 123 456 789
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Aufsichtsbehörde</h2>
            <p className="text-gray-600">
              Handwerkskammer Musterstadt<br />
              Musterweg 1<br />
              12345 Musterstadt
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Streitschlichtung</h2>
            <p className="text-gray-600">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
              <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
              <br /><br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 