import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from '@lib/hooks/useTranslation';

import NextHead from 'next/head';

type HeadProps = {
    title: string;
    type?: 'article' | 'website';
    image?: string;
    url?: string;
    description?: string;
    author?: string;
    index?: boolean;
};

const Head: React.FC<HeadProps> = ({
    title,
    type = 'website',
    image = `https://og-image.vercel.app/${encodeURIComponent(title)}.png`,
    url,
    description,
    author = 'Nico Bachner',
    index = true,
}) => {
    const { asPath, locale, locales } = useRouter();
    const { general } = useTranslation();

    const defaultUrl = 'https://nicobachner.com/' + locale + asPath;

    useEffect(() => {
        const [language, location] = locale!.split('-');

        fetch(`/api/view`, {
            method: 'POST',
            body: JSON.stringify({
                path: encodeURIComponent(asPath),
                language,
            }),
        });
    }, [asPath, locale]);

    return (
        <NextHead>
            <title>{title}</title>
            <meta name="author" content={author} />
            <meta
                name="description"
                content={description ?? general.description}
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
            <meta property="og:image" content={image} />
            <meta
                property="og:description"
                content={description ?? general.description}
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
            <meta name="robots" content={index ? 'index' : 'noindex'} />
        </NextHead>
    );
};

export default Head;
