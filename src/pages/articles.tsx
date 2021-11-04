import { fetchTranslation } from '@lib/utils/mdx'
import { fetchArticlesData } from '@lib/utils/data/articles'

import { Grid, Spacer, Text } from '@nico-bachner/components-react'
import MDX from '@nico-bachner/mdx'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'
import { ArticleCard } from '@lib/components/InfoCard'

import type { NextPage, GetStaticProps } from 'next'
import type { MDXContent } from '@nico-bachner/mdx/utils'

type ArticlesProps = {
    content: MDXContent
    articles: ArticleData[]
}

const getStaticProps: GetStaticProps<ArticlesProps> = async ({ locale }) => ({
    props: {
        content: await fetchTranslation({
            locale,
            path: ['articles'],
        }),
        articles: await fetchArticlesData(),
    },
})

const Articles: NextPage<ArticlesProps> = ({ content, articles }) => (
    <Layout>
        <Head
            title="Articles | Nico Bachner"
            description="Nico Bachner's Articles"
        />

        <MDX content={content} />

        <Spacer y={10} />

        <Grid.Root columns="auto" gap={10}>
            {articles.map((article) => (
                <Grid.Item key={article.path[article.path.length - 1]}>
                    <ArticleCard {...article} />
                </Grid.Item>
            ))}
        </Grid.Root>
    </Layout>
)

export { getStaticProps }

export default Articles
