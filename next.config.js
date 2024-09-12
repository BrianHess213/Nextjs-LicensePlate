/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",

          protocol: 'https',
          hostname: 'us-west-2.storage.xata.sh',
        

        },
      ],
    },
    experimental: {
      taint: true,
    },
    // ...other config settings
  };
  
  module.exports = nextConfig;