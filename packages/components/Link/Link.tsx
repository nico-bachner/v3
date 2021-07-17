import styles from './Link.module.css';

import NextLink from 'next/link';

import type { LinkProps as NextLinkProps } from 'next/link';

type LinkProps = NextLinkProps & {
    variant?: 'highlight' | 'primary' | 'secondary' | 'disabled';
};

const Link: React.FC<LinkProps> = ({
    children,
    variant = 'default',
    ...link
}) => (
    <NextLink {...link}>
        {link.href.toString().startsWith('') ? (
            <a className={[styles.link, styles[variant]].join(' ')}>
                {children}
            </a>
        ) : (
            <a
                target="_blank"
                rel="noopener noreferrer"
                className={[styles.link, styles[variant]].join(' ')}
            >
                {children}
            </a>
        )}
    </NextLink>
);

export default Link;
