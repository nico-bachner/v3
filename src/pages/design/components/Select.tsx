import { Grid, Text, Select } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import type { NextPage } from 'next'

const SelectPage: NextPage = () => (
    <Layout width="lg">
        <Head
            title="Select - Nico Design"
            description="Nico Bachner's Design System"
        />

        <Text type="h1" width="sm">
            Select
        </Text>

        <Text size={6} width="sm" margin={[6, 14]}>
            For input wit predefined options
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
            <Select.Root>
                <Select.Option value="1">Option 1</Select.Option>
                <Select.Option value="2">Option 2</Select.Option>
                <Select.Option value="3">Option 3</Select.Option>
            </Select.Root>
        </Grid.Root>
    </Layout>
)

export default SelectPage
