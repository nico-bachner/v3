import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { usePath } from '@nico-bachner/react-hooks'
import { useTranslation } from '@lib/hooks/useTranslation'

import NextHead from 'next/head'

type HeadProps = {
    title: string
    type?: 'article' | 'website'
    image?: string
    url?: string
    description?: string
    author?: string
    index?: boolean
}

const Head: React.FC<HeadProps> = ({
    title,
    type = 'website',
    image = `https://og-image.vercel.app/${encodeURIComponent(
        title
    )}.png?images=https://nicobachner.com/images/icon.png`,
    url: canonicalUrl,
    description,
    author = 'Nico Bachner',
    index = true,
}) => {
    const { locale, locales } = useRouter()
    const path = usePath()
    const { bio } = useTranslation()

    const url = 'https://nicobachner.com/' + locale + path

    useEffect(() => {
        const [language] = locale!.split('-')

        if (index) {
            fetch(`/api/visit`, {
                method: 'POST',
                body: JSON.stringify({
                    path: encodeURIComponent(path),
                    language,
                }),
            })
        }
    }, [path, locale, index])

    return (
        <NextHead>
            <title>{title}</title>
            <meta name="author" content={author} />
            <meta name="description" content={description ?? bio.description} />
            <link rel="canonical" href={canonicalUrl ?? url} />
            {!canonicalUrl &&
                locales!.map((locale) => (
                    <link
                        key={locale}
                        rel="alternate"
                        href={'https://nicobachner.com/' + locale + path}
                        hrefLang={locale}
                    />
                ))}

            <meta property="og:title" content={title} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl ?? url} />
            <meta property="og:image" content={image} />
            <meta
                property="og:description"
                content={description ?? bio.description}
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
    )
}

export default Head
