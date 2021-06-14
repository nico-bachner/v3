import { getOrderedProjectsData } from '@lib/projects';
import { getOrderedArticlesData } from '@lib/articles';
import { useI18n } from '@lib/hooks/i18n';

import Head from '@components/Head';
import Link from '@components/Link';
import { ProjectCard, ArticleCard } from '@components/Card';

import styles from '@styles/Home.module.css';

import type { NextPage, GetStaticProps } from 'next';

interface HomeProps {
    projects: CardProps<ProjectData>[];
    articles: CardProps<ArticleData>[];
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getOrderedProjectsData();
    const articles = await getOrderedArticlesData();

    const props: HomeProps = {
        projects: projects.filter((project) => project.featured),
        articles,
    };

    return { props };
};

const Home: NextPage<HomeProps> = ({ projects, articles }) => {
    const i18n = useI18n();

    return (
        <main className={styles.main}>
            <Head
                title="Nico Bachner - Aspiring Open Sourcerer"
                description="High School Student, Hobby Developer, and Aspiring Open Sourcerer currently living in Luxembourg"
                slug="home"
            />
            <h1>{i18n.title}</h1>
            <p className="mt-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-cyan to-azure sm:text-4xl">
                {i18n.subtitle}
            </p>
            <section>
                <h2>{i18n.about.title}</h2>
                <p>{i18n.about.content}</p>
            </section>
            <section>
                <h2>{i18n.projects.title}</h2>
                <p>{i18n.projects.content}</p>
                <div className="grid gap-4 my-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} {...project} />
                    ))}
                </div>
                <p className="text-right capitalize text-azure hover:underline">
                    <Link href="/projects">{i18n.actions.viewAll}</Link>
                </p>
            </section>
            <section>
                <h2>{i18n.articles.title}</h2>
                <p>{i18n.articles.content}</p>
                <div className="grid gap-4 my-6">
                    {articles.map((article) => (
                        <ArticleCard key={article.slug} {...article} />
                    ))}
                </div>
                <p className="text-right capitalize text-azure hover:underline">
                    <Link href="/articles">{i18n.actions.viewAll}</Link>
                </p>
            </section>
            <section>
                <h2>{i18n.contact.title}</h2>
                <p>{i18n.contact.content}</p>
                <p className="flex mt-4 space-x-4">
                    <Link
                        href="mailto:hello@nicob.dev"
                        className="flex-grow text-azure hover:underline"
                    >
                        hello@nicob.dev
                    </Link>
                    <Link
                        href="https://dev.to/nico_bachner"
                        className="text-azure hover:underline"
                    >
                        DEV.to
                    </Link>
                    <Link
                        href="https://twitter.com/nico_bachner"
                        className="text-azure hover:underline"
                    >
                        Twitter
                    </Link>
                </p>
            </section>
        </main>
    );
};

export default Home;
