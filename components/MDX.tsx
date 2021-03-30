import Image from 'next/image';
import { useRouter } from 'next/router';

import Link from './Link';

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
            <main {...props} className="mx-auto max-w-prose">
                {props.children}

                <p className="mt-12 text-right text-blue hover:underline">
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
    h2: (props: Props) => <h2 className="mt-12 mb-6">{props.children}</h2>,
    h3: (props: Props) => <h3 className="mt-8">{props.children}</h3>,
    h4: (props: Props) => <h4 className="mt-6">{props.children}</h4>,
    p: (props: Props) => <p className="my-2">{props.children}</p>,
    a: (props: LinkProps) => (
        <Link href={props.href} className="hover:underline text-blue">
            {props.children}
        </Link>
    ),
    img: (props: ImageProps) => (
        <img src={props.src} className="my-4" loading="lazy" />
    ),
    ul: (props: Props) => (
        <ul className="pl-4 my-4 list-disc list-inside">{props.children}</ul>
    ),
    ol: (props: Props) => (
        <ol className="pl-4 my-4 list-decimal list-inside">{props.children}</ol>
    ),
    pre: (props: Props) => (
        <pre className="px-4 py-2 mt-4 mb-6 overflow-x-scroll font-mono rounded text-gray-strongest bg-gray-lightest">
            {props.children}
        </pre>
    ),
    inlineCode: (props: Props) => (
        <code className="px-1.5 py-0.5 rounded font-mono text-gray-strongest bg-gray-lightest">
            {props.children}
        </code>
    ),
    Image,
};

export default function MDX(props: Props) {
    return (
        <MDXProvider components={mdxComponents}>{props.children}</MDXProvider>
    );
}
