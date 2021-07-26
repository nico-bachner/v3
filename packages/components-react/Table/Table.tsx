import styles from './Table.module.css';

type TableData = React.ReactChild;

type TableRow = TableData[];

type TableProps = {
    head: TableRow;
    body: TableRow[];
};

const Table: React.VFC<TableProps> = ({ head, body }) => (
    <table className={styles.table}>
        <thead>
            <tr>
                {head.map((item, index) => (
                    <th key={index}>{item}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {body.map((row, index) => (
                <tr key={index}>
                    {row.map((item, index) => (
                        <td key={index}>{item}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;
