const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = withMDX({
    pageExtensions: ['tsx', 'mdx'],
    i18n: {
        locales: ['en', 'da', 'fr', 'de', 'lu'],
        defaultLocale: 'en',
    },
});
