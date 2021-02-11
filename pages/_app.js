import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import MobileNav from "../components/layout/MobileNav";

function App({ Component, pageProps }) {
    const mdxComponents = {
        Image: (props) => {
            return <Image {...props} />;
        },
        wrapper: (props) => <article {...props} />,
        a: (props) => {
            const href = props.href;
            const isInternalLink =
                href && (href.startsWith("/") || href.startsWith("#"));

            if (isInternalLink) {
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
    };

    const meta = {
        description: "Aspiring Open Sourcerer",
    };

    const { locale } = useRouter();

    const pages =
        locale == "lu"
            ? [
                  {
                      title: "Heem",
                      href: "/",
                  },
                  {
                      title: "Iwwert mech",
                      slug: "iwwert-mech",
                      href: "/about",
                  },
                  {
                      title: "Projeten",
                      slug: "projeten",
                      href: "/projects",
                  },
                  {
                      title: "Artikelen",
                      slug: "artikelen",
                      href: "/articles",
                  },
              ]
            : locale == "de"
            ? [
                  {
                      title: "Heim",
                      href: "/",
                  },
                  {
                      title: "Über mich",
                      slug: "ueber-mich",
                      href: "/about",
                  },
                  {
                      title: "Projekte",
                      slug: "projekte",
                      href: "/projects",
                  },
                  {
                      title: "Artikel",
                      slug: "artikel",
                      href: "/articles",
                  },
              ]
            : locale == "fr"
            ? [
                  {
                      title: "Accueil",
                      href: "/",
                  },
                  {
                      title: "Sur moi",
                      slug: "sur-moi",
                      href: "/about",
                  },
                  {
                      title: "Projets",
                      slug: "projets",
                      href: "/projects",
                  },
                  {
                      title: "Articles",
                      slug: "articles",
                      href: "/articles",
                  },
              ]
            : locale == "da"
            ? [
                  {
                      title: "Hjem",
                      href: "/",
                  },
                  {
                      title: "Om Mig",
                      slug: "om-mig",
                      href: "/about",
                  },
                  {
                      title: "Projekter",
                      slug: "projekter",
                      href: "/projects",
                  },
                  {
                      title: "Artikler",
                      slug: "artikler",
                      href: "/articles",
                  },
              ]
            : [
                  {
                      title: "Home",
                      href: "/",
                  },
                  {
                      title: "About",
                      slug: "about",
                      href: "/about",
                  },
                  {
                      title: "Projects",
                      slug: "projects",
                      href: "/projects",
                  },
                  {
                      title: "Articles",
                      slug: "projects",
                      href: "/articles",
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
