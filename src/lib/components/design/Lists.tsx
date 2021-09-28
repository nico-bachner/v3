import styles from '@lib/styles/Design.module.css';

import { List, Text } from '@nico-bachner/components-react';

const Lists = () => (
    <div className={styles.smallTable}>
        <Text>Ordered</Text>
        <List.Root type="ordered">
            <List.Item>Item 1</List.Item>
            <List.Item>Item 2</List.Item>
            <List.Item>Item 3</List.Item>
        </List.Root>

        <Text>Unordered</Text>
        <List.Root type="unordered">
            <List.Item>Item 1</List.Item>
            <List.Item>Item 2</List.Item>
            <List.Item>Item 3</List.Item>
        </List.Root>
    </div>
);

export default Lists;
