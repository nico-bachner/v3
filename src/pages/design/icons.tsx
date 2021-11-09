import { Card, Grid, Spacer, Text } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'
import Link from '@lib/components/Link'

import dynamic from 'next/dynamic'
import { colors } from '@nico-bachner/design-tokens/tokens'
import { fetchPaths } from '@lib/utils/fs'

import type { NextPage, GetStaticProps } from 'next'

type IconsProps = {
    icons: string[][]
}

const getStaticProps: GetStaticProps<IconsProps> = async () => ({
    props: {
        icons: await fetchPaths({
            basePath: ['packages', 'icons-react'],
            path: ['src'],
            extension: 'tsx',
        }),
    },
})

const Icons: NextPage<IconsProps> = ({ icons }) => (
    <Layout width="lg">
        <Head
            title="Icons - Nico Design"
            description="Nico Bachner's Design System"
        />

        <Text type="h1" width="sm">
            Icons
        </Text>

        <Spacer y={6} />

        <Text size={6} width="sm">
            A collection of hand-coded icons inspired by{' '}
            <Link href="https://feathericons.com/">Feather Icons</Link> and{' '}
            <Link href="https://vercel.com/design/icons">
                Vercel&#39;s Icons
            </Link>
            .
        </Text>

        <Spacer y={14} />

        <Grid columns="repeat(auto-fill, minmax(160px, 1fr))" gap={10}>
            {icons.map((path) => {
                const slug = path[path.length - 1]

                const Icon = dynamic(
                    () => import(`@nico-bachner/icons-react/src/${slug}`)
                )

                return (
                    <Link
                        key={slug}
                        href={`https://github.com/nico-bachner/v3/blob/main/packages/icons-react/src/${slug}.tsx`}
                    >
                        <Card
                            interactive
                            css={{
                                color: colors['neutral-10'],
                            }}
                        >
                            <Icon />

                            <Text size={4} align="center">
                                {slug}
                            </Text>
                        </Card>
                    </Link>
                )
            })}
        </Grid>
    </Layout>
)

export { getStaticProps }

export default Icons
