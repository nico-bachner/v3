import styles from '@lib/styles/Home.module.css';

import { fetchProjectsData } from '@lib/utils/data/projects';
import { fetchArticlesData } from '@lib/utils/data/articles';
import { fetchTranslation } from '@lib/utils/translation';
import { useTranslation } from '@lib/hooks/useTranslation';

import { Text } from '@nico-bachner/components-react';
import Link from '@lib/components/Link';
import MDX from '@nico-bachner/mdx';
import Head from '@lib/components/Head';
import Layout from '@lib/components/Layout';
import { ProjectCard, ArticleCard } from '@lib/components/Card';

import type { NextPage, GetStaticProps } from 'next';
import type { MDXContent } from '@nico-bachner/mdx/utils';

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
    };

    const projects = await fetchProjectsData();
    const articles = await fetchArticlesData();

    return {
        props: {
            content,
            projects: projects.filter(({ featured }) => featured),
            articles: articles.filter(({ featured }) => featured),
        },
    };
};

const Home: NextPage<HomeProps> = ({ content, projects, articles }) => {
    const { general, actions } = useTranslation();

    return (
        <Layout width="sm" home={true} className={styles.main}>
            <Head title="Nico Bachner" />

            <Text type="heading-1">{general.title}</Text>
            <Text size={8} className={styles.subtitle}>
                {general.subtitle}
            </Text>

            <section id="about">
                <MDX content={content.about} />
            </section>

            <section id="projects">
                <MDX content={content.projects} />
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.path[project.path.length - 1]}
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
                            key={article.path[article.path.length - 1]}
                            {...article}
                        />
                    ))}
                </div>
                <Text align="right" transform="capitalize">
                    <Link href="/articles" variant="highlight">
                        {actions.viewAll}
                    </Link>
                </Text>
            </section>

            <section id="contact">
                <MDX content={content.contact} />
            </section>
        </Layout>
    );
};

export { getStaticProps };

export default Home;
