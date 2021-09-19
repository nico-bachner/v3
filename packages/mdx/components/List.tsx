import styles from './List.module.css';

import { List } from '@nico-bachner/components-react';

const OL: React.FC = ({ children }) => (
    <List.Root type="ordered" className={styles.list}>
        {children}
    </List.Root>
);

const UL: React.FC = ({ children }) => (
    <List.Root type="unordered" className={styles.list}>
        {children}
    </List.Root>
);

const MDXList = {
    ol: OL,
    ul: UL,
    li: List.Item,
};

export default MDXList;
