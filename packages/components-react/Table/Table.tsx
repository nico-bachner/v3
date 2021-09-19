import styles from './Table.module.css';

type RootProps = {
    className?: string;
};

const Root: React.FC<RootProps> = ({ children, className }) => (
    <table className={[styles.root, className].join(' ')}>{children}</table>
);

type HeadProps = {
    className?: string;
};

const Head: React.FC<HeadProps> = ({ children, className }) => (
    <thead className={[styles.head, className].join(' ')}>{children}</thead>
);

type BodyProps = {
    className?: string;
};

const Body: React.FC<BodyProps> = ({ children, className }) => (
    <tbody className={[styles.body, className].join(' ')}>{children}</tbody>
);

type RowProps = {
    className?: string;
};

const Row: React.FC<RowProps> = ({ children, className }) => (
    <tr className={[styles.row, className].join(' ')}>{children}</tr>
);

type HeadItemProps = {
    className?: string;
};

const HeadItem: React.FC<HeadItemProps> = ({ children, className }) => (
    <th className={[styles.item, className].join(' ')}>{children}</th>
);

type BodyItemProps = {
    className?: string;
};

const BodyItem: React.FC<BodyItemProps> = ({ children, className }) => (
    <td className={[styles.item, className].join(' ')}>{children}</td>
);

const Table = {
    Root,
    Head,
    Body,
    Row,
    HeadItem,
    BodyItem,
};

export default Table;
