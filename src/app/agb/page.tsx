import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB - ServicePro',
  description: 'Allgemeine Geschäftsbedingungen der ServicePro GmbH.',
};

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">
            für Dienstleistungen im Bereich Schlüsseldienst, Rohrreinigung, Insektenbeseitigung und Elektro-Service
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Geltungsbereich</h2>
              <p className="text-gray-600">
                Diese AGB gelten für alle Dienstleistungen, die durch [Dein Firmenname, ggf. Inhabername] im Bereich
                Schlüsseldienst erbracht werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Leistungsumfang</h2>
              <p className="text-gray-600">
                Die Leistungen umfassen insbesondere Notöffnungen, Schlossaustausch und sonstige technische Arbeiten
                im Rahmen eines Schlüsseldienstes. Der genaue Leistungsumfang wird individuell mit dem Kunden vor Ort
                abgestimmt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Preise</h2>
              <p className="text-gray-600">
                Alle Preise verstehen sich als Endpreise inklusive der gesetzlichen Mehrwertsteuer, sofern nicht anders
                angegeben. Die Anfahrtspauschale beträgt - je nach Einsatzgebiet, Tageszeit oder Dringlichkeit - 45,00 EUR
                bis 65,00 EUR. Der genaue Betrag wird dem Kunden vor Anfahrt oder vor Ort mitgeteilt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Anfahrt und Kostenerstattung bei Auftragsverweigerung</h2>
              <p className="text-gray-600">
                Wird der Dienstleister auf Wunsch des Kunden zu einem Einsatzort bestellt und entscheidet sich der Kunde
                nach Begutachtung oder Nennung des voraussichtlichen Preises gegen die Ausführung der Dienstleistung (z.
                B. wegen zu hoher Kosten), so ist dennoch die Anfahrtspauschale in Höhe von 45,00 EUR bis 65,00 EUR
                durch den Kunden zu zahlen. Dies gilt unabhängig davon, ob eine Dienstleistung tatsächlich erbracht wurde.
                Die Zahlung ist vor Ort in bar oder per EC-/Kreditkarte fällig, sofern keine andere Vereinbarung getroffen
                wurde.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Zahlung</h2>
              <p className="text-gray-600">
                Die Vergütung der erbrachten Leistungen ist sofort nach Ausführung vor Ort fällig, sofern keine abweichende
                Zahlungsweise vereinbart wurde.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Haftung</h2>
              <p className="text-gray-600">
                Für Schäden, die durch grobe Fahrlässigkeit oder Vorsatz entstehen, haftet der Dienstleister im Rahmen der
                gesetzlichen Bestimmungen. Eine weitergehende Haftung ist ausgeschlossen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Gerichtsstand</h2>
              <p className="text-gray-600">
                Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist, soweit gesetzlich zulässig, der Sitz des
                Dienstleisters.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Salvatorische Klausel</h2>
              <p className="text-gray-600">
                Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen
                Bestimmungen unberührt.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 