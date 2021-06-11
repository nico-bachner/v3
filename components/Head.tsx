import NextHead from 'next/head';

interface HeadProps {
    title: string;
    description: string;
}

const Head: React.FC<HeadProps> = (head) => (
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

export default Head;
