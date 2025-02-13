const { PHASE_DEVELOPMENT_SERVER } = require('next/dist/shared/lib/constants');
const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      }
    ],
  },
  reactStrictMode: true,
  redirects: () => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
    return isDev? [] : [{
      source: '/preview',
      destination: '/',
      permanent: false,
    }];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
});
