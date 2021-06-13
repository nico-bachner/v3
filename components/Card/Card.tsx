import Link from '../Link';

import styles from './Card.module.css';

export interface CardProps {
    href?: string;
    locale?: string;
}

const Card: React.FC<CardProps & DefaultProps> = (card) => {
    if (card.href) {
        return (
            <Link
                id={card.id}
                href={card.href}
                locale={card.locale}
                className={`${styles.link} ${card.className}`}
            >
                {card.children}
            </Link>
        );
    }
    return (
        <div {...card} className={`${styles.default} ${card.className}`}>
            {card.children}
        </div>
    );
};

export default Card;
