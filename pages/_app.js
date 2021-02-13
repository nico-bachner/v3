import "../styles/globals.css";

import Head from "next/head";

import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";

import Footer from "@components/layout/Footer";
import NavBar from "@components/layout/NavBar";
import MobileNav from "@components/layout/MobileNav";

import { pages } from "@utils/pages";
import { MDXComponents } from "@utils/mdxComponents";

function App({ Component, pageProps }) {
    const meta = {
        description: "Aspiring Open Sourcerer",
    };

    const { locale } = useRouter();
    const translatedPages =
        locale == "lu"
            ? pages.lu
            : locale == "de"
            ? pages.de
            : locale == "fr"
            ? pages.fr
            : locale == "da"
            ? pages.da
            : pages.en;

    return (
        <>
            <Head>
                <link rel="icon" href="/icon.svg" />
                <link
                    crossOrigin="anonymous"
                    rel="preload"
                    href="/fonts/inter.woff2"
                    as="font"
                    type="font/woff2"
                />
                <meta name="description" content={meta.description} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={meta.description} />
            </Head>

            <NavBar pages={translatedPages} />
            <MobileNav pages={translatedPages} />

            <main id="content" className="max-w-2xl px-8 mx-auto">
                <MDXProvider components={MDXComponents}>
                    <Component {...pageProps} />
                </MDXProvider>
            </main>

            <Footer pages={translatedPages} />
        </>
    );
}

export default App;
