import NextLink from 'next/link';

export interface LinkProps {
    href: string;
}

const Link: React.FC<LinkProps & DefaultProps> = (link) => {
    switch (link.href.startsWith('/') || link.href.startsWith('#')) {
        case true:
            return (
                <NextLink href={link.href}>
                    <a id={link.id} className={link.className}>
                        {link.children}
                    </a>
                </NextLink>
            );
        case false:
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
