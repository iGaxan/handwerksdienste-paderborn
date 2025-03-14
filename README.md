# ServicePro Website

Eine professionelle Dienstleistungs-Website für ServicePro in Paderborn, entwickelt mit Next.js und TypeScript.

## Technologien

- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint

## Voraussetzungen

- Node.js 18.17 oder höher
- npm oder yarn

## Installation

1. Klonen Sie das Repository:
```bash
git clone [repository-url]
cd servicepro-website
```

2. Installieren Sie die Abhängigkeiten:
```bash
npm install
# oder
yarn install
```

3. Erstellen Sie eine `.env.local` Datei im Root-Verzeichnis (falls benötigt):
```env
# Beispiel-Umgebungsvariablen
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Entwicklung

Starten Sie den Entwicklungsserver:

```bash
npm run dev
# oder
yarn dev
```

Die Website ist dann unter `http://localhost:3000` erreichbar.

## Build

Erstellen Sie einen Produktions-Build:

```bash
npm run build
# oder
yarn build
```

Starten Sie den Produktionsserver:

```bash
npm start
# oder
yarn start
```

## Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Homepage
│   └── [service]/         # Service-Seiten
├── components/            # React Komponenten
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServiceCard.tsx
│   └── ContactSection.tsx
└── styles/               # Globale Styles
    └── globals.css
```

## Features

- Responsives Design
- SEO-optimiert
- TypeScript für bessere Entwicklererfahrung
- Tailwind CSS für modernes Styling
- Komponenten-basierte Architektur
- Kontaktformular
- Service-Seiten mit detaillierten Informationen

## Lizenz

Alle Rechte vorbehalten. © 2024 ServicePro 