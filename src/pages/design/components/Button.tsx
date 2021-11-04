import { Button, Grid, Text } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import type { NextPage } from 'next'

const ButtonPage: NextPage = () => (
    <Layout width="lg">
        <Head
            title="Button - Nico Design"
            description="Nico Bachner's Design System"
        />

        <Text type="h1" width="sm">
            Button
        </Text>

        <Text size={6} width="sm" margin={[6, 14]}>
            For clicking and such...
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
                <Text>Primary</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Button variant="primary">Click Me</Button>
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Shadow</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Button variant="shadow">Click Me</Button>
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Ghost</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Button variant="ghost">Click Me</Button>
            </Grid.Item>
        </Grid.Root>
    </Layout>
)

export default ButtonPage
