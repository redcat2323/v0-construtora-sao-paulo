/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    // Permitir SVGs de placeholder.svg
    // Se você usar um serviço de placeholder diferente, adicione o hostname aqui.
    // Para /placeholder.svg local, não é necessário, mas se for um serviço externo, sim.
    unoptimized: true,
  },
};

export default nextConfig;
