import '$lib/styles/global.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { DefaultLayout } from '$lib/layouts';

import type { NextPage } from 'next';
import type { AppProps as NextAppProps } from 'next/app';

type GetLayout = (page: NextPage | React.ReactElement<any, any>) => JSX.Element;

type AppProps = {
    Component: NextAppProps['Component'] & { getLayout: GetLayout };
    pageProps: NextAppProps['pageProps'];
};

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
        fetch(`/api/views/${path}`, {
            method: 'POST',
        });
    }, [path]);

    const getLayout =
        Component.getLayout ??
        ((page: NextPage) => <DefaultLayout>{page}</DefaultLayout>);

    return getLayout(<Component {...pageProps} />);
};

export default App;
