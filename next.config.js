/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['lodash-es'],
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `https://api.sttock.co.kr/api/v1/:path*`,
      },
    ];
  }
}

module.exports = nextConfig
