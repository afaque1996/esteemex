/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Removing basePath since we're using a custom domain
}

export default nextConfig
