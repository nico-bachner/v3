import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@nico-bachner/css'

class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@193;234;284;344;417;505;612;742;900&family=Fira+Code:wght@417&display=swap"
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
