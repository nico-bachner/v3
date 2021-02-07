const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
});

module.exports = withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
    i18n: {
        locales: ["en", "dk", "fr", "de", "lu"],
        defaultLocale: "en",
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            require("./lib/sitemap");
        }

        return config;
    },
});
