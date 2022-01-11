import { fetchProjectsData } from '@lib/utils/data/projects'
import { fetchArticlesData } from '@lib/utils/data/articles'
import { fetchTranslation } from '@lib/utils/mdx'
import { useTranslation } from '@lib/hooks/useTranslation'

import { Text } from '@nico-bachner/components-react'
import { ProjectCard, ArticleCard } from '@lib/components/InfoCard'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'
import HomeSection from '@lib/components/HomeSection'

import type { NextPage, GetStaticProps } from 'next'
import type { MDXContent } from '@nico-bachner/mdx/utils'

type HomeProps = {
    content: {
        about: MDXContent
        projects: MDXContent
        articles: MDXContent
        contact: MDXContent
    }
    projects: ProjectData[]
    articles: ArticleData[]
}

const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
    const content = {
        about: await fetchTranslation({
            locale,
            path: ['home', 'about'],
        }),
        projects: await fetchTranslation({
            locale,
            path: ['home', 'projects'],
        }),
        articles: await fetchTranslation({
            locale,
            path: ['home', 'articles'],
        }),
        contact: await fetchTranslation({
            locale,
            path: ['home', 'contact'],
        }),
    }

    const projects = await fetchProjectsData()
    const articles = await fetchArticlesData()

    return {
        props: {
            content,
            projects: projects.filter(({ featured }) => featured),
            articles: articles.filter(({ featured }) => featured),
        },
    }
}

const Home: NextPage<HomeProps> = ({ content, projects, articles }) => {
    const { bio, words } = useTranslation()

    return (
        <Layout breadcrumbs={false}>
            <Head title="Nico Bachner" />

            <Text type="h1" size={10}>
                Nico Bachner
            </Text>
            <Text size={9} weight={8} color={['cyan-6', 'blue-6']}>
                {bio.tagline}
            </Text>

            <HomeSection
                id="about"
                title={words.about}
                content={content.about}
            />

            <HomeSection
                id="projects"
                title={words.projects}
                content={content.projects}
                items={projects.map((project) => (
                    <ProjectCard
                        key={project.path[project.path.length - 1]}
                        {...project}
                    />
                ))}
                href="/projects"
            />

            <HomeSection
                id="articles"
                title={words.articles}
                content={content.articles}
                items={articles.map((article) => (
                    <ArticleCard
                        key={article.path[article.path.length - 1]}
                        {...article}
                    />
                ))}
                href="/articles"
            />

            <HomeSection
                id="contact"
                title={words.contact}
                content={content.contact}
            />
        </Layout>
    )
}

export { getStaticProps }

export default Home
