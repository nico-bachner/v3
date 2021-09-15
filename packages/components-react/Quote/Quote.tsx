import styles from './Quote.module.css';

type QuoteProps = {
    className?: string;
};

const Quote: React.FC<QuoteProps> = ({ children, className }) => (
    <blockquote className={[styles.blockquote, className].join(' ')}>
        {children}
    </blockquote>
);

export default Quote;
