import styles from './Link.module.css';

import NextLink from 'next/link';
import React from 'react';

type LinkProps = {
    href: string;
    variant?: 'default' | 'highlight' | 'primary' | 'secondary' | 'disabled';
    onClick?: React.ChangeEventHandler<HTMLAnchorElement>;
    className?: string;
};

/**
 * Only works in Next.js because it leverages the Next.js router.
 */
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
        className: [styles.link, styles[variant], className].join(' '),
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
