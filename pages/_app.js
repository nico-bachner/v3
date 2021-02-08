import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";

import Head from "next/head";
import Link from "next/link";

import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import MobileNav from "../components/layout/MobileNav";

function App({ Component, pageProps }) {
    const CustomLink = (props) => {
        const href = props.href;
        const isInternalLink =
            href && (href.startsWith("/") || href.startsWith("#"));

        if (isInternalLink) {
            return (
                <Link href={href}>
                    <a {...props} />
                </Link>
            );
        }

        return <a target="_blank" rel="noopener noreferrer" {...props} />;
    };

    const mdxComponents = {
        wrapper: (props) => <article {...props} />,
        a: CustomLink,
    };

    const meta = {
        description: "Aspiring Open Sourcerer",
    };

    const pages = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "About",
            url: "/about",
        },
        {
            title: "Projects",
            url: "/projects",
        },
        {
            title: "Articles",
            url: "/articles",
        },
    ];

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

            <NavBar pages={pages} />
            <MobileNav pages={pages} />

            <main id="content" className="px-8 mx-auto max-w-prose">
                <MDXProvider components={mdxComponents}>
                    <Component {...pageProps} />
                </MDXProvider>
            </main>

            <Footer pages={pages} />
        </>
    );
}

export default App;
