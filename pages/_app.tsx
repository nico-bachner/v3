import '@nico-bachner/colors';
import '@styles/global.css';
import '@nico-bachner/mdx/styles.css';

import { Footer, Navigation, MobileNavigation } from '@layout';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
    <>
        <Navigation />

        <div className="px-6">
            <Component {...pageProps} />
            <Footer />
        </div>

        <MobileNavigation />
    </>
);

export default App;
