import styles from './List.module.css';

type RootProps = {
    type: 'ordered' | 'unordered';
    className?: string;
};

const Root: React.FC<RootProps> = ({ children, type, className }) => {
    switch (type) {
        case 'ordered':
            return (
                <ol
                    className={[
                        styles.list,
                        styles[`type-ordered`],
                        className,
                    ].join(' ')}
                >
                    {children}
                </ol>
            );
        case 'unordered':
            return (
                <ul
                    className={[
                        styles.list,
                        styles[`type-unordered`],
                        className,
                    ].join(' ')}
                >
                    {children}
                </ul>
            );
    }
};

type ItemProps = {
    id?: string;
    className?: string;
};

const Item: React.FC<ItemProps> = ({ id, children, className }) => (
    <li id={id} className={[styles.item, className].join(' ')}>
        {children}
    </li>
);

const List = {
    Root,
    Item,
};

export default List;
