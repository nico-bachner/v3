import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import styles from './Link.module.css';

interface LinkProps {
    variant?: 'highlight' | 'primary' | 'secondary' | 'disabled';
    external?: boolean;
}

const Link: React.FC<LinkProps & NextLinkProps> = ({
    variant,
    external,
    children,
    ...link
}) => {
    const externalProps = external && {
        target: '_blank',
        rel: 'noopener noreferrer',
    };

    return (
        <NextLink {...link}>
            <a className={styles[variant ?? 'default']} {...externalProps}>
                {children}
            </a>
        </NextLink>
    );
};

export default Link;
