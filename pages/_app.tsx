import '../styles/globals.css';

import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import MDX from '../components/MDX';
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';

import {
    mainPagesRoutes,
    hiddenPages,
    otherPages,
    externalPages,
} from '../lib/pages';
import { useI18n } from '../hooks/i18n';
import { translations } from '../i18n';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    const i18n = useI18n(translations);
    const mainPages = mainPagesRoutes.map((route, index) => {
        const page = {
            title: i18n.pages[index].title,
            slug: i18n.pages[index].slug,
            href: route,
        };
        return page;
    });

    return (
        <>
            <Meta
                title="Nico Bachner - Aspiring Open Sourcerer"
                description="High School Student and Aspiring Open Sourcerer currently living in Luxembourg"
            />

            <Navigation pages={mainPages} />

            <div className="px-8 mx-auto max-w-prose sm:text-lg">
                <MDX>
                    <Component {...pageProps} />
                </MDX>

                <footer className="my-20">
                    <hr className="my-16" />
                    <Footer
                        pages={mainPages}
                        hiddenPages={hiddenPages}
                        otherPages={otherPages}
                        externalPages={externalPages}
                    />
                </footer>
            </div>

            <MobileNavigation pages={mainPages} />
        </>
    );
}
