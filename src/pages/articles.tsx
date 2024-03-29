import { Grid, Spacer } from '@nico-bachner/components-react'
import { ArticleCard } from '@lib/components/InfoCard'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'
import Title from '@lib/components/Title'
import MDX from '@nico-bachner/mdx'

import { useTranslation } from '@lib/hooks/useTranslation'
import { fetchTranslation } from '@lib/utils/mdx'
import { fetchArticlesData } from '@lib/utils/data/articles'

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

const Articles: NextPage<ArticlesProps> = ({ content, articles }) => {
    const { words } = useTranslation()

    return (
        <Layout>
            <Head
                title="Articles | Nico Bachner"
                description="Nico Bachner's Articles"
            />

            <Title title={words.articles} />

            <MDX content={content} />

            <Spacer y={10} />

            <Grid gap={10}>
                {articles.map((article) => (
                    <ArticleCard
                        key={article.path[article.path.length - 1]}
                        {...article}
                    />
                ))}
            </Grid>
        </Layout>
    )
}

export { getStaticProps }

export default Articles
