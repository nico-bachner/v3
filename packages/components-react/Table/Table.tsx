import styles from './Table.module.css';

type Variant = 'default' | 'monospace' | 'tabular';
type TableData = React.ReactChild;
type TableRow = TableData[];

type TableProps = {
    variant: Variant[];
    head: TableRow;
    body?: TableRow[];
};

const Table: React.VFC<TableProps> = ({ variant, head, body }) => (
    <table className={styles.table}>
        <thead>
            <tr>
                {head.map((item, index) => (
                    <th key={index}>{item}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {body?.map((row, index) => (
                <tr key={index}>
                    {row.map((item, index) => (
                        <td
                            key={index}
                            className={styles[`column-${variant[index]}`]}
                        >
                            {item}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;
