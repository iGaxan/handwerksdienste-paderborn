'use client';

import Link from 'next/link';

const serviceTypes = [
  'Schlüsseldienst',
  'Rohrreinigung',
  'Sanitär',
  'Schädlingsbekämpfung',
  'Elektro',
  'Entrümpelung'
];

const regions = {
  'Ostwestfalen-Lippe': [
    'Bielefeld',
    'Gütersloh',
    'Detmold',
    'Herford',
    'Lemgo',
    'Minden',
    'Bad Oeynhausen',
    'Rheda-Wiedenbrück',
    'Lübbecke',
    'Paderborn'
  ],
  'Ruhrgebiet': [
    'Dortmund',
    'Essen',
    'Bochum',
    'Duisburg',
    'Gelsenkirchen',
    'Oberhausen',
    'Mülheim an der Ruhr',
    'Hagen',
    'Hamm',
    'Recklinghausen'
  ],
  'Niederrhein': [
    'Krefeld',
    'Moers',
    'Kleve',
    'Wesel',
    'Viersen',
    'Kamp-Lintfort',
    'Geldern',
    'Xanten',
    'Emmerich am Rhein',
    'Kevelaer'
  ]
};

export default function ServicegebietePages() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#1a365d] mb-12 text-center">Servicegebiete</h1>
        
        {Object.entries(regions).map(([region, cities]) => (
          <div key={region} className="mb-16">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">{region}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <div key={city} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-[#1a365d] mb-4">{city}</h3>
                  <ul className="space-y-2">
                    {serviceTypes.map((service) => (
                      <li key={`${city}-${service}`}>
                        <Link 
                          href={`/${city.toLowerCase().replace(/\s+/g, '-')}/${service.toLowerCase().replace(/[äöüß]/g, (match) => {
                            const umlautMap: { [key: string]: string } = {
                              'ä': 'ae',
                              'ö': 'oe',
                              'ü': 'ue',
                              'ß': 'ss'
                            };
                            return umlautMap[match];
                          }).replace(/\s+/g, '-')}`}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 