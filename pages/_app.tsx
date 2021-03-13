import "../styles/globals.css";

import Image from "next/image";

import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";

import type { AppProps } from "next/app";

import Meta from "../components/Meta";
import NavBar from "../components/NavBar";
import MobileNav from "../components/MobileNav";
import Footer from "../components/Footer";
import InternalLink from "../components/InternalLink";
import ExternalLink from "../components/ExternalLink";

import {
    externalPages,
    hiddenPages,
    otherPages,
    pagesTranslations,
} from "../content/pages";
import i18n from "../lib/i18n";

export default function App({ Component, pageProps }: AppProps) {
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
            <Meta
                title="Nico Bachner - Aspiring Open Sourcerer"
                description="High School Student and Aspiring Open Sourcerer living in Luxembourg"
            />

            <NavBar pages={pages} />
            <MobileNav pages={pages} />

            <div className="px-8 mx-auto max-w-prose sm:text-lg">
                <main
                    id="content"
                    className="text-gray-dark dark:text-gray-light"
                >
                    <MDXProvider
                        components={{
                            wrapper: (props: { children: React.ReactNode }) => (
                                <article {...props}>{props.children}</article>
                            ),
                            a: (props: {
                                href: string;
                                children: React.ReactNode;
                            }) => {
                                if (props.href.startsWith("/")) {
                                    return (
                                        <InternalLink href={props.href}>
                                            {props.children}
                                        </InternalLink>
                                    );
                                } else {
                                    return (
                                        <ExternalLink href={props.href}>
                                            {props.children}
                                        </ExternalLink>
                                    );
                                }
                            },
                            img: (props) => {
                                return <img src={props.src} loading="lazy" />;
                            },
                            Image,
                        }}
                    >
                        <Component {...pageProps} />
                    </MDXProvider>
                </main>

                <footer className="my-24">
                    <hr className="my-12" />
                    <Footer
                        pages={pages}
                        hiddenPages={hiddenPages}
                        otherPages={otherPages}
                        externalPages={externalPages}
                        className="text-gray"
                    />
                </footer>
            </div>
        </>
    );
}
