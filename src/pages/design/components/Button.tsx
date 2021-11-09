import { Button, Container, Grid, Text } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import { responsive } from '@nico-bachner/css'

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

        <Grid
            gap={14}
            css={responsive({
                lg: {
                    gridTemplateColumns: '1fr 2fr',
                },
            })}
        >
            <Container css={{ alignSelf: 'center' }}>
                <Text>Primary</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <Button variant="primary">Click Me</Button>
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>Shadow</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <Button variant="shadow">Click Me</Button>
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>Ghost</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <Button variant="ghost">Click Me</Button>
            </Container>
        </Grid>
    </Layout>
)

export default ButtonPage
