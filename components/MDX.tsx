import { useRouter } from 'next/router';

import Link from './Link';

import { MDXComponents } from './MDXComponents';
import { MDXProvider } from '@mdx-js/react';

interface Props {
    children: React.ReactNode;
}

const components = {
    ...MDXComponents,
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
};

export default function MDX(props: Props) {
    const router = useRouter();

    return (
        <MDXProvider
            components={router.query == {} ? MDXComponents : components}
        >
            {props.children}
        </MDXProvider>
    );
}
