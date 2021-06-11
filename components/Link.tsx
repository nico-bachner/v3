import NextLink from 'next/link';

export interface LinkProps {
    href: string;
    locale?: string;
}

const Link: React.FC<LinkProps & DefaultProps> = (link) => {
    switch (link.href.startsWith('/') || link.href.startsWith('#')) {
        case true:
            return (
                <NextLink href={link.href} locale={link.locale}>
                    <a {...link}>{link.children}</a>
                </NextLink>
            );
        case false:
            return (
                <a {...link} target="_blank" rel="noopener noreferrer">
                    {link.children}
                </a>
            );
    }
};

export default Link;
