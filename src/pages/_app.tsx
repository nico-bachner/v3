import '@nico-bachner/css';
import '@nico-bachner/mdx/styles.css';

import NavBar from '@lib/components/NavBar';
import BottomNav from '@lib/components/BottomNav';
import Footer from '@lib/components/Footer';

import type { AppProps } from 'next/app';

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
            <BottomNav />
        </>
    );
};

export default App;
