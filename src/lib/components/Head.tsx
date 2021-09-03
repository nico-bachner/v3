import { useRouter } from 'next/router';
import { useTranslation } from '$lib/hooks/useTranslation';

import NextHead from 'next/head';

type HeadProps = {
    title: string;
    type?: 'article' | 'website';
    image?: string;
    url?: string;
    description?: string;
    author?: string;
};

const Head: React.FC<HeadProps> = ({
    title,
    type = 'website',
    image,
    url,
    description,
    author,
}) => {
    const { locale, locales, asPath } = useRouter();
    const { description: defaultDescription } = useTranslation();
    const defaultUrl = 'https://nicobachner.com/' + locale + asPath;

    return (
        <NextHead>
            <title>{title}</title>
            <meta name="author" content={author ?? 'Nico Bachner'} />
            <meta
                name="description"
                content={description ?? defaultDescription}
            />
            <link rel="canonical" href={url ?? defaultUrl} />
            {locales!.map((locale) => (
                <link
                    key={locale}
                    rel="alternate"
                    href={'https://nicobachner.com/' + locale + asPath}
                    hrefLang={locale}
                />
            ))}

            <meta property="og:title" content={title} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url ?? defaultUrl} />
            <meta
                property="og:image"
                content={
                    image ??
                    `https://og-image.vercel.app/${encodeURIComponent(
                        title
                    )}.png`
                }
            />
            <meta
                property="og:description"
                content={description ?? defaultDescription}
            />
            <meta property="og:site_name" content="Nico Bachner" />
            <meta property="og:locale" content={locale} />
            {locales!.map((locale) => (
                <meta
                    key={locale + 'og'}
                    property="og:locale:alternate"
                    content={locale}
                />
            ))}
        </NextHead>
    );
};

export default Head;
