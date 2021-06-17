import { getProjectsData } from '@lib/projects';
import { getArticlesData } from '@lib/articles';
import { useI18n } from '@hooks/i18n';

import Head from '@components/Head';
import Link from '@components/Link';
import { ProjectCard, ArticleCard } from '@components/Card';

import styles from '@styles/Home.module.css';

import type { NextPage, GetStaticProps } from 'next';

interface HomeProps {
    projects: ProjectData[];
    articles: ArticleData[];
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getProjectsData();
    const articles = await getArticlesData();

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
            <Head
                title="Nico Bachner - Aspiring Open Sourcerer"
                description="High School Student, Hobby Developer, and Aspiring Open Sourcerer currently living in Luxembourg"
                slug="home"
            />
            <h1>{i18n.title}</h1>
            <p>{i18n.subtitle}</p>
            <section id="about">
                <h2>{i18n.about.title}</h2>
                <p>{i18n.about.content}</p>
            </section>
            <section id="projects">
                <h2>{i18n.projects.title}</h2>
                <p>{i18n.projects.content}</p>
                <div className="grid gap-4 my-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} {...project} />
                    ))}
                </div>
                <p className="text-right capitalize">
                    <Link href="/projects" variant="highlight">
                        {i18n.actions.viewAll}
                    </Link>
                </p>
            </section>
            <section id="articles">
                <h2>{i18n.articles.title}</h2>
                <p>{i18n.articles.content}</p>
                <div className="grid gap-4 my-6">
                    {articles.map((article) => (
                        <ArticleCard key={article.slug} {...article} />
                    ))}
                </div>
                <p className="text-right capitalize">
                    <Link href="/articles" variant="highlight">
                        {i18n.actions.viewAll}
                    </Link>
                </p>
            </section>
            <section id="contact">
                <h2>{i18n.contact.title}</h2>
                <p>{i18n.contact.content}</p>
                <div className="flex mt-4 space-x-4">
                    <p className="flex-grow">
                        <Link
                            href="mailto:hello@nicob.dev"
                            variant="highlight"
                            external
                        >
                            hello@nicob.dev
                        </Link>
                    </p>
                    <p>
                        <Link
                            href="https://dev.to/nico_bachner"
                            variant="highlight"
                            external
                        >
                            DEV.to
                        </Link>
                    </p>
                    <p>
                        <Link
                            href="https://twitter.com/nico_bachner"
                            variant="highlight"
                            external
                        >
                            Twitter
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;
