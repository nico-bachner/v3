import styles from './Table.module.css';

import { Table } from '@nico-bachner/components-react';

const Root: React.FC = ({ children }) => (
    <Table.Root className={styles.table}>{children}</Table.Root>
);

const MDXTable = {
    table: Root,
    thead: Table.Head,
    tbody: Table.Body,
    tr: Table.Row,
    th: Table.HeadItem,
    td: Table.BodyItem,
};

export default MDXTable;
