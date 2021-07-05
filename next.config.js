module.exports = {
    i18n: {
        locales: ['en', 'da', 'fr', 'de', 'lb'],
        defaultLocale: 'en',
    },
    async rewrites() {
        return [
            {
                source: '/design/:path*',
                destination: 'https://nico-design.vercel.app/design/:path*',
            },
        ];
    },
};
