import NextLink from 'next/link';

export interface LinkProps {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
}

const Link: React.FC<LinkProps & DefaultProps> = (link) => {
    if (link.href.startsWith('/') || link.href.startsWith('#')) {
        return (
            <NextLink {...link}>
                <a id={link.id} className={link.className}>
                    {link.children}
                </a>
            </NextLink>
        );
    } else {
        return (
            <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                id={link.id}
                className={link.className}
            >
                {link.children}
            </a>
        );
    }
};

export default Link;
