import { Grid, Text, TextInput } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import type { NextPage } from 'next'

const TextInputPage: NextPage = () => (
    <Layout width="lg">
        <Head
            title="TextInput - Nico Design"
            description="Nico Bachner's Design System"
        />

        <Text type="h1" width="sm">
            TextInput
        </Text>

        <Text size={6} width="sm" margin={[6, 14]}>
            For text-based input
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
                <Text>Text</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <TextInput type="text" placeholder="type something here" />
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Email</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <TextInput type="email" placeholder="mail@example.com" />
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Password</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <TextInput type="password" placeholder="12345secret" />
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>Search</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <TextInput type="search" placeholder="abc" />
            </Grid.Item>

            <Grid.Item justifyY="center">
                <Text>URL</Text>
            </Grid.Item>
            <Grid.Item justifyY="center">
                <TextInput type="url" placeholder="example.com" />
            </Grid.Item>
        </Grid.Root>
    </Layout>
)

export default TextInputPage
