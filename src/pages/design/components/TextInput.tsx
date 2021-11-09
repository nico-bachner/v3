import {
    Container,
    Grid,
    Text,
    TextInput,
} from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import { responsive } from '@nico-bachner/css'

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
            For text-based user input
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
                <Text>Text</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <TextInput type="text" placeholder="type something here" />
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>Email</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <TextInput type="email" placeholder="mail@example.com" />
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>Password</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <TextInput type="password" placeholder="12345secret" />
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>Search</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <TextInput type="search" placeholder="abc" />
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>URL</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <TextInput type="url" placeholder="example.com" />
            </Container>
        </Grid>
    </Layout>
)

export default TextInputPage
