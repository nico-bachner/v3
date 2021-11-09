import { Container, Grid, Text } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import { responsive } from '@nico-bachner/css'

import type { NextPage } from 'next'

const TextPage: NextPage = () => (
    <Layout width="lg">
        <Head
            title="Text - Nico Design"
            description="Nico Bachner's Design System"
        />

        <Text type="h1" width="sm">
            Text
        </Text>
        <Text size={6} width="sm" margin={[6, 14]}>
            For text-based content
        </Text>

        <Grid
            gap={14}
            css={responsive({
                lg: {
                    gridTemplateColumns: '1fr 4fr',
                },
            })}
        >
            <Container css={{ alignSelf: 'center' }}>
                <Text>Heading 1</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <Text type="h1">
                    The quick brown fox jumps over the lazy dog
                </Text>
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>Heading 2</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <Text type="h2">
                    The quick brown fox jumps over the lazy dog
                </Text>
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>Heading 3</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <Text type="h3">
                    The quick brown fox jumps over the lazy dog
                </Text>
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>Paragraph</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <Text>The quick brown fox jumps over the lazy dog</Text>
            </Container>
        </Grid>
    </Layout>
)

export default TextPage
