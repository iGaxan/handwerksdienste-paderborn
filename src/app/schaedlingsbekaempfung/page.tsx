import ServicePage from '@/components/ServicePage';

export default function SchaedlingsbekaempfungPage() {
  return (
    <ServicePage
      title="Professionelle Schädlingsbekämpfung"
      description="Effektive & nachhaltige Schädlingsbekämpfung durch erfahrene Experten. Schnelle Hilfe bei akutem Befall."
      features={[
        "Bekämpfung aller Schädlingsarten",
        "Umweltfreundliche Methoden",
        "Präventive Maßnahmen",
        "Desinfektion & Hygiene",
        "Dokumentation & Monitoring",
        "Beratung & Nachsorge"
      ]}
      imageUrl="/images/services/pest-control/portrait-professional-exterminator-holding-sprayer-with-chemicals-pest-control.jpg"
      videoUrl="/images/services/pest-control/1115209_Virus_Cleaning_3840x2160.mp4"
      price="Schädlingsbekämpfung ab 89€ - Inklusive Erstinspektion"
      emergencyInfo="Akuter Schädlingsbefall? Wir sind in 60 Minuten bei Ihnen!"
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
          title: "Nachhaltige Bekämpfung",
          description: "Wir setzen auf langfristig wirksame und umweltschonende Methoden der Schädlingsbekämpfung.",
          icon: "FaLeaf"
        },
        {
          title: "Zertifizierte Experten",
          description: "Unsere Schädlingsbekämpfer sind staatlich geprüft und regelmäßig geschult.",
          icon: "FaUserShield"
        },
        {
          title: "Diskrete Abwicklung",
          description: "Wir arbeiten professionell und diskret - Ihr Ruf ist uns wichtig.",
          icon: "FaLock"
        }
      ]}
      process={[
        {
          title: "Erstinspektion",
          description: "Wir analysieren den Befall und identifizieren die Schädlingsart vor Ort."
        },
        {
          title: "Maßnahmenplan",
          description: "Sie erhalten einen detaillierten Plan zur Bekämpfung und Prävention."
        },
        {
          title: "Professionelle Bekämpfung",
          description: "Wir führen die Schädlingsbekämpfung mit modernsten Methoden durch."
        },
        {
          title: "Nachkontrolle & Prävention",
          description: "Wir prüfen den Erfolg und beraten Sie zur Vorbeugung künftigen Befalls."
        }
      ]}
      faq={[
        {
          question: "Welche Schädlinge bekämpfen Sie?",
          answer: "Wir bekämpfen alle Arten von Schädlingen: Von Ratten und Mäusen über Kakerlaken bis hin zu Bettwanzen, Ameisen und Wespen. Auch bei Taubenabwehr sind wir Experten."
        },
        {
          question: "Sind Ihre Methoden sicher für Kinder und Haustiere?",
          answer: "Ja, wir setzen auf moderne und sichere Methoden. Nach der Behandlung informieren wir Sie genau, wann Räume wieder gefahrlos betreten werden können."
        },
        {
          question: "Wie lange dauert eine Schädlingsbekämpfung?",
          answer: "Die Dauer hängt von der Art und dem Ausmaß des Befalls ab. Eine Erstbehandlung dauert meist 1-2 Stunden. Bei hartnäckigem Befall sind mehrere Behandlungen nötig."
        },
        {
          question: "Bieten Sie auch Vorsorge an?",
          answer: "Ja, wir erstellen individuelle Vorsorgekonzepte und bieten regelmäßige Inspektionen an, besonders für gewerbliche Kunden."
        }
      ]}
      testimonials={[
        {
          name: "Christian Meyer",
          location: "Stuttgart",
          text: "Schnelle und effektive Hilfe bei Wespenbefall. Sehr professionelle Beratung und nachhaltige Lösung. Absolut empfehlenswert!",
          rating: 5
        },
        {
          name: "Sarah Fischer",
          location: "Berlin",
          text: "Hatte einen hartnäckigen Befall mit Bettwanzen. Das Team hat das Problem gründlich und diskret gelöst. Sehr zufrieden!",
          rating: 5
        },
        {
          name: "Robert Wagner",
          location: "Hamburg",
          text: "Regelmäßige Kontrollen in unserem Restaurant. Zuverlässiger Service und top Beratung zur Prävention.",
          rating: 5
        }
      ]}
    />
  );
} 