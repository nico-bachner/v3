import styles from '@lib/styles/Design.module.css';

import {
    Button,
    Card,
    Checkbox,
    Input,
    Link,
    List,
    Select,
    Text,
} from '@nico-bachner/components-react';
import {
    ArrowDown,
    ArrowUp,
    ArrowLeft,
    ArrowRight,
    ArrowDownLeft,
    ArrowDownRight,
    ArrowUpLeft,
    ArrowUpRight,
    Book,
    BookOpen,
    Bookmark,
    Check,
    ChevronDown,
    ChevronUp,
    ChevronLeft,
    ChevronRight,
    Code,
    Command,
    Copy,
    Download,
    File,
    Folder,
    FolderMinus,
    FolderPlus,
    SignMinus,
    SignPlus,
    Logo,
} from '@nico-bachner/icons-react';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';
import IconCard from '@lib/components/Card/IconCard';

import { useState } from 'react';

const Typography = () => (
    <div className={styles.table}>
        <Text>Heading 1</Text>
        <Text type="h1">The quick brown fox jumps over the lazy dog</Text>
        <Text>Heading 2</Text>
        <Text type="h2">The quick brown fox jumps over the lazy dog</Text>
        <Text>Heading 3</Text>
        <Text type="h3">The quick brown fox jumps over the lazy dog</Text>

        <Text>Paragraph (Larger)</Text>
        <Text size={6}>The quick brown fox jumps over the lazy dog</Text>
        <Text>Paragraph (Regular)</Text>
        <Text size={5}>The quick brown fox jumps over the lazy dog</Text>
        <Text>Paragraph (Smaller)</Text>
        <Text size={4}>The quick brown fox jumps over the lazy dog</Text>
    </div>
);

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

const Lists = () => (
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
);

const FormElements = () => {
    type FormData = {
        checked: boolean | undefined;
    };

    const [formData, setFormData] = useState<FormData>({
        checked: false,
    });

    return (
        <div className={styles.smallTable}>
            <Text>Checkbox</Text>
            <Checkbox
                checked={formData.checked}
                onCheckedChange={(checked) => {
                    setFormData({ checked });
                }}
                name="check"
                required={false}
            />

            <Text>Date</Text>
            <Input type="date" />

            <Text>Email</Text>
            <Input type="email" placeholder="mail@example.com" />

            <Text>Number</Text>
            <Input type="number" placeholder="21'000'000" />

            <Text>Password</Text>
            <Input type="password" placeholder="12345secret" />

            <Text>Search</Text>
            <Input type="search" placeholder="abcd" />

            <Text>Telephone</Text>
            <Input type="tel" placeholder="+12 345 678 900" />

            <Text>Text</Text>
            <Input type="text" placeholder="type something here" />

            <Text>URL</Text>
            <Input type="url" placeholder="example.com" />

            <Text>Select</Text>
            <Select.Root>
                <Select.Option value="1">Option 1</Select.Option>
                <Select.Option value="2">Option 2</Select.Option>
                <Select.Option value="3">Option 3</Select.Option>
            </Select.Root>
        </div>
    );
};

const Icons = () => (
    <div className={styles.iconsGrid}>
        <IconCard name="Arrow Down" icon={<ArrowDown />} />
        <IconCard name="Arrow Up" icon={<ArrowUp />} />
        <IconCard name="Arrow Left" icon={<ArrowLeft />} />
        <IconCard name="Arrow Right" icon={<ArrowRight />} />

        <IconCard name="Arrow Down Left" icon={<ArrowDownLeft />} />
        <IconCard name="Arrow Down Right" icon={<ArrowDownRight />} />
        <IconCard name="Arrow Up Left" icon={<ArrowUpLeft />} />
        <IconCard name="Arrow Up Right" icon={<ArrowUpRight />} />

        <IconCard name="Chevron Down" icon={<ChevronDown />} />
        <IconCard name="Chevron Up" icon={<ChevronUp />} />
        <IconCard name="Chevron Left" icon={<ChevronLeft />} />
        <IconCard name="Chevron Right" icon={<ChevronRight />} />

        <IconCard name="Book" icon={<Book />} />
        <IconCard name="Book Open" icon={<BookOpen />} />
        <IconCard name="Bookmark" icon={<Bookmark />} />
        <IconCard name="Check" icon={<Check />} />

        <IconCard name="Code" icon={<Code />} />
        <IconCard name="Command" icon={<Command />} />
        <IconCard name="Copy" icon={<Copy />} />
        <IconCard name="Download" icon={<Download />} />

        <IconCard name="File" icon={<File />} />
        <IconCard name="Folder" icon={<Folder />} />
        <IconCard name="Folder Minus" icon={<FolderMinus />} />
        <IconCard name="Folder Plus" icon={<FolderPlus />} />

        <IconCard name="Sign Minus" icon={<SignMinus />} />
        <IconCard name="Sign Plus" icon={<SignPlus />} />
        <IconCard name="Logo" icon={<Logo />} />
    </div>
);

const Design = () => {
    return (
        <Layout width="lg" className={styles.main}>
            <Head
                title="Design | Nico Bachner"
                description="Nico Bachner's Design System"
            />

            <Text type="h1">Design</Text>
            <Text size={6}>My personal Design System</Text>

            <section>
                <Text type="h2">Typography</Text>
                <Typography />
            </section>

            <section>
                <Text type="h2">Buttons</Text>
                <Buttons />
            </section>

            <section>
                <Text type="h2">Cards</Text>
                <Cards />
            </section>

            <section>
                <Text type="h2">Hyperlinks</Text>
                <Hyperlinks />
            </section>

            <section>
                <Text type="h2">Lists</Text>
                <Lists />
            </section>

            <section>
                <Text type="h2">Form Elements</Text>
                <FormElements />
            </section>

            <section>
                <Text type="h2">Icons</Text>
                <Icons />
            </section>
        </Layout>
    );
};

export default Design;
