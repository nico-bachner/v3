import '@nico-bachner/css';
import '@nico-bachner/mdx/styles.css';

import type { AppProps } from 'next/app';

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;
