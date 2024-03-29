import { Checkbox, Container, Grid, Text } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import { responsive } from '@nico-bachner/css'

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
                <Checkbox />
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>Unchecked</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <Checkbox defaultValue={false} />
            </Container>

            <Container css={{ alignSelf: 'center' }}>
                <Text>Checked</Text>
            </Container>
            <Container css={{ alignSelf: 'center' }}>
                <Checkbox defaultValue={true} />
            </Container>
        </Grid>
    </Layout>
)

export default CheckboxPage
