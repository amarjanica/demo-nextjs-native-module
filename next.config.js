/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.extensions.push('.node');
    config.module.rules.push({
      test: /\.node$/,
      parser: {amd: false},
      use: {
        loader: '@vercel/webpack-asset-relocator-loader',
          options: {
          outputAssetBase: 'native-assets',
            production: process.env.NODE_ENV === 'production',
            debugLog: true,
            emitDirnameAll: true,
        }
      }
    });
    return config;
  }
}

module.exports = nextConfig
