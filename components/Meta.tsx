import Head from 'next/head';

import { useRouter } from 'next/router';

export default function Meta(props: { title: string; description: string }) {
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
                {pageRoute[1] == '' ? props.title : `${page} | Nico Bachner`}
            </title>
            <link rel="icon" href="/icon.svg" />
            <link
                crossOrigin="anonymous"
                rel="preload"
                href="/fonts/Inter.woff2"
                as="font"
                type="font/woff2"
            />
            <link
                crossOrigin="anonymous"
                rel="preload"
                href="/fonts/FiraCode.woff2"
                as="font"
                type="font/woff2"
            />
            <meta name="description" content={props.description} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={props.description} />
        </Head>
    );
}
