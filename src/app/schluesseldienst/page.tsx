import ServicePage from '@/components/ServicePage';

export default function SchluessseldienstPage() {
  return (
    <ServicePage
      title="Schlüsseldienst & Türöffnung"
      description="Schneller & zuverlässiger Schlüsseldienst – 24/7 für Sie da. Professionelle Türöffnung ohne Schäden zu fairen Preisen."
      features={[
        "Türöffnung ohne Schäden in unter 20 Minuten",
        "Einbruchschutz & Sicherheitsberatung",
        "Schließanlagen & Schließzylinder",
        "Schlüssel nachmachen & Schlüsselnotdienst",
        "Elektronische Schließsysteme",
        "Tresoröffnung & Tresormontage"
      ]}
      imageUrl="/images/services/locksmith/closeup-shot-person-holding-door-knob-opening-door.jpg"
      videoUrl="/images/services/locksmith/998121_Keyhole_Lock_1920x1080.mp4"
      price="Türöffnung ab 39€ - Festpreisgarantie, keine versteckten Kosten"
      emergencyInfo="In der Regel sind wir innerhalb von 20 Minuten bei Ihnen vor Ort"
      areas={[
        "Berlin",
        "Hamburg",
        "München",
        "Köln",
        "Frankfurt",
        "Stuttgart",
        "Düsseldorf",
        "Leipzig"
      ]}
      benefits={[
        {
          title: "Schnelle Hilfe",
          description: "Unser Notdienst ist innerhalb von 20 Minuten bei Ihnen vor Ort - 24 Stunden am Tag, 7 Tage die Woche.",
          icon: "FaClock"
        },
        {
          title: "Faire Preise",
          description: "Transparente Festpreise ohne versteckte Kosten. Bezahlung erst nach erfolgreicher Türöffnung.",
          icon: "FaEuroSign"
        },
        {
          title: "Professionell & Sicher",
          description: "Ausgebildete Fachkräfte öffnen Ihre Tür zuverlässig und ohne Beschädigungen.",
          icon: "FaShieldAlt"
        }
      ]}
      process={[
        {
          title: "Anruf & Beratung",
          description: "Sie erreichen uns 24/7 unter unserer Notfallnummer. Wir beraten Sie sofort und nennen Ihnen den Festpreis."
        },
        {
          title: "Schnelle Anfahrt",
          description: "Unser nächster verfügbarer Techniker macht sich sofort auf den Weg zu Ihnen - meist innerhalb von 20 Minuten vor Ort."
        },
        {
          title: "Professionelle Türöffnung",
          description: "Mit speziellen Werkzeugen öffnen wir Ihre Tür schnell und ohne Beschädigungen."
        },
        {
          title: "Sicherheitscheck",
          description: "Nach der Türöffnung prüfen wir Ihr Schloss und beraten Sie zu möglichen Sicherheitsverbesserungen."
        }
      ]}
      faq={[
        {
          question: "Wie schnell sind Sie vor Ort?",
          answer: "In der Regel erreichen wir Sie innerhalb von 20 Minuten nach Ihrem Anruf. In 95% der Fälle sind wir unter 30 Minuten bei Ihnen."
        },
        {
          question: "Was kostet eine Türöffnung?",
          answer: "Unsere Türöffnungen beginnen bei 39€. Der genaue Preis hängt von der Tür, dem Schloss und der Tageszeit ab. Wir nennen Ihnen den Festpreis vorab am Telefon."
        },
        {
          question: "Beschädigen Sie meine Tür?",
          answer: "Nein, wir arbeiten mit speziellen Öffnungstechniken, die keine Schäden hinterlassen. Unsere Fachkräfte sind darauf spezialisiert, Türen schonend zu öffnen."
        },
        {
          question: "Arbeiten Sie auch nachts und am Wochenende?",
          answer: "Ja, unser Notdienst ist 24/7 verfügbar - auch nachts, an Wochenenden und Feiertagen, ohne Aufpreis."
        }
      ]}
      testimonials={[
        {
          name: "Michael Schmidt",
          location: "Berlin",
          text: "Super schneller Service! Nach nur 15 Minuten war der Monteur da und hatte meine Tür in wenigen Minuten geöffnet. Sehr professionell und fair im Preis.",
          rating: 5
        },
        {
          name: "Sandra Meyer",
          location: "Hamburg",
          text: "Musste nachts um 2 Uhr den Notdienst rufen. Sehr freundlicher Service und keine überteuerten Nachtzuschläge. Klare Empfehlung!",
          rating: 5
        },
        {
          name: "Thomas Weber",
          location: "München",
          text: "Kompetente Beratung am Telefon, schnelle Hilfe vor Ort und faire Preise. Hat mir auch gleich Tipps zur Verbesserung der Sicherheit gegeben.",
          rating: 5
        }
      ]}
    />
  );
} 