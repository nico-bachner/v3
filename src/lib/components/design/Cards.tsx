import styles from '@lib/styles/Design.module.css';

import { Card, Text } from '@nico-bachner/components-react';

const Cards = () => (
    <div className={styles.table}>
        <Text>Default</Text>
        <Card>
            <Text>Hover Me</Text>
        </Card>

        <Text>Interactive</Text>
        <Card variant="interactive">
            <Text>Hover Me</Text>
        </Card>
    </div>
);

export default Cards;
