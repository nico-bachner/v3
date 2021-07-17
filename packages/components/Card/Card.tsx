import styles from './Card.module.css';

type CardProps = {
    variant?: 'interactive' | 'default';
    className?: string;
};

const Card: React.FC<CardProps> = ({
    children,
    variant = 'default',
    className,
}) => (
    <div className={[styles.card, styles[variant], className].join(' ')}>
        {children}
    </div>
);

export default Card;
