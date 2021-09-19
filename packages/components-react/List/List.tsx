import styles from './List.module.css';

type ListProps = {
    type: 'ordered' | 'unordered';
    className?: string;
};

const Root: React.FC<ListProps> = ({ children, type, className }) => {
    switch (type) {
        case 'ordered':
            return (
                <ol className={[styles.ordered, className].join(' ')}>
                    {children}
                </ol>
            );
        case 'unordered':
            return (
                <ul className={[styles.unordered, className].join(' ')}>
                    {children}
                </ul>
            );
    }
};

type ListItemProps = {
    className?: string;
};

const Item: React.FC<ListItemProps> = ({ children, className }) => (
    <li className={[styles.item, className].join(' ')}>{children}</li>
);

const List = {
    Root,
    Item,
};

export default List;
