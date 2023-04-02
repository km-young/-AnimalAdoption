const path = require('path'); // 1. path 선언

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')], // 2. sassOptions 옵션 추가
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.animal.go.kr',
        port: '',
        pathname: '/files/shelter/**',
      },
    ],
  },
};

module.exports = nextConfig;
