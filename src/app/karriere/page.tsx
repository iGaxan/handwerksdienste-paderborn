import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karriere - ServicePro',
  description: 'Karrieremöglichkeiten bei ServicePro - Werden Sie Teil unseres Teams!',
};

export default function CareersPage() {
  const jobs = [
    {
      title: 'Schlüsseldienst-Techniker (m/w/d)',
      type: 'Vollzeit',
      location: 'Verschiedene Standorte',
      description: 'Als Schlüsseldienst-Techniker sind Sie für die professionelle Türöffnung und Installation von Sicherheitssystemen verantwortlich.'
    },
    {
      title: 'Sanitärinstallateur (m/w/d)',
      type: 'Vollzeit',
      location: 'Verschiedene Standorte',
      description: 'Wir suchen erfahrene Sanitärinstallateure für Installation und Wartung von sanitären Anlagen.'
    },
    {
      title: 'Elektriker (m/w/d)',
      type: 'Vollzeit',
      location: 'Verschiedene Standorte',
      description: 'Als Elektriker führen Sie elektrische Installationen und Reparaturen in Privat- und Geschäftshäusern durch.'
    },
    {
      title: 'Kundenservice-Mitarbeiter (m/w/d)',
      type: 'Vollzeit/Teilzeit',
      location: 'Zentrale',
      description: 'Im Kundenservice sind Sie die erste Anlaufstelle für unsere Kunden und koordinieren die Einsätze unserer Techniker.'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Karriere bei ServicePro</h1>
            <p className="text-xl">
              Werden Sie Teil eines dynamischen Teams und helfen Sie Menschen in Notsituationen
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ihre Vorteile bei ServicePro
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Attraktive Vergütung</h3>
              <p className="mt-2 text-gray-500">Überdurchschnittliches Gehalt und Bonussystem</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Weiterbildung</h3>
              <p className="mt-2 text-gray-500">Regelmäßige Schulungen und Fortbildungen</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Firmenwagen</h3>
              <p className="mt-2 text-gray-500">Auch zur privaten Nutzung</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Flexible Arbeitszeiten</h3>
              <p className="mt-2 text-gray-500">Work-Life-Balance durch Schichtsystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Aktuelle Stellenangebote
          </h2>
          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="mr-4">{job.type}</span>
                      <span>{job.location}</span>
                    </div>
                    <p className="mt-3 text-gray-600">{job.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none">
                      Jetzt bewerben
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Keine passende Stelle gefunden?</h2>
          <p className="text-xl mb-8">
            Senden Sie uns gerne eine Initiativbewerbung!
          </p>
          <a
            href="mailto:info@expertevorort.de"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
          >
            Jetzt initiativ bewerben
          </a>
        </div>
      </section>
    </main>
  );
} 