import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const subdomain = hostname.split('.')[0]
  
  // Liste der gültigen Subdomains
  const validSubdomains = [
    'rohrreinigung',
    'schluesseldienst',
    'sanitaer',
    'schaedlingsbekaempfung',
    'elektro',
    'entruempelung'
  ]

  // Wenn es eine gültige Subdomain ist
  if (validSubdomains.includes(subdomain)) {
    // Erstelle die neue URL
    const url = request.nextUrl.clone()
    
    // Wenn wir auf der Root-Seite sind
    if (url.pathname === '/') {
      url.pathname = `/${subdomain}`
    } else {
      // Für alle anderen Pfade, füge die Subdomain als Prefix hinzu
      url.pathname = `/${subdomain}${url.pathname}`
    }
    
    return NextResponse.rewrite(url)
  }

  // Wenn keine gültige Subdomain, normal weitermachen
  return NextResponse.next()
}

// Konfiguriere die Middleware nur für die Hauptdomain und Subdomains
export const config = {
  matcher: [
    // Exclude files
    '/((?!api|_next|_static|_vercel|favicon.ico|robots.txt).*)',
  ],
} 