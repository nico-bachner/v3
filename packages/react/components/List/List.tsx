import classes from './List.module.css';

type ListProps = {
    type?: 'ordered' | 'unordered';
};

const List: React.FC<ListProps> = ({ children, type = 'unordered' }) => {
    const styles = [classes.list, classes[type]].join(' ');

    switch (type) {
        case 'ordered':
            return <ol className={styles}>{children}</ol>;
        case 'unordered':
            return <ul className={styles}>{children}</ul>;
    }
};

export default List;
