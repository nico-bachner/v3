/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'da', 'fr', 'de', 'lb'],
        defaultLocale: 'en',
    },
};

module.exports = nextConfig;
