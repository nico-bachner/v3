import styles from 'styles/App.module.css';

import 'styles/global.css';

import { Footer, Navigation, MobileNavigation } from 'layout';

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
