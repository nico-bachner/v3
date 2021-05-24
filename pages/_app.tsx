import '../styles/base.css';
import '../styles/components.css';
import '../styles/utilities.css';

import Head from 'next/head';
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';
import MobileNavigation from '@components/MobileNavigation';

import { useI18n } from '@lib/hooks/i18n';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
    const i18n = useI18n();

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.svg" />
                <link
                    crossOrigin="anonymous"
                    rel="preload"
                    href="/fonts/Inter.woff2"
                    as="font"
                    type="font/woff2"
                />
            </Head>

            <Navigation pages={i18n.pages} />

            <div className="mx-6">
                <Component {...pageProps} />
                <div className="max-w-2xl mx-auto my-20">
                    <hr className="border" />
                    <Footer pages={i18n.pages} links={i18n.links} />
                </div>
            </div>

            <MobileNavigation pages={i18n.pages} />
        </>
    );
};

export default App;
