import { Container, Grid, Text, Select } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import { responsive } from '@nico-bachner/css'

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
            For user input with predefined options
        </Text>

        <Grid
            gap={14}
            css={responsive({
                lg: {
                    gridTemplateColumns: '1fr 2fr',
                },
            })}
        >
            <Container css={{ alignSelf: 'center' }}>
                <Text>Default</Text>
            </Container>
            <Select.Root>
                <Select.Item value="1">Option 1</Select.Item>
                <Select.Item value="2">Option 2</Select.Item>
                <Select.Item value="3">Option 3</Select.Item>
            </Select.Root>
        </Grid>
    </Layout>
)

export default SelectPage
