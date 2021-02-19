const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");

(async () => {
    const files = await globby([
        "pages/**/*.{js,jsx,ts,tsx}",
        "{pages,articles,projects}/**/*.{md,mdx}",
        "!pages/_*.js",
        "!pages/api",
    ]);

    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${files
                .map((file) => {
                    let x = file.split(".");
                    const fileRoute = x[0];
                    console.log(fileRoute);

                    let pageRouteFullArgs = fileRoute.split("/");
                    const pageRouteArgs = pageRouteFullArgs.slice(1);
                    const pageRoute = pageRouteArgs.join("/");

                    if (pageRouteArgs.pop() == "index") {
                        return `
                        <url>
                            <loc>https://nicobachner.com</loc>
                        </url>
                    `;
                    } else {
                        return `
                        <url>
                            <loc>${
                                "https://nicobachner.com" + "/" + pageRoute
                            }</loc>
                        </url>
                    `;
                    }
                })
                .join("")}
        </urlset>
    `;

    const formatted = prettier.format(sitemap, {
        parser: "html",
        tabWidth: 4,
    });

    fs.writeFileSync("public/sitemap.xml", formatted);
})();
