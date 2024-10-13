// next.config.mjs
const nextConfig = {
    compiler: {
      styledComponents: true,  // styled-components 설정 활성화
    },
    images: {
      domains: ['www.animal.go.kr'],
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
  
  export default nextConfig;