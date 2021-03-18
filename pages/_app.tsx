import "../styles/globals.css";

import Meta from "../components/Meta";
import Navigation from "../components/Navigation";
import MDX from "../components/MDX";
import Footer from "../components/Footer";

import { useI18n } from "../lib/i18n";

import type { AppProps } from "next/app";

import {
    externalPages,
    hiddenPages,
    otherPages,
    pagesTranslations,
} from "../content/pages";

export default function App({ Component, pageProps }: AppProps) {
    const translatedPages = useI18n(pagesTranslations, "en");
    const pageRoutes = ["/", "/about", "/projects", "/articles"];
    const pages = pageRoutes.map((route, index) => {
        const page = {
            title: translatedPages[index].title,
            slug: translatedPages[index].slug,
            href: route,
        };
        return page;
    });

    return (
        <>
            <Meta
                title="Nico Bachner - Aspiring Open Sourcerer"
                description="High School Student and Aspiring Open Sourcerer currently living in Luxembourg"
            />

            <Navigation pages={pages} />

            <div className="px-8 mx-auto max-w-prose sm:text-lg">
                <main
                    id="content"
                    className="text-gray-dark dark:text-gray-light"
                >
                    <MDX>
                        <Component {...pageProps} />
                    </MDX>
                </main>

                <footer className="my-24">
                    <hr className="my-12" />
                    <Footer
                        pages={pages}
                        hiddenPages={hiddenPages}
                        otherPages={otherPages}
                        externalPages={externalPages}
                    />
                </footer>
            </div>
        </>
    );
}
