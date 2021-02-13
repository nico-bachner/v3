import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export const MDXComponents = {
    Image: (props) => {
        return <Image {...props} />;
    },
    wrapper: (props) => (
        <article className="mx-auto max-w-prose" {...props}>
            {props.children}
        </article>
    ),
    a: (props) => {
        if (props.href.startsWith("/")) {
            return (
                <Link href={href}>
                    <a className="link" {...props} />
                </Link>
            );
        }

        return (
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                {...props}
            />
        );
    },
};
