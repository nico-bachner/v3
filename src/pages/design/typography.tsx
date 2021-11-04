import { Grid, Link, List, Text } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import type { NextPage } from 'next'

const Typography: NextPage = () => (
    <Layout width="lg">
        <Head
            title="Typography - Nico Design"
            description="Nico Bachner's Design System"
        />

        <Text type="h1" width="sm">
            Typography
        </Text>

        <Text size={6} width="sm" margin={[6, 14]}>
            Typography presets
        </Text>

        <Text type="h2" width="sm">
            Text
        </Text>

        <Grid.Root
            columns="auto"
            gap={14}
            css={{
                '@md': {
                    gridTemplateColumns: '1fr 4fr',
                },
            }}
        >
            <Grid.Item justifyY="center">
                <Text>Heading 1</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Text type="h1">
                    The quick brown fox jumps over the lazy dog
                </Text>
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Heading 2</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Text type="h2">
                    The quick brown fox jumps over the lazy dog
                </Text>
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Heading 3</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Text type="h3">
                    The quick brown fox jumps over the lazy dog
                </Text>
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Paragraph</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Text>The quick brown fox jumps over the lazy dog</Text>
            </Grid.Item>
        </Grid.Root>

        <Text type="h2" width="sm">
            Hyperlinks
        </Text>

        <Grid.Root
            columns="auto"
            gap={14}
            css={{
                '@md': {
                    gridTemplateColumns: '1fr 4fr',
                },
            }}
        >
            <Grid.Item justifyY="center">
                <Text>Default</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Link href="/" variant="highlight">
                    Click Me
                </Link>
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Highlight</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Link href="/" variant="highlight">
                    Click Me
                </Link>
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Primary</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Link href="/" variant="primary">
                    Click Me
                </Link>
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Secondary</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Link href="/" variant="secondary">
                    Click Me
                </Link>
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Disabled</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Link href="/" variant="disabled">
                    Click Me
                </Link>
            </Grid.Item>
        </Grid.Root>

        <Text type="h2" width="sm">
            Lists
        </Text>

        <Grid.Root
            columns="auto"
            gap={14}
            css={{
                '@md': {
                    gridTemplateColumns: '1fr 4fr',
                },
            }}
        >
            <Grid.Item justifyY="center">
                <Text>Unordered</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <List.Root>
                    <List.Item>Item 1</List.Item>
                    <List.Item>Item 2</List.Item>
                    <List.Item>Item 3</List.Item>
                </List.Root>
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Ordered</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <List.Root ordered>
                    <List.Item>Item 1</List.Item>
                    <List.Item>Item 2</List.Item>
                    <List.Item>Item 3</List.Item>
                </List.Root>
            </Grid.Item>
        </Grid.Root>
    </Layout>
)

export default Typography
