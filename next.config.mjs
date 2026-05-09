/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**"
      }
    ]
  },
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
