import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@nico-bachner/css'

class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@212;249;293;344;404;474;556;653;767;900&family=Fira+Code&display=swap"
                        rel="stylesheet"
                    />
                    <style
                        id="stitches"
                        dangerouslySetInnerHTML={{ __html: getCssText() }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
