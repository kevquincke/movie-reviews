/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { defaultLoaders }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'react-native': path.join(__dirname, 'node_modules', 'react-native-web'),
      },
      modules: [
        ...config.resolve.modules,
        path.resolve(__dirname, 'node_modules'),
      ],
      symlinks: false,
    }

    config.module.rules.push({
      test: /\.+(js|jsx)$/,
      use: defaultLoaders.babel,
      include: [path.resolve(__dirname, '..', 'shared')],
    })

    return config;
  },
}

module.exports = nextConfig
