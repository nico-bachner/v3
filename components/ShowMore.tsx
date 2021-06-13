import styles from './ShowMore.module.css';

interface SelectProps {
    expanded: boolean;
    onClick(): void;
}

const ShowMore: React.FC<SelectProps & DefaultProps> = (props) => (
    <button {...props} className={styles.showMore}>
        {props.children}
    </button>
);

export default ShowMore;
