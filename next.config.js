/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        // Subdomain-Handling für Dienstleistungen
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: '(?<subdomain>[^.]+)\\.expertevorort\\.de',
            },
          ],
          destination: '/:subdomain/:path*',
        },
      ],
    }
  },
  images: {
    unoptimized: true,
    domains: ['expertevorort.de'],
  },
  // IONOS-spezifische Konfiguration
  output: 'export',
  poweredByHeader: false,
  compress: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'rohrreinigung.expertevorort.de',
          },
        ],
        destination: '/rohrreinigung',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'schluesseldienst.expertevorort.de',
          },
        ],
        destination: '/schluesseldienst',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'sanitaer.expertevorort.de',
          },
        ],
        destination: '/sanitaer',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'schaedlingsbekaempfung.expertevorort.de',
          },
        ],
        destination: '/schaedlingsbekaempfung',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'elektro.expertevorort.de',
          },
        ],
        destination: '/elektro',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'entruempelung.expertevorort.de',
          },
        ],
        destination: '/entruempelung',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig 