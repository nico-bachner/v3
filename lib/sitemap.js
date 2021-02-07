const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");

(async () => {
    const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
    const pages = await globby([
        "pages/**/*.{js,jsx,ts,tsx,md,mdx}",
        "data/**/*.mdx",
        "!pages/_*.js",
        "!pages/api",
    ]);

    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
                .map((page) => {
                    const route = page
                        .replace("pages", "")
                        .replace("data", "")
                        .replace("/index", "")
                        .replace(".js", "")
                        .replace(".md", "")
                        .replace(".mdx", "");
                    return `
                        <url>
                            <loc>${`https://nicobachner.com${route}`}</loc>
                        </url>
                    `;
                })
                .join("")}
        </urlset>
    `;

    const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: "html",
    });

    // eslint-disable-next-line no-sync
    fs.writeFileSync("public/sitemap.xml", formatted);
})();
