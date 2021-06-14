import NextHead from 'next/head';

import { useEffect } from 'react';

interface HeadProps {
    title: string;
    description: string;
    slug: string;
    type?: string;
}

const Head: React.FC<HeadProps> = ({ title, description, slug, type }) => {
    useEffect(() => {
        fetch(type ? `/api/views/${slug}?type=${type}` : `/api/views/${slug}`, {
            method: 'POST',
        });
    }, [slug, type]);

    return (
        <NextHead>
            <title>{title}</title>
            <meta name="og:title" content={title} />
            <meta name="description" content={description} />
            <meta name="og:description" content={description} />
            <meta
                name="og:image"
                content={`https://og-image.vercel.app/${encodeURIComponent(
                    title
                )}.png`}
            />
        </NextHead>
    );
};

export default Head;
