import { Card, Grid, Text } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import type { NextPage } from 'next'

const CardPage: NextPage = () => (
    <Layout width="lg">
        <Head
            title="Card - Nico Design"
            description="Nico Bachner's Design System"
        />

        <Text type="h1" width="sm">
            Card
        </Text>

        <Text size={6} width="sm" margin={[6, 14]}>
            For grouping content
        </Text>

        <Grid.Root
            columns="auto"
            gap={14}
            css={{
                '@md': {
                    gridTemplateColumns: '1fr 2fr',
                },
            }}
        >
            <Grid.Item justifyY="center">
                <Text>Default</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Card>
                    <Text>Hover Me</Text>
                </Card>
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Interactive</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Card interactive>
                    <Text>Hover Me</Text>
                </Card>
            </Grid.Item>
        </Grid.Root>
    </Layout>
)

export default CardPage
