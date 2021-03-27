import '../styles/globals.css';

import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import MDX from '../components/MDX';
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';

import { useI18n } from '../hooks/i18n';
import { translations } from '../i18n';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    const i18n = useI18n(translations);

    return (
        <>
            <Meta
                title="Nico Bachner - Aspiring Open Sourcerer"
                description="High School Student and Aspiring Open Sourcerer currently living in Luxembourg"
            />

            <Navigation pages={i18n.pages} />

            <div className="px-8 mx-auto max-w-prose sm:text-lg">
                <MDX>
                    <Component {...pageProps} />
                </MDX>

                <footer className="my-24">
                    <hr className="my-20" />
                    <Footer pages={i18n.pages} />
                </footer>
            </div>

            <MobileNavigation pages={i18n.pages} />
        </>
    );
}
