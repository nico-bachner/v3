import styles from '$lib/styles/Home.module.css';

import { getProjects } from '$lib/utils/data/projects';
import { getArticles } from '$lib/utils/data/articles';
import { useI18n } from '$lib/hooks/useI18n';

import { Link, Text } from '@nico-bachner/components-react';
import Head from '$lib/components/Head';
import ProjectCard from '$lib/components/ProjectCard';
import ArticleCard from '$lib/components/ArticleCard';

import type { NextPage, GetStaticProps } from 'next';

interface HomeProps {
    projects: ProjectData[];
    articles: ArticleData[];
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getProjects();
    const articles = await getArticles();

    const props: HomeProps = {
        projects: projects.filter((project) => project.featured),
        articles: articles.filter((article) => article.featured),
    };

    return { props };
};

const Home: NextPage<HomeProps> = ({ projects, articles }) => {
    const i18n = useI18n();

    return (
        <main className={styles.home}>
            <Head title="Nico Bachner" description={i18n.about.content} />
            <Text type="h1">{i18n.title}</Text>
            <Text size="3xl" weight="bolder" className={styles.subtitle}>
                {i18n.subtitle}
            </Text>
            <section id="about">
                <Text type="h2">{i18n.about.title}</Text>
                <Text margin="prose">{i18n.about.content}</Text>
            </section>
            <section id="projects">
                <Text type="h2">{i18n.projects.title}</Text>
                <Text margin="prose">{i18n.projects.content}</Text>
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
                <Text align="right" transform="capitalize">
                    <Link href="/projects" variant="highlight">
                        {i18n.actions.viewAll}
                    </Link>
                </Text>
            </section>
            <section id="articles">
                <Text type="h2">{i18n.articles.title}</Text>
                <Text margin="prose">{i18n.articles.content}</Text>
                <div className={styles.grid}>
                    {articles.map((article) => (
                        <ArticleCard key={article.title} {...article} />
                    ))}
                </div>
                <Text align="right" transform="capitalize">
                    <Link href="/projects" variant="highlight">
                        {i18n.actions.viewAll}
                    </Link>
                </Text>
            </section>
            <section id="contact">
                <Text type="h2">{i18n.contact.title}</Text>
                <Text margin="prose">{i18n.contact.content}</Text>
                <div className={styles.contact_links}>
                    <Text className={styles.mail}>
                        <Link href="mailto:hello@nicob.dev" variant="highlight">
                            hello@nicob.dev
                        </Link>
                    </Text>
                    <Text className={styles.social}>
                        {i18n.links.social.map(({ title, href }) => (
                            <Link key={href} href={href} variant="highlight">
                                {title}
                            </Link>
                        ))}
                    </Text>
                </div>
            </section>
        </main>
    );
};

export default Home;
