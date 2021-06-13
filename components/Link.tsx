import NextLink from 'next/link';

export interface LinkProps {
    href: string;
    locale?: string;
}

const Link: React.FC<LinkProps & DefaultProps> = ({
    id,
    href,
    locale,
    className,
    children,
}) => {
    switch (href.startsWith('/') || href.startsWith('#')) {
        case true:
            return (
                <NextLink href={href} locale={locale}>
                    <a id={id} className={className}>
                        {children}
                    </a>
                </NextLink>
            );
        case false:
            return (
                <a
                    id={id}
                    href={href}
                    className={className}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            );
    }
};

export default Link;
