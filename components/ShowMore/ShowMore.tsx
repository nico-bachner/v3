import styles from './ShowMore.module.css';

interface ShowMoreProps {
    expanded: boolean;
    onToggle?: () => void;
}

const ShowMore: React.FC<ShowMoreProps> = ({
    children,
    expanded,
    onToggle,
}) => (
    <div className={expanded ? styles.expanded : styles.default}>
        <hr />
        <button onClick={onToggle}>{children}</button>
        <hr />
    </div>
);

export default ShowMore;
