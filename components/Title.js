import Head from "next/head";

export default function Title(props) {
    return (
        <Head>
            <title>{props.children}</title>
        </Head>
    );
}
