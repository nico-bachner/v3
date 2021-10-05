import styles from './Text.module.css';

import { Text } from '@nico-bachner/components-react';

const H1: React.FC = ({ children }) => (
    <Text type="heading-1" className={styles.h1}>
        {children}
    </Text>
);

const H2: React.FC<{ id?: string }> = ({ children, id }) => (
    <Text type="heading-2" id={id} className={styles.h2}>
        {children}
    </Text>
);

const H3: React.FC<{ id?: string }> = ({ children, id }) => (
    <Text type="heading-3" id={id} className={styles.h3}>
        {children}
    </Text>
);

const H4: React.FC<{ id?: string }> = ({ children, id }) => (
    <Text type="heading-4" id={id} className={styles.h4}>
        {children}
    </Text>
);

const Strong: React.FC = ({ children }) => (
    <Text type="strong">{children}</Text>
);

const P: React.FC = ({ children }) => (
    <Text width="sm" className={styles.p}>
        {children}
    </Text>
);

const MDXText = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    strong: Strong,
    p: P,
};

export default MDXText;
