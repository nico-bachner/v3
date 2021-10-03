import classes from './Link.module.css';

import NextLink from 'next/link';

type LinkProps = {
    href: string;
    variant?: 'default' | 'highlight' | 'primary' | 'secondary' | 'disabled';
    className?: string;
};

const Link: React.FC<LinkProps> = ({
    children,
    href,
    variant = 'default',
    className,
}) => {
    const props = {
        onClick: () => {
            fetch(`/api/click`, {
                method: 'POST',
                body: JSON.stringify({
                    href: encodeURIComponent(href),
                }),
            });
        },
        className: [classes.link, classes[variant], className].join(' '),
    };

    if (href.startsWith('/')) {
        return (
            <NextLink href={href}>
                <a {...props}>{children}</a>
            </NextLink>
        );
    }

    if (href.startsWith('#')) {
        return (
            <a href={href} {...props}>
                {children}
            </a>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    );
};

export default Link;
