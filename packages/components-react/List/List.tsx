import styles from './List.module.css';

type ListProps = {
    type: 'ordered' | 'unordered';
    items: React.ReactChild[];
    className?: string;
};

const List: React.VFC<ListProps> = ({
    type = 'unordered',
    items,
    className,
}) => {
    switch (type) {
        case 'ordered':
            return (
                <ol
                    className={[styles.list, styles[type], className].join(' ')}
                >
                    {items.map((item, index) => (
                        <li key={index} className={styles.item}>
                            {item}
                        </li>
                    ))}
                </ol>
            );
        case 'unordered':
            return (
                <ul
                    className={[styles.list, styles[type], className].join(' ')}
                >
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
    }
};

export default List;
