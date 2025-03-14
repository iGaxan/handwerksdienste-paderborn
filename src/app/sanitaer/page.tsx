import ServicePage from '@/components/ServicePage';

export default function SanitaerPage() {
  return (
    <ServicePage
      title="Sanitär & Installationsservice"
      description="Ihr kompetenter Partner für alle Sanitärarbeiten. Von der Reparatur bis zur Neuinstallation - professionell, zuverlässig und fair."
      features={[
        "Installation & Reparatur von Sanitäranlagen",
        "Wartung von Heizungsanlagen",
        "Badsanierung & -modernisierung",
        "Wasseraufbereitung",
        "Leckageortung",
        "Energieeffiziente Lösungen"
      ]}
      imageUrl="/images/services/sanitary/plumbing-professional-doing-his-job (1).jpg"
      videoUrl="/images/services/sanitary/5998070_People_Person_3840x2160.mp4"
      price="Sanitärarbeiten ab 65€ - Faire Preise & Top-Qualität"
      emergencyInfo="24/7 Notdienst bei Wasserschäden & dringenden Reparaturen"
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
          title: "Erfahrene Fachkräfte",
          description: "Unsere qualifizierten Sanitärinstallateure bringen jahrelange Erfahrung und Expertise mit.",
          icon: "FaUsers"
        },
        {
          title: "Komplettservice",
          description: "Von der Beratung über die Installation bis zur Wartung - alles aus einer Hand.",
          icon: "FaTools"
        },
        {
          title: "Qualitätsgarantie",
          description: "Wir verwenden nur hochwertige Materialien und geben Garantie auf unsere Arbeit.",
          icon: "FaShieldAlt"
        }
      ]}
      process={[
        {
          title: "Beratung & Planung",
          description: "Wir analysieren Ihre Anforderungen und erstellen einen detaillierten Plan für Ihr Projekt."
        },
        {
          title: "Kostenvoranschlag",
          description: "Sie erhalten einen transparenten Kostenvoranschlag mit allen Details."
        },
        {
          title: "Professionelle Ausführung",
          description: "Unsere Fachkräfte führen die Arbeiten sauber und termingerecht aus."
        },
        {
          title: "Qualitätskontrolle",
          description: "Nach Abschluss prüfen wir alle Installationen auf einwandfreie Funktion."
        }
      ]}
      faq={[
        {
          question: "Welche Sanitärarbeiten führen Sie durch?",
          answer: "Wir bieten das komplette Spektrum an Sanitärarbeiten: Von der Reparatur tropfender Wasserhähne über die Installation neuer Sanitäranlagen bis hin zur kompletten Badsanierung."
        },
        {
          question: "Wie schnell können Sie bei einem Notfall helfen?",
          answer: "Unser Notdienst ist 24/7 verfügbar. Bei Wasserschäden oder anderen dringenden Fällen sind wir meist innerhalb von 30-60 Minuten bei Ihnen."
        },
        {
          question: "Bieten Sie auch Wartungsverträge an?",
          answer: "Ja, wir bieten verschiedene Wartungspakete für Ihre Sanitäranlagen an. Regelmäßige Wartung verhindert größere Schäden und spart langfristig Kosten."
        },
        {
          question: "Können Sie auch eine komplette Badsanierung durchführen?",
          answer: "Ja, wir sind Experten für Badsanierungen. Von der Planung über die Demontage bis zur kompletten Neuinstallation - wir koordinieren alle Gewerke und setzen Ihr Traumbad um."
        }
      ]}
      testimonials={[
        {
          name: "Andreas Becker",
          location: "München",
          text: "Hervorragende Arbeit bei unserer Badsanierung. Termingerecht, sauber und professionell. Das Ergebnis übertrifft unsere Erwartungen!",
          rating: 5
        },
        {
          name: "Petra Klein",
          location: "Berlin",
          text: "Schnelle Hilfe bei einem Wasserschaden mitten in der Nacht. Sehr kompetent und fair im Preis. Danke für den tollen Service!",
          rating: 5
        },
        {
          name: "Markus Werner",
          location: "Hamburg",
          text: "Die jährliche Wartung unserer Heizung läuft immer reibungslos. Sehr zuverlässiger und freundlicher Service.",
          rating: 5
        }
      ]}
    />
  );
} 