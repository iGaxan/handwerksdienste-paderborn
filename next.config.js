/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['expertevorort.de', 'images.unsplash.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/schluesseldienst/:city',
        destination: 'https://schluesseldienst.expertevorort.de/:city',
        permanent: true,
      },
      {
        source: '/rohrreinigung/:city',
        destination: 'https://rohrreinigung.expertevorort.de/:city',
        permanent: true,
      },
      {
        source: '/sanitaer/:city',
        destination: 'https://sanitaer.expertevorort.de/:city',
        permanent: true,
      },
      {
        source: '/schaedlingsbekaempfung/:city',
        destination: 'https://schaedlingsbekaempfung.expertevorort.de/:city',
        permanent: true,
      },
      {
        source: '/elektro/:city',
        destination: 'https://elektro.expertevorort.de/:city',
        permanent: true,
      },
      {
        source: '/entruempelung/:city',
        destination: 'https://entruempelung.expertevorort.de/:city',
        permanent: true,
      },
    ];
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
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig 