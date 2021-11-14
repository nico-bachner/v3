import { Grid } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import InfoCard from '@lib/components/InfoCard'
import Layout from '@lib/components/Layout'
import Title from '@lib/components/Title'

import type { NextPage } from 'next'

const Design: NextPage = () => (
    <Layout width="sm">
        <Head
            title="Design | Nico Bachner"
            description="Nico Bachner's Design System"
        />

        <Title title="Design" subtitle="My personal Design System" />

        <Grid columns="auto" gap={10}>
            <InfoCard
                href="/design/icons"
                header="Icons"
                body="A collection of hand-coded icons"
                cta="See More"
            />
            <InfoCard
                href="/design/typography"
                header="Typography"
                body="Typography presets"
                cta="See More"
            />
        </Grid>
    </Layout>
)

export default Design
