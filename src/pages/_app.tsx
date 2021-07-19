import styles from '$lib/styles/App.module.css';

import '$lib/styles/global.css';

import { Footer, Navigation, MobileNavigation } from '$lib/layout';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
    <>
        <Navigation />

        <div className={styles.app}>
            <Component {...pageProps} />
            <Footer />
        </div>

        <MobileNavigation />
    </>
);

export default App;
