import "../styles/globals.css";

import Image from "next/image";

import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";

import Meta from "../components/Meta";
import NavBar from "../components/NavBar";
import MobileNav from "../components/MobileNav";
import Footer from "../components/Footer";
import InternalLink from "../components/InternalLink";
import ExternalLink from "../components/ExternalLink";

import { pagesTranslations } from "../translations/pages";
import i18n from "../lib/i18n";

export default function App({ Component, pageProps }) {
    const { locale } = useRouter();
    const translatedPages = i18n(locale, pagesTranslations);
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
            <Meta description="Aspiring Open Sourcerer" />

            <NavBar pages={pages} />
            <MobileNav pages={pages} />

            <div className="px-8 mx-auto max-w-prose sm:text-lg">
                <main
                    id="content"
                    className="text-gray-dark dark:text-gray-light"
                >
                    <MDXProvider
                        components={{
                            wrapper: (props) => (
                                <article {...props}>{props.children}</article>
                            ),
                            a: (props) => {
                                if (props.href.startsWith("/")) {
                                    return (
                                        <InternalLink {...props}>
                                            {props.children}
                                        </InternalLink>
                                    );
                                } else {
                                    return (
                                        <ExternalLink {...props}>
                                            {props.children}
                                        </ExternalLink>
                                    );
                                }
                            },
                            Image,
                        }}
                    >
                        <Component {...pageProps} />
                    </MDXProvider>
                </main>

                <footer className="my-24">
                    <hr className="my-12" />
                    <Footer pages={pages} className="text-gray" />
                </footer>
            </div>
        </>
    );
}
