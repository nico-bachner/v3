import NextHead from 'next/head';

type HeadProps = {
    title: string;
    description?: string;
    canonical_url?: string;
};

const Head: React.FC<HeadProps> = ({ title, description, canonical_url }) => (
    <NextHead>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta
            name="og:image"
            content={`https://og-image.vercel.app/${encodeURIComponent(
                title
            )}.png`}
        />
        {description && (
            <>
                <meta name="description" content={description} />
                <meta name="og:description" content={description} />
            </>
        )}
        {canonical_url && (
            <>
                <link rel="canonical" href={canonical_url} />
                <meta property="og:url" content={canonical_url} />
            </>
        )}
    </NextHead>
);

export default Head;
