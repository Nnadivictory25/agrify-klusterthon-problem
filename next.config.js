const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
          remotePatterns: [{ hostname: "assets.website-files.com" }],
     },
}

module.exports = nextConfig
