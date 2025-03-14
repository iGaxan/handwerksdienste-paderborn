import ServicePage from '@/components/ServicePage';

export default function ElektroPage() {
  return (
    <ServicePage
      title="Elektroinstallation & Notdienst"
      description="Ihr zuverlässiger Partner für alle elektrischen Installationen und Reparaturen. 24/7 Notdienst bei elektrischen Problemen."
      features={[
        "Elektroinstallationen & Reparaturen",
        "Sicherheitsprüfungen & Wartung",
        "Smart Home Installation",
        "Beleuchtungstechnik",
        "Störungsbehebung",
        "E-Check & Prüfprotokolle"
      ]}
      imageUrl="/images/services/electrical/electrician-builder-work-examines-cable-connection-electrical-line-fuselage-industrial-switchboard-professional-overalls-with-electrician-s-tool.jpg"
      videoUrl="/images/services/electrical/1472772_People_Technology_3840x2160.mp4"
      price="Elektroarbeiten ab 75€ - Qualität zum fairen Preis"
      emergencyInfo="Elektrischer Notfall? Wir sind in 30 Minuten bei Ihnen!"
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
          title: "Sicherheit geprüft",
          description: "Alle unsere Elektriker sind geprüfte Fachkräfte mit jahrelanger Erfahrung.",
          icon: "FaShieldAlt"
        },
        {
          title: "Smart Home Experten",
          description: "Wir sind spezialisiert auf moderne Smart Home Lösungen und intelligente Haussteuerung.",
          icon: "FaHome"
        },
        {
          title: "24/7 Verfügbarkeit",
          description: "Unser Notdienst ist rund um die Uhr für Sie da - auch an Feiertagen.",
          icon: "FaClock"
        }
      ]}
      process={[
        {
          title: "Bedarfsanalyse",
          description: "Wir ermitteln Ihre spezifischen Anforderungen und erstellen einen detaillierten Plan."
        },
        {
          title: "Kostenaufstellung",
          description: "Sie erhalten einen transparenten Kostenvoranschlag für alle Arbeiten."
        },
        {
          title: "Fachgerechte Installation",
          description: "Unsere Elektriker führen alle Arbeiten nach aktuellen Vorschriften aus."
        },
        {
          title: "Sicherheitsprüfung",
          description: "Nach Abschluss erfolgt eine umfassende Prüfung aller Installationen."
        }
      ]}
      faq={[
        {
          question: "Welche Elektroarbeiten führen Sie durch?",
          answer: "Wir bieten das gesamte Spektrum elektrischer Installationen: Von der Neuinstallation über Reparaturen bis hin zu Smart Home Systemen und Sicherheitstechnik."
        },
        {
          question: "Wie schnell sind Sie bei einem Notfall vor Ort?",
          answer: "Bei elektrischen Notfällen sind wir in der Regel innerhalb von 30 Minuten bei Ihnen. Unser Notdienst ist 24/7 verfügbar."
        },
        {
          question: "Was kostet ein E-Check?",
          answer: "Ein E-Check für eine durchschnittliche Wohnung kostet ab 129€. Der genaue Preis hängt von der Größe und Anzahl der zu prüfenden Geräte ab."
        },
        {
          question: "Installieren Sie auch Smart Home Systeme?",
          answer: "Ja, wir sind Experten für Smart Home Installationen. Von einzelnen Komponenten bis zur kompletten Hausautomation setzen wir Ihre Wünsche um."
        }
      ]}
      testimonials={[
        {
          name: "Martin Schneider",
          location: "Frankfurt",
          text: "Hervorragende Arbeit bei der Installation unserer Smart Home Anlage. Kompetente Beratung und perfekte Umsetzung!",
          rating: 5
        },
        {
          name: "Lisa Krause",
          location: "Berlin",
          text: "Schnelle Hilfe beim Stromausfall mitten in der Nacht. In 20 Minuten war der Techniker da und hat das Problem behoben.",
          rating: 5
        },
        {
          name: "Klaus Weber",
          location: "München",
          text: "Sehr professionelle Durchführung des E-Checks in unserem Büro. Gründlich, kompetent und fair im Preis.",
          rating: 5
        }
      ]}
    />
  );
} 