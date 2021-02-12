import Head from "next/head";

import Button from "@components/Button";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 | Nico Bachner</title>
            </Head>
            <h1>404</h1>
            <p className="text-2xl subtitle sm:text-3xl">Page Not Found</p>
            <p className="subtitle">
                It seems the page you were looking for does not exist. You
                should double-check the url to make sure you're looking for the
                right page.
            </p>
            <Button href="/" className="px-8 py-4 my-4 font-semibold">
                Return to Homepage
            </Button>
        </>
    );
}
