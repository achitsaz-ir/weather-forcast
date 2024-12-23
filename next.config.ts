import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.weatherbit.io',
                port: '',
                pathname: '/static/img/icons/**',
                search: ''
            }
        ]
    }
};

export default nextConfig;
