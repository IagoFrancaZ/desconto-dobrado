/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Adicione aqui domínios de imagens externas se necessário
    unoptimized: process.env.NODE_ENV !== 'production',
  },
};

module.exports = nextConfig; 