import styles from './List.module.css';

const List: React.FC = ({ children }) => (
    <ul className={styles.list}>{children}</ul>
);

export default List;
