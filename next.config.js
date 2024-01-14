/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '"cp.ectn.uz"',
      },
    ],
  },
};

module.exports = nextConfig;
