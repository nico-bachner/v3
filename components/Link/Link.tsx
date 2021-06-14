import NextLink from 'next/link';

import styles from './Link.module.css';

export interface LinkProps {
    href: string;
    locale?: string;
    variant?: 'highlight' | 'primary' | 'secondary' | 'disabled';
    external?: boolean;
}

const Link: React.FC<LinkProps> = ({
    href,
    locale,
    variant,
    external,
    children,
}) => {
    const externalProps = external && {
        target: '_blank',
        rel: 'noopener noreferrer',
    };

    return (
        <NextLink href={href} locale={locale}>
            <a className={styles[variant ?? 'default']} {...externalProps}>
                {children}
            </a>
        </NextLink>
    );
};

export default Link;
