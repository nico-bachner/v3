import NextLink from 'next/link';

export interface LinkProps {
    href: string;
    locale?: string;
    className?: string;
}

const Link: React.FC<LinkProps> = ({ href, locale, className, children }) => {
    if (href.startsWith('/') || href.startsWith('#')) {
        return (
            <NextLink href={href} locale={locale}>
                <a className={className}>{children}</a>
            </NextLink>
        );
    }

    return (
        <a
            href={href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
};

export default Link;
