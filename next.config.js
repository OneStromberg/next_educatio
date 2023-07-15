/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  output: "server",
  images: {
    domains: [process.env.APP_DOMAIN],
  },
  env: {
    API_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN,
    APP_DOMAIN: process.env.APP_DOMAIN,
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  }
};

module.exports = nextConfig
