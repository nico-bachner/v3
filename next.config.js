const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = withMDX({
    pageExtensions: ['ts', 'tsx', 'mdx'],
    i18n: {
        locales: ['en', 'da', 'fr', 'de', 'lu'],
        defaultLocale: 'en',
    },
});
