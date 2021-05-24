import NextLink from 'next/link';

export interface LinkProps {
    href: string;
    as?: string;
    className?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
}

const Link: React.FC<LinkProps> = (link) => {
    if (link.href.startsWith('/') || link.href.startsWith('#')) {
        return (
            <NextLink {...link}>
                <a className={link.className ?? 'text-azure hover:underline'}>
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
                className={link.className ?? 'text-azure hover:underline'}
            >
                {link.children}
            </a>
        );
    }
};

export default Link;
