import styles from './ShowMore.module.css';

interface SelectProps {
    expanded: boolean;
    onClick(): void;
}

const ShowMore: React.FC<SelectProps & DefaultProps> = (props) => (
    <button
        {...props}
        className="px-4 py-2 text-xs uppercase transition rounded-full shadow text-strong dark:border dark:hover:border-strong hover:shadow-lg"
    >
        {props.children}
    </button>
);

export default ShowMore;
