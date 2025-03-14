import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB - ServicePro',
  description: 'Allgemeine Geschäftsbedingungen der ServicePro GmbH.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="bg-white shadow rounded-lg p-6 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§1 Geltungsbereich</h2>
            <p className="text-gray-600">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle gegenwärtigen und zukünftigen Geschäftsbeziehungen zwischen der ServicePro GmbH (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend "Auftraggeber").
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§2 Vertragsschluss</h2>
            <p className="text-gray-600">
              Der Vertrag kommt durch Auftragserteilung des Auftraggebers (Angebot) und Annahme des Auftragnehmers zustande. Die Annahme erfolgt durch ausdrückliche Erklärung oder durch Ausführung der Leistung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§3 Leistungsumfang</h2>
            <p className="text-gray-600">
              Der Umfang der Leistungen ergibt sich aus der Leistungsbeschreibung des Angebots oder der Auftragsbestätigung. Zusätzliche und/oder nachträgliche Änderungen der Leistungsbeschreibung bedürfen der Schriftform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§4 Preise und Zahlung</h2>
            <p className="text-gray-600">
              Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt unmittelbar nach Leistungserbringung in bar oder per EC-Karte, sofern nicht anders vereinbart.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§5 Gewährleistung</h2>
            <p className="text-gray-600">
              Die Gewährleistung richtet sich nach den gesetzlichen Bestimmungen. Die Gewährleistungsfrist beträgt 12 Monate ab Leistungserbringung, sofern nicht anders vereinbart.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§6 Haftung</h2>
            <p className="text-gray-600">
              Der Auftragnehmer haftet für Schäden – gleich aus welchem Rechtsgrund – wenn er diese Schäden vorsätzlich oder grob fahrlässig verursacht hat.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§7 Datenschutz</h2>
            <p className="text-gray-600">
              Der Auftragnehmer erhebt und verarbeitet Kundendaten gemäß den Bestimmungen der DSGVO. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§8 Schlussbestimmungen</h2>
            <p className="text-gray-600">
              Es gilt das Recht der Bundesrepublik Deutschland. Erfüllungsort und Gerichtsstand ist der Sitz des Auftragnehmers, soweit gesetzlich zulässig.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 