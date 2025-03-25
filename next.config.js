/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['expertevorort.de'],
  },
  // Vercel-spezifische Konfiguration
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rohrreinigung.expertevorort.de',
          },
        ],
        destination: '/rohrreinigung/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'schluesseldienst.expertevorort.de',
          },
        ],
        destination: '/schluesseldienst/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sanitaer.expertevorort.de',
          },
        ],
        destination: '/sanitaer/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'schaedlingsbekaempfung.expertevorort.de',
          },
        ],
        destination: '/schaedlingsbekaempfung/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'elektro.expertevorort.de',
          },
        ],
        destination: '/elektro/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'entruempelung.expertevorort.de',
          },
        ],
        destination: '/entruempelung/:path*',
      },
    ];
  },
  // IONOS-spezifische Konfiguration
  poweredByHeader: false,
  compress: true,
  trailingSlash: true,
}

module.exports = nextConfig 