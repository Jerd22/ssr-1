/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheMaxMemorySize: 0, // disable default in-memory caching
  reactStrictMode: false,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
