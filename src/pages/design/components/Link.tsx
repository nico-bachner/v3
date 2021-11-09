import { Link, Grid, Text } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'

import { responsive } from '@nico-bachner/css'

import type { NextPage } from 'next'

const LinkPage: NextPage = () => (
    <Layout width="sm">
        <Head
            title="Link - Nico Design"
            description="Nico Bachner's Design System"
        />

        <Text type="h1">Link</Text>
        <Text size={6} margin={[6, 14]}>
            For navigation
        </Text>

        <Grid
            gap={14}
            css={responsive({
                lg: {
                    gridTemplateColumns: '1fr 2fr',
                },
            })}
        >
            <Text>Default</Text>
            <Text>
                <Link href="/">Click Me</Link>
            </Text>

            <Text>Highlight</Text>
            <Text>
                <Link href="/" variant="highlight">
                    Click Me
                </Link>
            </Text>

            <Text>Primary</Text>
            <Text>
                <Link href="/" variant="primary">
                    Click Me
                </Link>
            </Text>

            <Text>Secondary</Text>
            <Text>
                <Link href="/" variant="secondary">
                    Click Me
                </Link>
            </Text>

            <Text>Disabled</Text>
            <Text>
                <Link href="/" variant="disabled">
                    Click Me
                </Link>
            </Text>
        </Grid>
    </Layout>
)

export default LinkPage
