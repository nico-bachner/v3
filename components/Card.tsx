import React from 'react';
import Link from './Link';

export interface CardProps {
    href?: string;
    locale?: string | false;
    className?: string;
}

const Card: React.FC<CardProps> = (card) => {
    if (card.href) {
        return (
            <Link
                href={card.href}
                locale={card.locale ?? false}
                className={`link-card ${card.className}`}
            >
                {card.children}
            </Link>
        );
    }
    return <div className={`card ${card.className}`}>{card.children}</div>;
};

export default Card;
