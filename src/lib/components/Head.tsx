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
};

const Head: React.FC<HeadProps> = ({
    title,
    type = 'website',
    image,
    url,
    description,
    author,
}) => {
    const { pathname, query, asPath, locale, locales } = useRouter();
    const { general } = useTranslation();
    const defaultUrl = 'https://nicobachner.com/' + locale + asPath;

    const path = encodeURIComponent(
        pathname
            .split('/')
            .map((arg) => {
                if (arg.includes('[') && arg.includes(']')) {
                    const key = arg
                        .replace(/\[/g, '')
                        .replace(/\]/g, '')
                        .replace('...', '');

                    return query[key];
                }

                return arg;
            })
            .flat()
            .join('/')
    );

    useEffect(() => {
        const [language, location] = locale!.split('-');

        fetch(`/api/view`, {
            method: 'POST',
            body: JSON.stringify({
                path,
                language,
                location: location?.toLowerCase() ?? 'other',
            }),
        });
    }, [path, locale]);

    return (
        <NextHead>
            <title>{title}</title>
            <meta name="author" content={author ?? 'Nico Bachner'} />
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
        </NextHead>
    );
};

export default Head;
