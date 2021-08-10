import styles from './List.module.css';

type ListProps = {
    type: 'ordered' | 'unordered';
};

const List: React.FC<ListProps> = ({ children, type = 'unordered' }) => {
    switch (type) {
        case 'ordered':
            return (
                <ol className={[styles.list, styles[type]].join(' ')}>
                    {children}
                </ol>
            );
        case 'unordered':
            return (
                <ul className={[styles.list, styles[type]].join(' ')}>
                    {children}
                </ul>
            );
    }
};

export default List;
