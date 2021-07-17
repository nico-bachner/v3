import styles from './List.module.css';

type ListProps = {
    variant?: 'hierarchy' | 'regular' | 'unstyled';
};

const List: React.FC<ListProps> = ({ children, variant = 'regular' }) => (
    <ul className={styles[variant]}>{children}</ul>
);

export default List;
