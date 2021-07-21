import '$lib/styles/global.css';

import { DefaultLayout } from '$lib/layouts';

import type { NextPage } from 'next';
import type { AppProps as NextAppProps } from 'next/app';

type GetLayout = (page: NextPage | React.ReactElement<any, any>) => JSX.Element;

type AppProps = {
    Component: NextAppProps['Component'] & { getLayout: GetLayout };
    pageProps: NextAppProps['pageProps'];
};

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
    const getLayout =
        Component.getLayout ??
        ((page: NextPage) => <DefaultLayout>{page}</DefaultLayout>);

    return getLayout(<Component {...pageProps} />);
};

export default App;
