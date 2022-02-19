/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.btgpactual.com",
      "assets.website-files.com",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
