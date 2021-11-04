import {
    Grid,
    Link,
    Text,
    Section,
    Spacer,
} from '@nico-bachner/components-react'
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

        <Spacer y={6} />

        <Text size={6} width="sm">
            A collection of hand-coded icons inspired by{' '}
            <Link href="https://feathericons.com/">Feather Typography</Link> and{' '}
            <Link href="https://vercel.com/design/icons">
                Vercel&#39;s Typography
            </Link>
            .
        </Text>

        <Section id="types">
            <Text type="h2" width="sm">
                Types
            </Text>

            <Spacer y={10} />

            <Grid.Root
                columns="auto"
                gap={12}
                css={{
                    '@md': {
                        gridTemplateColumns: '1fr 2fr',
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
        </Section>

        <Section id="tokens">
            <Text type="h2" width="sm">
                Props
            </Text>

            <Spacer y={10} />
        </Section>
    </Layout>
)

export default Typography
