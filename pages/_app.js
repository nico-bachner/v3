import "../styles/globals.css";

import Link from "next/link";
import Image from "next/image";

import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";

import Meta from "../components/Meta";
import NavBar from "../components/NavBar";
import MobileNav from "../components/MobileNav";
import Footer from "../components/Footer";

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

            <main
                id="content"
                className="px-8 mx-auto text-gray-600 sm:text-lg max-w-prose dark:text-gray-400"
            >
                <MDXProvider
                    components={{
                        Image: (props) => {
                            return <Image {...props} />;
                        },
                        wrapper: (props) => (
                            <article className="mx-auto max-w-prose" {...props}>
                                {props.children}
                            </article>
                        ),
                        a: (props) => {
                            if (props.href.startsWith("/")) {
                                return (
                                    <Link href={href}>
                                        <a className="link" {...props} />
                                    </Link>
                                );
                            }

                            return (
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                    {...props}
                                />
                            );
                        },
                    }}
                >
                    <Component {...pageProps} />
                </MDXProvider>
            </main>

            <Footer pages={pages} />
        </>
    );
}
