/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['lodash-es'],
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `http://44.210.56.132:8080/api/v1/:path*`,
      },
    ];
  }
}

module.exports = nextConfig
