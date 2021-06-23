import '../styles/global.css';
import '../styles/remark.css';
import '../styles/rehype.css';

import { Footer, Navigation, MobileNavigation } from '@components/layout';

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
