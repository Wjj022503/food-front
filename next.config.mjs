/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'appfood-back-gxd7g3hacpacf7ha.canadacentral-01.azurewebsites.net',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;