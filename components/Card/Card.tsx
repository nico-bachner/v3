import Link from '../Link';

import styles from './Card.module.css';

export interface CardProps {
    href?: string;
    locale?: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({ href, locale, className, children }) =>
    href ? (
        <Link
            href={href}
            locale={locale}
            className={`${styles.link} ${className}`}
        >
            {children}
        </Link>
    ) : (
        <div className={`${styles.default} ${className}`}>{children}</div>
    );

export default Card;
