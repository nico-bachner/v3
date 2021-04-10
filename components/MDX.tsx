import { useRouter } from 'next/router';

import Link from './Link';
import Image from 'next/image';

import { MDXProvider } from '@mdx-js/react';

interface Props {
    children: React.ReactNode;
}

interface LinkProps {
    href: string;
    children: React.ReactNode;
}

interface ImageProps {
    src: string;
}

const mdxComponents = {
    wrapper: (props: Props) => {
        const router = useRouter();
        return (
            <main>
                {props.children}

                <p className="max-w-2xl mx-auto my-20 text-right">
                    <Link
                        href={
                            'https://github.com/nico-bachner/v3/edit/main/pages' +
                            router.pathname +
                            '.mdx'
                        }
                    >
                        Edit on GitHub
                    </Link>
                </p>
            </main>
        );
    },
    h1: (props: Props) => (
        <h1 className="max-w-2xl mx-auto">{props.children}</h1>
    ),
    h2: (props: Props) => (
        <h2 className="max-w-2xl mx-auto mt-16">{props.children}</h2>
    ),
    h3: (props: Props) => (
        <h3 className="max-w-2xl mx-auto mt-12">{props.children}</h3>
    ),
    h4: (props: Props) => (
        <h4 className="max-w-2xl mx-auto mt-8">{props.children}</h4>
    ),
    p: (props: Props) => <p className="max-w-2xl mx-auto">{props.children}</p>,
    a: (props: LinkProps) => <Link href={props.href}>{props.children}</Link>,
    img: (props: ImageProps) => (
        <img
            src={props.src}
            className="max-w-2xl mx-auto my-4"
            loading="lazy"
        />
    ),
    ul: (props: Props) => (
        <ul className="max-w-2xl pl-4 mx-auto my-4 list-disc list-inside">
            {props.children}
        </ul>
    ),
    ol: (props: Props) => (
        <ol className="max-w-2xl pl-4 mx-auto my-4 list-decimal list-inside">
            {props.children}
        </ol>
    ),
    li: (props: Props) => <li className="my-1">{props.children}</li>,
    pre: (props: Props) => (
        <pre className="max-w-2xl px-3 py-1.5 mx-auto my-2 overflow-x-scroll font-mono border rounded">
            {props.children}
        </pre>
    ),
    inlineCode: (props: Props) => (
        <code className="px-1 py-0.5 rounded border font-mono text-base">
            {props.children}
        </code>
    ),
    Image: (props: any) => (
        <div className="max-w-3xl mx-auto my-8 sm:my-12">
            <Image {...props} />
        </div>
    ),
};

export default function MDX(props: Props) {
    return (
        <MDXProvider components={mdxComponents}>{props.children}</MDXProvider>
    );
}
