import '../styles/root.css';
import '../styles/base.css';
import '../styles/components.css';
import '../styles/utilities.css';
import '../styles/animations.css';

import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import MDX from '../components/MDX';
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';

import { useI18n } from '../hooks/i18n';
import { translations } from '../i18n';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    const i18n = useI18n(translations, 'en');

    return (
        <>
            <Meta />

            <Navigation pages={i18n.pages} />

            <div className="mx-6">
                <MDX>
                    <Component {...pageProps} />
                </MDX>
                <div className="max-w-2xl mx-auto my-20">
                    <hr className="border border-gray-lighter" />
                    <Footer pages={i18n.pages} links={i18n.links} />
                </div>
            </div>

            <MobileNavigation pages={i18n.pages} />
        </>
    );
}
