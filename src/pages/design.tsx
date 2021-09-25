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
import {
    ArrowDownLeft,
    ArrowDownRight,
    ArrowUpLeft,
    ArrowUpRight,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Logo,
    SignMinus,
    SignPlus,
} from '@nico-bachner/icons-react';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';

const Design = () => (
    <Layout width="lg" className={styles.main}>
        <Head
            title="Design | Nico Bachner"
            description="Nico Bachner's Design System"
        />

        <Text type="h1">Design</Text>
        <Text size={6}>My personal Design System</Text>

        <section>
            <Text type="h2">Typography</Text>
            <div className={styles.table}>
                <Text>Heading 1</Text>
                <Text type="h1">
                    The quick brown fox jumps over the lazy dog
                </Text>
                <Text>Heading 2</Text>
                <Text type="h2">
                    The quick brown fox jumps over the lazy dog
                </Text>
                <Text>Heading 3</Text>
                <Text type="h3">
                    The quick brown fox jumps over the lazy dog
                </Text>

                <Text>Paragraph (Larger)</Text>
                <Text size={6}>
                    The quick brown fox jumps over the lazy dog
                </Text>
                <Text>Paragraph (Regular)</Text>
                <Text size={5}>
                    The quick brown fox jumps over the lazy dog
                </Text>
                <Text>Paragraph (Smaller)</Text>
                <Text size={4}>
                    The quick brown fox jumps over the lazy dog
                </Text>
            </div>
        </section>

        <section>
            <Text type="h2">Hyperlinks</Text>
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
        </section>

        <section>
            <Text type="h2">Lists</Text>
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
        </section>

        <section>
            <Text type="h2">Form Elements</Text>
            <div className={styles.table}>
                <Text>Date</Text>
                <Input type="date" />

                <Text>Email</Text>
                <Input type="email" placeholder="mail@example.com" />

                <Text>Number</Text>
                <Input type="number" placeholder="21'000'000" />

                <Text>Password</Text>
                <Input type="password" placeholder="12345secret" />

                <Text>Search</Text>
                <Input type="search" placeholder="12345secret" />

                <Text>Telephone</Text>
                <Input type="tel" placeholder="+12 345 678 900" />

                <Text>Text</Text>
                <Input type="text" placeholder="type something here" />

                <Text>Time</Text>
                <Input type="time" />

                <Text>URL</Text>
                <Input type="url" placeholder="example.com" />

                <Text>Select</Text>
                <Select.Root>
                    <Select.Option value="1">Option 1</Select.Option>
                    <Select.Option value="2">Option 2</Select.Option>
                    <Select.Option value="3">Option 3</Select.Option>
                </Select.Root>
            </div>
        </section>

        <section>
            <Text type="h2">Buttons</Text>
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
        </section>

        <section>
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
        </section>

        <section>
            <Text type="h2">Icons</Text>
            <div className={styles.iconsGrid}>
                <Card>
                    <ArrowDownLeft />
                    <Text size={4} align="center">
                        Arrow Down Left
                    </Text>
                </Card>
                <Card>
                    <ArrowDownRight />
                    <Text size={4} align="center">
                        Arrow Down Right
                    </Text>
                </Card>
                <Card>
                    <ArrowUpLeft />
                    <Text size={4} align="center">
                        Arrow Up Left
                    </Text>
                </Card>
                <Card>
                    <ArrowUpRight />
                    <Text size={4} align="center">
                        Arrow Up Right
                    </Text>
                </Card>
                <Card>
                    <ChevronDown />
                    <Text size={4} align="center">
                        Chevron Down
                    </Text>
                </Card>
                <Card>
                    <ChevronLeft />
                    <Text size={4} align="center">
                        Chevron Left
                    </Text>
                </Card>
                <Card>
                    <ChevronRight />
                    <Text size={4} align="center">
                        Chevron Right
                    </Text>
                </Card>
                <Card>
                    <ChevronUp />
                    <Text size={4} align="center">
                        Chevron Up
                    </Text>
                </Card>
                <Card>
                    <Logo />
                    <Text size={4} align="center">
                        Logo
                    </Text>
                </Card>
                <Card>
                    <SignMinus />
                    <Text size={4} align="center">
                        Sign Minus
                    </Text>
                </Card>
                <Card>
                    <SignPlus />
                    <Text size={4} align="center">
                        Sign Plus
                    </Text>
                </Card>
            </div>
        </section>
    </Layout>
);

export default Design;
