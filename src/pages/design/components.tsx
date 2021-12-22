import { Grid, Spacer } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import IconCard from '@lib/components/IconCard'
import Layout from '@lib/components/Layout'
import Link from '@lib/components/Link'
import Title from '@lib/components/Title'

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
    <Layout width="xl">
        <Head
            title="Icons - Nico Design"
            description="Nico Bachner's Design System"
        />

        <Title
            title="Icons"
            subtitle={
                <>
                    A collection of hand-coded icons inspired by{' '}
                    <Link href="https://feathericons.com/" variant="highlight">
                        Feather Icons
                    </Link>{' '}
                    and{' '}
                    <Link
                        href="https://vercel.com/design/icons"
                        variant="highlight"
                    >
                        Vercel&#39;s Icons
                    </Link>
                    .
                </>
            }
        />

        <Spacer y={12} />

        <Grid columns="repeat(auto-fill, minmax(220px, 1fr))" gap={10}>
            {icons.map((path) => (
                <IconCard
                    key={path[path.length - 1]}
                    slug={path[path.length - 1]}
                />
            ))}
        </Grid>
    </Layout>
)

export { getStaticProps }

export default Icons
