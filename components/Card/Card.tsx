import styles from './Card.module.css';

interface CardProps {
    variant?: 'interactive' | 'default';
}

const Card: React.FC<CardProps> = ({ children, variant = 'default' }) => (
    <div className={styles[variant]}>{children}</div>
);

export default Card;
