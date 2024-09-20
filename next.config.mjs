const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
      },
    ],
  },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };

// Use the ES module export syntax
export default nextConfig;
