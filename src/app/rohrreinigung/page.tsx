import ServicePage from '@/components/ServicePage';

export default function RohrreinigungPage() {
  return (
    <ServicePage
      title="Professionelle Rohrreinigung"
      description="Verstopfte Rohre? Unser Notdienst für Rohrreinigung ist rund um die Uhr für Sie da. Schnelle Hilfe bei allen Rohrverstopfungen."
      features={[
        "Rohrreinigung mit modernster Technik",
        "Verstopfungen in Bad, Küche & Kanalisation",
        "Hochdruck-Wasserstrahltechnik",
        "Rohrkamera-Inspektion",
        "Wartung & Vorbeugung",
        "Dichtheitsprüfung"
      ]}
      imageUrl="/images/services/plumbing/plumbing-repair-service.jpg"
      videoUrl="/images/services/plumbing/6006374_People_Person_3840x2160.mp4"
      price="Rohrreinigung ab 79€ - Transparent & fair kalkuliert"
      emergencyInfo="Schnelle Hilfe bei akuten Verstopfungen - 30 Minuten Reaktionszeit"
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
          title: "Modernste Technik",
          description: "Wir nutzen fortschrittliche Rohrreinigungsgeräte und Kamera-Inspektionssysteme für optimale Ergebnisse.",
          icon: "FaTools"
        },
        {
          title: "Nachhaltige Lösung",
          description: "Wir beheben nicht nur die Verstopfung, sondern analysieren und beseitigen auch die Ursache.",
          icon: "FaRecycle"
        },
        {
          title: "Garantierte Qualität",
          description: "Professionelle Reinigung mit Garantie - bei uns gibt es keine halben Sachen.",
          icon: "FaCheck"
        }
      ]}
      process={[
        {
          title: "Erstanalyse",
          description: "Wir analysieren die Situation vor Ort und lokalisieren die Verstopfung mittels modernster Kameratechnik."
        },
        {
          title: "Kostenaufstellung",
          description: "Sie erhalten einen transparenten Kostenvoranschlag vor Beginn der Arbeiten."
        },
        {
          title: "Professionelle Reinigung",
          description: "Mit speziellen Reinigungsgeräten und umweltfreundlichen Methoden beseitigen wir die Verstopfung."
        },
        {
          title: "Abschlusskontrolle",
          description: "Eine finale Kamera-Inspektion stellt sicher, dass alle Rohre wieder frei sind."
        }
      ]}
      faq={[
        {
          question: "Wie schnell können Sie bei einer Verstopfung helfen?",
          answer: "Bei Notfällen sind wir in der Regel innerhalb von 30 Minuten bei Ihnen. Wir arbeiten 24/7, auch an Sonn- und Feiertagen."
        },
        {
          question: "Welche Arten von Verstopfungen beheben Sie?",
          answer: "Wir beheben alle Arten von Verstopfungen in Küche, Bad, WC und Kanalisation. Auch hartnäckige Verstopfungen durch Fett, Wurzeln oder andere Fremdkörper beseitigen wir zuverlässig."
        },
        {
          question: "Sind Ihre Methoden umweltfreundlich?",
          answer: "Ja, wir setzen auf mechanische Reinigung und umweltverträgliche Reinigungsmittel. Hochdruckreinigung und Spiralen sind dabei besonders effektiv und schonen die Umwelt."
        },
        {
          question: "Was kostet eine Rohrreinigung?",
          answer: "Die Grundpauschale beginnt bei 79€. Der endgültige Preis hängt von der Art und dem Umfang der Verstopfung ab. Wir nennen Ihnen den genauen Preis nach der Erstanalyse."
        }
      ]}
      testimonials={[
        {
          name: "Frank Müller",
          location: "Frankfurt",
          text: "Sehr professioneller Service. Waren innerhalb von 20 Minuten da und haben die Verstopfung schnell beseitigt. Faire Preise und super Beratung!",
          rating: 5
        },
        {
          name: "Julia Wagner",
          location: "Berlin",
          text: "Kamera-Inspektion hat gezeigt, wo das Problem lag. Alles wurde ausführlich erklärt und die Verstopfung wurde nachhaltig beseitigt.",
          rating: 5
        },
        {
          name: "Peter Schulz",
          location: "Hamburg",
          text: "Sonntags eine verstopfte Küche - kein Problem! Schneller Service, faire Preise und sehr freundliche Mitarbeiter. Klare Empfehlung!",
          rating: 5
        }
      ]}
    />
  );
} 