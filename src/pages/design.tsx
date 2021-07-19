import styles from '$lib/styles/Design.module.css';

import {
    Text,
    List,
    Link,
    Card,
    Input,
    Select,
} from '@nico-bachner/components';
import Head from '$lib/components/Head';

const Design = () => (
    <main className={styles.main}>
        <Head
            title="Design | Nico Bachner"
            description="Nico Bachner's Design System"
            slug="home"
        />
        <Text type="h1">Design</Text>
        <Text size="lg" margin="tight">
            My personal Design System
        </Text>
        <section>
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
        </section>
        <section>
            <Text type="h2">Hyperlinks</Text>
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
            <Text type="h2">Cards</Text>
            <div className={styles.list}>
                <Card>
                    <Text>Default Card</Text>
                </Card>
                <Card variant="interactive">
                    <Text>Interactive Card (Hover Me)</Text>
                </Card>
            </div>
        </section>
        <section>
            <Text type="h2">Select</Text>
            <div>
                <Select>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>
            </div>
        </section>
    </main>
);

export default Design;
