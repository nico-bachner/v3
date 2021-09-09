import styles from '@lib/styles/Design.module.css';

import {
    Button,
    Card,
    Input,
    Link,
    List,
    Select,
    Text,
} from '@nico-bachner/components-react';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';

const Design = () => (
    <Layout className={styles.main}>
        <Head
            title="Design | Nico Bachner"
            description="Nico Bachner's Design System"
        />

        <Text type="h1">Design</Text>
        <Text size={6} style={{ marginBlockStart: 'var(--space-3)' }}>
            My personal Design System
        </Text>

        <Text type="h2">Typography</Text>
        <div className={styles.table}>
            <Text>h1</Text>
            <Text type="h1">Heading 1</Text>

            <Text>h2</Text>
            <Text type="h2">Heading 2</Text>

            <Text>h3</Text>
            <Text type="h3">Heading 3</Text>

            <Text>p</Text>
            <Text>Paragraph</Text>
        </div>

        <Text type="h2">Hyperlinks</Text>
        <div className={styles.table}>
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

            <Text> Secondary</Text>
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

        <Text type="h2">Cards</Text>
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

        <Text type="h2">Select</Text>
        <div className={styles.table}>
            <Text>Default</Text>
            <Select
                options={[
                    { value: 1, content: 'Option 1' },
                    { value: 2, content: 'Option 2' },
                    { value: 3, content: 'Option 3' },
                ]}
            />
        </div>

        <Text type="h2">List</Text>

        <div className={styles.table}>
            <Text>Ordered</Text>
            <List type="ordered" items={['Item 1', 'Item 2', 'Item 3']} />

            <Text>Unordered</Text>
            <List type="unordered" items={['Item 1', 'Item 2', 'Item 3']} />
        </div>

        <Text type="h2">Button</Text>

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

        <Text type="h2">Input</Text>
        <div className={styles.table}>
            <Text>Text</Text>
            <Input type="text" placeholder="type something here" />

            <Text>Number</Text>
            <Input type="number" placeholder="type something here" />

            <Text>Password</Text>
            <Input type="password" placeholder="type something here" />

            <Text>Date</Text>
            <Input type="date" placeholder="type something here" />
        </div>
    </Layout>
);

export default Design;
