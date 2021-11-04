import { fetchTranslation } from '@lib/utils/mdx'
import { fetchProjectsData } from '@lib/utils/data/projects'

import { Grid, Spacer } from '@nico-bachner/components-react'
import MDX from '@nico-bachner/mdx'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'
import { ProjectCard } from '@lib/components/InfoCard'

import type { NextPage, GetStaticProps } from 'next'
import type { MDXContent } from '@nico-bachner/mdx/utils'

type ProjectsProps = {
    content: MDXContent
    projects: ProjectData[]
}

const getStaticProps: GetStaticProps<ProjectsProps> = async ({ locale }) => ({
    props: {
        content: await fetchTranslation({
            locale,
            path: ['projects'],
        }),
        projects: await fetchProjectsData(),
    },
})

const Projects: NextPage<ProjectsProps> = ({ content, projects }) => (
    <Layout width="lg">
        <Head
            title="Projects | Nico Bachner"
            description="Nico Bachner's Projects"
        />

        <MDX content={content} />

        <Spacer y={12} />

        <Grid.Root
            columns="auto"
            gap={12}
            css={{
                '@md': {
                    gridTemplateColumns: '1fr 12rem 1fr',
                },
            }}
        >
            {projects.map((project) => (
                <Grid.Item
                    key={project.path[project.path.length - 1]}
                    css={{
                        '@md': {
                            gridColumn: 'span 2 / span 2',

                            '&:nth-child(odd)': {
                                gridColumnStart: '1',
                            },
                            '&:nth-child(even)': {
                                gridColumnStart: '2',
                            },
                        },
                    }}
                >
                    <ProjectCard {...project} />
                </Grid.Item>
            ))}
        </Grid.Root>
    </Layout>
)

export { getStaticProps }

export default Projects
