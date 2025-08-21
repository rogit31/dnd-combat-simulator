import type { NextConfig } from "next";

const nextConfig = {
    webpack: (config : NextConfig ) => {
        if (true) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                path: false,
                crypto: false,
            };
        }
        return config;
    }
}

export default nextConfig;
