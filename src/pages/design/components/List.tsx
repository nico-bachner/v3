import { Container, Grid, List, Text } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import { responsive } from '@nico-bachner/css'

import type { NextPage } from 'next'

const ListPage: NextPage = () => (
    <Layout width="lg">
        <Head
            title="List - Nico Design"
            description="Nico Bachner's Design System"
        />

        <Text type="h1" width="sm">
            List
        </Text>

        <Text size={6} width="sm" margin={[6, 14]}>
            For ordering text-based content
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
                <Text>Unordered (Default)</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <List.Root>
                    <List.Item>Item 1</List.Item>
                    <List.Item>Item 2</List.Item>
                    <List.Item>Item 3</List.Item>
                </List.Root>
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>Ordered</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <List.Root ordered>
                    <List.Item>Item 1</List.Item>
                    <List.Item>Item 2</List.Item>
                    <List.Item>Item 3</List.Item>
                </List.Root>
            </Container>
        </Grid>
    </Layout>
)

export default ListPage
