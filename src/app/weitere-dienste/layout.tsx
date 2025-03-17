import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weitere Dienste | 24/7 Notdienst für alle Fälle',
  description: 'Entdecken Sie unser umfangreiches Angebot an zusätzlichen Dienstleistungen. Von Wasserschadensanierung bis Gartenpflege - professionell, zuverlässig und rund um die Uhr verfügbar.',
  keywords: 'Wasserschaden, Entrümpelung, Gartenpflege, Renovierung, Hausmeisterservice, Notdienst Paderborn, 24/7 Service',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 