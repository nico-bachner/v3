import NextHead from 'next/head';

type HeadProps = {
    title: string;
    description?: string;
    image?: string;
    url?: string;
};

const Head: React.FC<HeadProps> = ({ title, description, image, url }) => (
    <NextHead>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        {description && (
            <>
                <meta name="description" content={description} />
                <meta name="og:description" content={description} />
            </>
        )}
        {image ? (
            <meta name="og:image" content={image} />
        ) : (
            <meta
                name="og:image"
                content={`https://og-image.vercel.app/${encodeURIComponent(
                    title
                )}.png`}
            />
        )}
        {url && (
            <>
                <link rel="canonical" href={url} />
                <meta property="og:url" content={url} />
            </>
        )}
    </NextHead>
);

export default Head;
