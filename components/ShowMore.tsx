import styles from './ShowMore.module.css';

interface SelectProps {
    expanded: boolean;
    onClick(): void;
}

const ShowMore: React.FC<SelectProps & DefaultProps> = (props) => (
    <button
        {...props}
        className={props.expanded ? styles.expanded : styles.default}
    >
        {props.children}
    </button>
);

export default ShowMore;
