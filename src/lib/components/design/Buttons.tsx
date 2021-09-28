import styles from '@lib/styles/Design.module.css';

import { Button, Text } from '@nico-bachner/components-react';

const Buttons = () => (
    <div className={styles.table}>
        <Text>Primary</Text>
        <Button
            variant="primary"
            onClick={() => {
                alert('Clicked');
            }}
        >
            Click Me
        </Button>

        <Text>Secondary</Text>
        <Button
            variant="secondary"
            onClick={() => {
                alert('Clicked');
            }}
        >
            Click Me
        </Button>

        <Text>Minimal</Text>
        <Button
            variant="minimal"
            onClick={() => {
                alert('Clicked');
            }}
        >
            Click Me
        </Button>
    </div>
);

export default Buttons;
