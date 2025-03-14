import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über Uns - ServicePro',
  description: 'Lernen Sie ServicePro kennen - Ihr zuverlässiger Partner für professionelle Handwerksleistungen.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
                Über Uns
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Ihr zuverlässiger Partner für alle Handwerksleistungen
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              ServicePro steht für Qualität, Zuverlässigkeit und erstklassigen Service. Mit jahrelanger Erfahrung und einem Team aus qualifizierten Fachkräften sind wir Ihr kompetenter Ansprechpartner für alle handwerklichen Dienstleistungen.
            </p>
          </div>
          
          <div className="mt-16 prose prose-lg text-gray-500 mx-auto">
            <h2 className="text-2xl font-bold text-gray-900">Unsere Geschichte</h2>
            <p>
              Seit unserer Gründung haben wir uns kontinuierlich weiterentwickelt und unser Serviceangebot stetig ausgebaut. Dabei stand immer eines im Mittelpunkt: Die Zufriedenheit unserer Kunden.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12">Unsere Werte</h2>
            <ul>
              <li>Qualität in allen Bereichen</li>
              <li>Transparente und faire Preise</li>
              <li>24/7 Erreichbarkeit</li>
              <li>Kompetente und freundliche Mitarbeiter</li>
              <li>Modernste Technik und Werkzeuge</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12">Unser Team</h2>
            <p>
              Unser Team besteht aus erfahrenen Fachkräften, die regelmäßig geschult werden, um Ihnen den bestmöglichen Service zu bieten. Jeder Mitarbeiter ist ein Experte in seinem Bereich und arbeitet mit Leidenschaft und Engagement.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12">Unsere Leistungen</h2>
            <p>
              Von Schlüsseldienst über Rohrreinigung bis hin zu Elektroarbeiten - wir bieten Ihnen ein umfassendes Leistungsspektrum aus einer Hand. Dabei setzen wir auf modernste Technik und arbeiten nach den höchsten Qualitätsstandards.
            </p>
            
            <div className="mt-12 bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900">Unsere Qualitätsversprechen</h3>
              <ul className="mt-4">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Festpreisgarantie ohne versteckte Kosten
                </li>
                <li className="flex items-center mt-2">
                  <span className="text-primary mr-2">✓</span>
                  Schnelle Reaktionszeiten (10-40 Minuten)
                </li>
                <li className="flex items-center mt-2">
                  <span className="text-primary mr-2">✓</span>
                  Professionelle und saubere Arbeitsweise
                </li>
                <li className="flex items-center mt-2">
                  <span className="text-primary mr-2">✓</span>
                  Garantie auf alle Arbeiten
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 