import styles from './ShowMore.module.css';

interface SelectProps {
    expanded: boolean;
    onClick(): void;
}

const ShowMore: React.FC<SelectProps> = ({ onClick, expanded, children }) => (
    <div className="flex">
        <hr className="flex-grow my-4" />
        <button
            onClick={onClick}
            className={expanded ? styles.expanded : styles.default}
        >
            {children}
        </button>
        <hr className="flex-grow my-4" />
    </div>
);

export default ShowMore;
