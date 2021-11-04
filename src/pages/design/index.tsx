import { Grid, Link, List, Text, Spacer } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'
import InfoCard from '@lib/components/InfoCard'

import type { NextPage } from 'next'

const Design: NextPage = () => (
    <Layout width="sm">
        <Head
            title="Design | Nico Bachner"
            description="Nico Bachner's Design System"
        />

        <Text type="h1" width="sm">
            Design
        </Text>
        <Text size={6} width="sm" margin={[6, 14]}>
            My personal Design System
        </Text>

        <Grid.Root columns="auto" gap={10}>
            <Grid.Item>
                <InfoCard
                    href="/design/icons"
                    header="Icons"
                    body="A collection of hand-coded icons"
                    cta="See More"
                />
            </Grid.Item>
            <Grid.Item>
                <InfoCard
                    href="/design/typography"
                    header="Typography"
                    body="Typography presets"
                    cta="See More"
                />
            </Grid.Item>
        </Grid.Root>
    </Layout>
)

export default Design
