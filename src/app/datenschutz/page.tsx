import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz - ServicePro',
  description: 'Datenschutzerklärung und Informationen zur Verarbeitung personenbezogener Daten bei ServicePro.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="bg-white shadow rounded-lg p-6 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Allgemeine Hinweise</h3>
            <p className="text-gray-600">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Datenschutz</h3>
            <p className="text-gray-600">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Cookies</h3>
            <p className="text-gray-600">
              Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Analyse-Tools und Werbung</h2>
            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Google Analytics</h3>
            <p className="text-gray-600">
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Plugins und Tools</h2>
            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">Google Web Fonts</h3>
            <p className="text-gray-600">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Kontaktformular</h2>
            <p className="text-gray-600">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Ihre Rechte</h2>
            <p className="text-gray-600">
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 