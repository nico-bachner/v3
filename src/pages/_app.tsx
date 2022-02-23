import '@nico-bachner/mdx/styles.css'
import '@nico-bachner/design-tokens/tokens.css'

import Inspect from 'inspx'
import { ThemeProvider, globalStyles } from '@nico-bachner/css'

import type { AppProps } from 'next/app'

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
    globalStyles()

    return (
        <Inspect>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </Inspect>
    )
}

export default App
