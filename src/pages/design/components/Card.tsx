import { Card, Container, Grid, Text } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import { responsive } from '@nico-bachner/css'

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
            <Container css={{ alignSelf: 'center' }}>
                <Card>
                    <Text>Hover Me</Text>
                </Card>
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>Interactive</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <Card variant="interactive">
                    <Text>Hover Me</Text>
                </Card>
            </Container>
        </Grid>
    </Layout>
)

export default CardPage
