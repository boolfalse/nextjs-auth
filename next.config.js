/** @type {import('next').NextConfig} */
const nextConfig = {
    // https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites
    async rewrites() {
        return [
            // { source: '/:path*', destination: '/dashboard/:path*' },
            { source: '/client', destination: '/dashboard/client' },
            { source: '/denied', destination: '/dashboard/denied' },
            { source: '/member', destination: '/dashboard/member' },
            { source: '/public', destination: '/dashboard/public' },
            { source: '/users/:path*', destination: '/dashboard/users/:path*' },
        ];
    },
}

module.exports = nextConfig
