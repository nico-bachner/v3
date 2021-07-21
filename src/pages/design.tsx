import styles from '$lib/styles/Design.module.css';

import {
    Code,
    Card,
    Input,
    Link,
    List,
    Select,
    Text,
} from '@nico-bachner/components';
import Head from '$lib/components/Head';

const Design = () => (
    <main className={styles.main}>
        <Head
            title="Design | Nico Bachner"
            description="Nico Bachner's Design System"
        />
        <Text type="h1">Design</Text>
        <Text size="lg" margin="tight">
            My personal Design System
        </Text>
        <section>
            <Text type="h2" margin="prose">
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
            <Text type="h2" margin="prose">
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
            <Text type="h2" margin="prose">
                Cards
            </Text>
            <Text type="h3" margin="prose">
                Default
            </Text>
            <Card>
                <Text>Default Card</Text>
            </Card>
            <Text type="h3" margin="prose">
                Interactive
            </Text>
            <Card variant="interactive">
                <Text>Interactive Card (Hover Me)</Text>
            </Card>
        </section>
        <section>
            <Text type="h2" margin="prose">
                Select
            </Text>
            <Select
                options={[
                    { value: 1, content: 'Option 1' },
                    { value: 2, content: 'Option 2' },
                    { value: 3, content: 'Option 3' },
                ]}
            />
        </section>
        <section>
            <Text type="h2" margin="prose">
                List
            </Text>
            <List>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </List>
        </section>
    </main>
);

export default Design;
