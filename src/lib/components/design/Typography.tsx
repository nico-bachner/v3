import styles from '@lib/styles/Design.module.css';

import { Text } from '@nico-bachner/components-react';

const Typography = () => (
    <div className={styles.table}>
        <Text>Heading 1</Text>
        <Text type="heading-1">
            The quick brown fox jumps over the lazy dog
        </Text>
        <Text>Heading 2</Text>
        <Text type="heading-2">
            The quick brown fox jumps over the lazy dog
        </Text>
        <Text>Heading 3</Text>
        <Text type="heading-3">
            The quick brown fox jumps over the lazy dog
        </Text>

        <Text>Paragraph (Larger)</Text>
        <Text size={6}>The quick brown fox jumps over the lazy dog</Text>
        <Text>Paragraph (Regular)</Text>
        <Text size={5}>The quick brown fox jumps over the lazy dog</Text>
        <Text>Paragraph (Smaller)</Text>
        <Text size={4}>The quick brown fox jumps over the lazy dog</Text>
    </div>
);

export default Typography;
