import styles from '$styles/Home.module.css';

import { fetchProjectsData } from '$lib/utils/data/projects';
import { fetchArticlesData } from '$lib/utils/data/articles';
import { fetchTranslation } from '$lib/utils/translation';
import { useTranslation } from '$lib/hooks/useTranslation';

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
    const content = {
        about: await fetchTranslation(locale, ['home', 'about']),
        projects: await fetchTranslation(locale, ['home', 'projects']),
        articles: await fetchTranslation(locale, ['home', 'articles']),
        contact: await fetchTranslation(locale, ['home', 'contact']),
    };
    const projects = await fetchProjectsData();
    const articles = await fetchArticlesData();

    const props: HomeProps = {
        content,
        projects: projects.filter((project) => project.featured),
        articles: articles.filter((article) => article.featured),
    };

    return { props };
};

const Home: NextPage<HomeProps> = ({ content, projects, articles }) => {
    const { title, subtitle, actions } = useTranslation();

    return (
        <main className={styles.main}>
            <Head title="Nico Bachner" />

            <Text type="h1">{title}</Text>
            <Text size={8} weight={7} className={styles.subtitle}>
                {subtitle}
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
                        {actions.viewAll}
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
                        {actions.viewAll}
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
