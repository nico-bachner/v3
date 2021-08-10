import classes from './Link.module.css';

import NextLink from 'next/link';

type LinkProps = {
    href: string;
    variant?: 'highlight' | 'primary' | 'secondary' | 'disabled';
    className?: string;
};

const Link: React.FC<LinkProps> = ({ children, href, variant, className }) => {
    if (href.startsWith('/')) {
        return (
            <NextLink href={href}>
                <a
                    className={[
                        classes.link,
                        classes[variant as string],
                        className,
                    ].join(' ')}
                >
                    {children}
                </a>
            </NextLink>
        );
    } else if (href.startsWith('#')) {
        return (
            <a
                href={href}
                className={[
                    classes.link,
                    classes[variant as string],
                    className,
                ].join(' ')}
            >
                {children}
            </a>
        );
    } else
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                    classes.link,
                    classes[variant as string],
                    className,
                ].join(' ')}
            >
                {children}
            </a>
        );
};

export default Link;
