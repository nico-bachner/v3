import '../styles/global.css';
import '../styles/mdx.css';

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
            <Navigation pages={i18n.pages} />

            <div className="px-6">
                <Component {...pageProps} />
                <Footer pages={i18n.pages} links={i18n.links} />
            </div>

            <MobileNavigation pages={i18n.pages} />
        </>
    );
};

export default App;
