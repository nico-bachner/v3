import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="color-scheme" content="light dark" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
