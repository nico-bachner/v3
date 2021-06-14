import styles from './Card.module.css';

interface CardProps {
    variant?: 'interactive';
}

const Card: React.FC<CardProps> = ({ variant, children }) => (
    <div
        className={
            variant == 'interactive' ? styles.interactive : styles.default
        }
    >
        {children}
    </div>
);

export default Card;
