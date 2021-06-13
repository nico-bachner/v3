import NextHead from 'next/head';

import { useEffect } from 'react';

interface HeadProps {
    title: string;
    description: string;
    slug: string;
    type?: string;
}

const Head: React.FC<HeadProps> = (head) => {
    useEffect(() => {
        fetch(
            head.type
                ? `/api/views/${head.slug}?type=${head.type}`
                : `/api/views/${head.slug}`,
            {
                method: 'POST',
            }
        );
    }, [head]);

    return (
        <NextHead>
            <title>{head.title}</title>
            <meta name="og:title" content={head.title} />
            <meta name="description" content={head.description} />
            <meta name="og:description" content={head.description} />
            <meta
                name="og:image"
                content={`https://og-image.vercel.app/${encodeURIComponent(
                    head.title
                )}.png`}
            />
        </NextHead>
    );
};

export default Head;
