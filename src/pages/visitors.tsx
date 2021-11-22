import { colors, spacing, typography } from '@nico-bachner/design-tokens'
import { useState } from 'react'
import { useTranslation } from '@lib/hooks/useTranslation'
import { fetchVisits } from '@lib/utils/db/visits'
import { fetchClicks } from '@lib/utils/db/clicks'

import {
    Button,
    PieChart,
    Section,
    Spacer,
    Stack,
    Table,
    Text,
} from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'
import Title from '@lib/components/Title'

import type { NextPage, GetServerSideProps } from 'next'

type VisitsData = {
    paths: PathData[]
    languages: LanguageData[]
}

type Props = {
    visits: VisitsData
    clicks: ClickData[]
}

const getServerSideProps: GetServerSideProps<Props> = async () => {
    return {
        props: {
            visits: await fetchVisits(),
            clicks: await fetchClicks(),
        },
    }
}

const Visitors: NextPage<Props> = ({
    visits: initialVisits,
    clicks: initialClicks,
}) => {
    const { words } = useTranslation()

    const [visits, setVisits] = useState(initialVisits)
    const [clicks, setClicks] = useState(initialClicks)

    return (
        <Layout>
            <Head
                title="Visitors | Nico Bachner"
                description="Insights into the visitors of nicobachner.com"
            />

            <Title
                title={words.visitors}
                subtitle="Insights into the visitors of nicobachner.com"
            />

            <Section id="visits">
                <Stack direction="row" justify="space-between">
                    <Text type="h2">Page visits</Text>

                    <Button
                        onClick={async () => {
                            const res = await fetch('/api/visits')
                            const visits: VisitsData = await res.json()

                            setVisits(visits)
                        }}
                    >
                        Refresh
                    </Button>
                </Stack>

                <Text type="h3" margin={[12, 10]}>
                    By Path
                </Text>
                <Table.Root>
                    <Table.Head>
                        <Table.Row>
                            <Table.Item type="head">Path</Table.Item>
                            <Table.Item type="head">Visits</Table.Item>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {visits.paths
                            .filter(({ visits }) => visits > 0)
                            .map(({ path, visits }) => (
                                <Table.Row key={path}>
                                    <Table.Item type="body">
                                        {decodeURIComponent(path)}
                                    </Table.Item>
                                    <Table.Item type="body">
                                        {visits}
                                    </Table.Item>
                                </Table.Row>
                            ))}
                        <Table.Row
                            css={{
                                color: colors['neutral-10'],
                                fontWeight: typography.fontWeights[7],
                            }}
                        >
                            <Table.Item type="body">Total</Table.Item>
                            <Table.Item type="body">
                                {visits.paths
                                    .map(({ visits }) => visits)
                                    .reduce((prev, current) => prev + current)}
                            </Table.Item>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>

                <Text type="h3" margin={[12, 10]}>
                    By Language
                </Text>

                <PieChart
                    data={visits.languages.map(({ language, visits }) => ({
                        value: visits,
                        label: language.toUpperCase(),
                    }))}
                    css={{ px: spacing[20] }}
                />
            </Section>

            <Section id="clicks">
                <Stack direction="row" justify="space-between">
                    <Text type="h2">Link Clicks</Text>

                    <Button
                        onClick={async () => {
                            const res = await fetch('/api/clicks')
                            const clicks = await res.json()

                            setClicks(clicks)
                        }}
                    >
                        Refresh
                    </Button>
                </Stack>

                <Spacer y={14} />

                <Table.Root>
                    <Table.Head>
                        <Table.Row>
                            <Table.Item type="head">Destination</Table.Item>
                            <Table.Item type="head">Clicks</Table.Item>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {clicks
                            .filter(({ clicks }) => clicks > 0)
                            .map(({ href, clicks }) => (
                                <Table.Row key={href}>
                                    <Table.Item type="body">
                                        {decodeURIComponent(href)}
                                    </Table.Item>
                                    <Table.Item type="body">
                                        {clicks}
                                    </Table.Item>
                                </Table.Row>
                            ))}
                        <Table.Row
                            css={{
                                color: colors['neutral-10'],
                                fontWeight: typography.fontWeights[7],
                            }}
                        >
                            <Table.Item type="body">Total</Table.Item>
                            <Table.Item type="body">
                                {clicks
                                    .map(({ clicks }) => clicks)
                                    .reduce((prev, current) => prev + current)}
                            </Table.Item>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Section>
        </Layout>
    )
}

export { getServerSideProps }

export default Visitors
