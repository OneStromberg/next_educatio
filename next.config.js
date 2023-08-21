/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  output: "standalone",
  images: {
    domains: [process.env.APP_DOMAIN],
    optimized: true,
  },
  env: {
    API_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN,
    APP_DOMAIN: process.env.APP_DOMAIN,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
