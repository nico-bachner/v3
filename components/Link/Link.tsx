import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import styles from './Link.module.css';

interface LinkProps {
    variant?: 'highlight' | 'primary' | 'secondary' | 'disabled';
    external?: boolean;
}

const Link: React.FC<LinkProps & NextLinkProps> = ({
    children,
    variant,
    external,
    ...link
}) => (
    <NextLink {...link}>
        <a
            className={styles[variant ?? 'default']}
            {...(external && {
                target: '_blank',
                rel: 'noopener noreferrer',
            })}
        >
            {children}
        </a>
    </NextLink>
);

export default Link;
