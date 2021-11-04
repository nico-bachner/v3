import { fetchTranslation } from '@lib/utils/mdx'
import { fetchPapersData } from '@lib/utils/data/papers'

import { Grid, Spacer } from '@nico-bachner/components-react'
import MDX from '@nico-bachner/mdx'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'
import { PaperCard } from '@lib/components/InfoCard'

import type { NextPage, GetStaticProps } from 'next'
import type { MDXContent } from '@nico-bachner/mdx/utils'

type PapersProps = {
    content: MDXContent
    papers: PaperData[]
}

const getStaticProps: GetStaticProps<PapersProps> = async ({ locale }) => ({
    props: {
        content: await fetchTranslation({
            locale,
            path: ['papers'],
        }),
        papers: await fetchPapersData(),
    },
})

const Papers: NextPage<PapersProps> = ({ content, papers }) => (
    <Layout>
        <Head
            title="Papers | Nico Bachner"
            description="Nico Bachner's Papers"
        />

        <MDX content={content} />

        <Spacer y={10} />

        <Grid.Root columns="auto" gap={8}>
            {papers.map((paper) => (
                <Grid.Item key={paper.path[paper.path.length - 1]}>
                    <PaperCard key={paper.path[paper.path.length]} {...paper} />
                </Grid.Item>
            ))}
        </Grid.Root>
    </Layout>
)

export { getStaticProps }

export default Papers
