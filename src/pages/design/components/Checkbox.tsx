import { Checkbox, Grid, Text } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import type { NextPage } from 'next'

const CheckboxPage: NextPage = () => (
    <Layout width="lg">
        <Head
            title="CheckboxPage - Nico Design"
            description="Nico Bachner's Design System"
        />

        <Text type="h1" width="sm">
            CheckboxPage
        </Text>

        <Text size={6} width="sm" margin={[6, 14]}>
            For toggling a field
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
                <Checkbox />
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Unchecked</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Checkbox defaultValue={false} />
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Checked</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <Checkbox defaultValue={true} />
            </Grid.Item>
        </Grid.Root>
    </Layout>
)

export default CheckboxPage
