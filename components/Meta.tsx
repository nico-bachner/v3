import Head from 'next/head';

import { useRouter } from 'next/router';

interface MetaProps {
    title?: string;
    description?: string;
}

export default function Meta(meta: MetaProps) {
    const { pathname } = useRouter();

    const pageRoute = pathname.split('/');
    let page = ' ';
    if (pageRoute.length > 2) {
        const pageWords = pageRoute[2].split('-');
        const pageWordsCapitalised = pageWords.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        page = pageWordsCapitalised.join(' ');
    } else {
        page = pageRoute[1].charAt(0).toUpperCase() + pageRoute[1].slice(1);
    }

    return (
        <Head>
            <title>
                {pathname == '/'
                    ? 'Nico Bachner - Aspiring Open Sourcerer'
                    : `${meta.title ?? page} | Nico Bachner`}
            </title>
            <link rel="icon" href="/icon.svg" />
            <link
                crossOrigin="anonymous"
                rel="preload"
                href="/fonts/inter.woff2"
                as="font"
                type="font/woff2"
            />
            <link
                crossOrigin="anonymous"
                rel="preload"
                href="/fonts/fira-code.woff2"
                as="font"
                type="font/woff2"
            />
            <meta
                name="description"
                content={
                    meta.description ??
                    'High School Student and Aspiring Open Sourcerer currently living in Luxembourg'
                }
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:description"
                content={
                    meta.description ??
                    'High School Student and Aspiring Open Sourcerer currently living in Luxembourg'
                }
            />
        </Head>
    );
}
