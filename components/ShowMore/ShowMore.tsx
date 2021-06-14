import styles from './ShowMore.module.css';

interface SelectProps {
    expanded: boolean;
    onClick(): void;
}

const ShowMore: React.FC<SelectProps> = ({ onClick, expanded, children }) => (
    <div className={expanded ? styles.expanded : styles.default}>
        <hr />
        <button onClick={onClick}>{children}</button>
        <hr />
    </div>
);

export default ShowMore;
