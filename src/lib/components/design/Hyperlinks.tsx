import styles from '@lib/styles/Design.module.css';

import { Link, Text } from '@nico-bachner/components-react';

const Hyperlinks = () => (
    <div className={styles.smallTable}>
        <Text>Default</Text>
        <Text>
            <Link href="/">Click Me</Link>
        </Text>

        <Text>Highlight</Text>
        <Text>
            <Link href="/" variant="highlight">
                Click Me
            </Link>
        </Text>

        <Text>Primary</Text>
        <Text>
            <Link href="/" variant="primary">
                Click Me
            </Link>
        </Text>

        <Text>Secondary</Text>
        <Text>
            <Link href="/" variant="secondary">
                Click Me
            </Link>
        </Text>

        <Text>Disabled</Text>
        <Text>
            <Link href="/" variant="disabled">
                Click Me
            </Link>
        </Text>
    </div>
);

export default Hyperlinks;
