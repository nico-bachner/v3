import Link from './Link';

export interface CardProps {
    href?: string;
    locale?: string;
}

const Card: React.FC<CardProps & DefaultProps> = (card) => {
    if (card.href) {
        return (
            <Link
                {...card}
                href={card.href}
                className={`link-card ${card.className}`}
            >
                {card.children}
            </Link>
        );
    }
    return (
        <div {...card} className={`card ${card.className}`}>
            {card.children}
        </div>
    );
};

export default Card;
