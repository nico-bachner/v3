const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
});

module.exports = withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
    i18n: {
        locales: ["en", "da", "fr", "de", "lu"],
        defaultLocale: "en",
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            require("./lib/sitemap");
        }

        return config;
    },
});
