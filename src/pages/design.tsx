import styles from '$styles/Design.module.css';

import {
    Button,
    Card,
    Link,
    List,
    Select,
    Text,
} from '@nico-bachner/components-react';
import Head from '$lib/components/Head';

const Design = () => (
    <main className={styles.main}>
        <Head
            title="Design | Nico Bachner"
            description="Nico Bachner's Design System"
        />

        <Text type="h1">Design</Text>
        <Text size={6} margin={3}>
            My personal Design System
        </Text>

        <section>
            <Text type="h2" margin={5}>
                Typography
            </Text>
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
        </section>

        <section>
            <Text type="h2" margin={5}>
                Hyperlinks
            </Text>
            <div className={styles.list}>
                <Text>
                    <Link href="/">Default (unstyled)</Link>
                </Text>
                <Text>
                    <Link href="/" variant="highlight">
                        Highlight
                    </Link>
                </Text>
                <Text>
                    <Link href="/" variant="primary">
                        Primary
                    </Link>
                </Text>
                <Text>
                    <Link href="/" variant="secondary">
                        Secondary
                    </Link>
                </Text>
                <Text>
                    <Link href="/" variant="disabled">
                        Disabled
                    </Link>
                </Text>
            </div>
        </section>

        <section>
            <Text type="h2" margin={5}>
                Cards
            </Text>
            <Text type="h3" margin={5}>
                Default
            </Text>
            <Card>
                <Text>Default Card</Text>
            </Card>
            <Text type="h3" margin={5}>
                Interactive
            </Text>
            <Card variant="interactive">
                <Text>Interactive Card (Hover Me)</Text>
            </Card>
        </section>

        <section>
            <Text type="h2" margin={5}>
                Select
            </Text>
            <div className={styles.column}>
                <Select
                    options={[
                        { value: 1, content: 'Option 1' },
                        { value: 2, content: 'Option 2' },
                        { value: 3, content: 'Option 3' },
                    ]}
                />
            </div>
        </section>

        <section>
            <Text type="h2" margin={5}>
                List
            </Text>

            <Text type="h3" margin={5}>
                Ordered
            </Text>
            <List type="ordered" items={['Item 1', 'Item 2', 'Item 3']} />

            <Text type="h3" margin={5}>
                Unordered
            </Text>
            <List type="unordered" items={['Item 1', 'Item 2', 'Item 3']} />
        </section>

        <section>
            <Text type="h2" margin={5}>
                Button
            </Text>
            <div className={styles.column}>
                <Button
                    variant="primary"
                    onClick={() => {
                        alert('Clicked');
                    }}
                >
                    Click Me
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => {
                        alert('Clicked');
                    }}
                >
                    Click Me
                </Button>
                <Button
                    variant="minimal"
                    onClick={() => {
                        alert('Clicked');
                    }}
                >
                    Click Me
                </Button>
            </div>
        </section>
    </main>
);

export default Design;
