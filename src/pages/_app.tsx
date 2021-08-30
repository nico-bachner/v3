import '$lib/styles/global.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import NavBar from '$lib/components/NavBar';
import BottomNav from '$lib/components/BottomNav';
import Footer from '$lib/components/Footer';

import type { AppProps } from 'next/app';

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
    const { pathname, query } = useRouter();

    const path = encodeURIComponent(
        pathname
            .split('/')
            .map((arg) => {
                if (arg.includes('[') && arg.includes(']')) {
                    const key = arg
                        .replace(/\[/g, '')
                        .replace(/\]/g, '')
                        .replace('...', '');

                    return query[key];
                }

                return arg;
            })
            .flat()
            .join('/')
    );

    useEffect(() => {
        fetch(`/api/analytics/views/${path}`, {
            method: 'POST',
        });
    }, [path]);

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
