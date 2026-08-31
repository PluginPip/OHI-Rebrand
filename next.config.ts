import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.weserv.nl' },
      { protocol: 'https', hostname: 'www.ohihealthessentials.co.uk' }
    ]
  }
};
export default nextConfig;
