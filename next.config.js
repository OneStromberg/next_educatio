/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  // output: 'export',
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
  },
  env: {
    API_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN,
  }
};

module.exports = nextConfig
