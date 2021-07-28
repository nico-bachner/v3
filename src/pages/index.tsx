import styles from '$lib/styles/Home.module.css';

import { getMDXContent } from '@nico-bachner/mdx/content';
import { getFile } from '$lib/utils/fs';
import { getProjects } from '$lib/utils/data/projects';
import { getArticles } from '$lib/utils/data/articles';
import { useI18n } from '$lib/hooks/useI18n';

import { Link, Text } from '@nico-bachner/components-react';
import MDX from '@nico-bachner/mdx';
import Head from '$lib/components/Head';
import ProjectCard from '$lib/components/ProjectCard';
import ArticleCard from '$lib/components/ArticleCard';

import type { NextPage, GetStaticProps } from 'next';
import type { MDXContent } from '@nico-bachner/mdx/types';

type HomeProps = {
    content: {
        about: MDXContent;
        projects: MDXContent;
        articles: MDXContent;
        contact: MDXContent;
    };
    projects: ProjectData[];
    articles: ArticleData[];
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const getTranslation = async (path: string[]) => {
        const file = await getFile({
            basePath: ['translations'],
            path: [locale as string, 'home', ...path],
            extension: 'mdx',
        });

        const content = await getMDXContent(file);

        return content;
    };

    const projects = await getProjects();
    const articles = await getArticles();

    const props: HomeProps = {
        content: {
            about: await getTranslation(['about']),
            projects: await getTranslation(['projects']),
            articles: await getTranslation(['articles']),
            contact: await getTranslation(['contact']),
        },
        projects: projects.filter((project) => project.featured),
        articles: articles.filter((article) => article.featured),
    };

    return { props };
};

const Home: NextPage<HomeProps> = ({ content, projects, articles }) => {
    const i18n = useI18n();

    return (
        <main className={styles.home}>
            <Head title="Nico Bachner" description={i18n.description} />

            <Text type="h1">{i18n.title}</Text>
            <Text size={8} weight={7} className={styles.subtitle}>
                {i18n.subtitle}
            </Text>

            <section id="about">
                <MDX content={content.about} />
            </section>

            <section id="projects">
                <MDX content={content.projects} />
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            type="h3"
                            {...project}
                        />
                    ))}
                </div>
                <Text align="right" transform="capitalize">
                    <Link href="/projects" variant="highlight">
                        {i18n.actions.viewAll}
                    </Link>
                </Text>
            </section>

            <section id="articles">
                <MDX content={content.articles} />
                <div className={styles.grid}>
                    {articles.map((article) => (
                        <ArticleCard
                            key={article.title}
                            type="h3"
                            {...article}
                        />
                    ))}
                </div>
                <Text align="right" transform="capitalize">
                    <Link href="/projects" variant="highlight">
                        {i18n.actions.viewAll}
                    </Link>
                </Text>
            </section>

            <section id="contact">
                <MDX content={content.contact} />
            </section>
        </main>
    );
};

export default Home;
