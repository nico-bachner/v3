import { getOrderedProjectsData } from '../lib/projects';
import { getOrderedArticlesData } from '../lib/articles';
import { useI18n } from '../lib/hooks/i18n';

import Head from '@components/Head';
import Link from '../components/Link';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import ArticleCard from '../components/ArticleCard';

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
        <main className="max-w-2xl mx-auto">
            <Head
                title="Nico Bachner - Aspiring Open Sourcerer"
                description="High School Student, Hobby Developer, and Aspiring Open Sourcerer currently living in Luxembourg"
            />
            <h1>{i18n.title}</h1>
            <p className="mt-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-cyan to-azure sm:text-4xl">
                {i18n.subtitle}
            </p>
            <Section variant="h2" title={i18n.about.title}>
                <p>{i18n.about.content}</p>
            </Section>
            <Section variant="h2" title={i18n.projects.title}>
                <p>{i18n.projects.subtitle}</p>
                <div className="grid gap-4 my-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} {...project} />
                    ))}
                </div>
                <p className="mt-8 text-right capitalize text-azure hover:underline">
                    <Link href="/projects">{i18n.actions.viewAll}</Link>
                </p>
            </Section>
            <Section variant="h2" title={i18n.articles.title}>
                <p>{i18n.articles.subtitle}</p>
                <div className="grid gap-4 my-6">
                    {articles.map((article) => (
                        <ArticleCard key={article.slug} {...article} />
                    ))}
                </div>
                <p className="mt-8 text-right capitalize myt-8 text-azure hover:underline">
                    <Link href="/articles">{i18n.actions.viewAll}</Link>
                </p>
            </Section>
            <Section variant="h2" title="Contact">
                <p>
                    If you would like to get in touch with me, you can do so via{' '}
                    <Link
                        href="mailto:hello@nicob.dev"
                        className="text-azure hover:underline"
                    >
                        email
                    </Link>
                    . I am also available on{' '}
                    <Link
                        href="https://dev.to/nico_bachner"
                        className="text-azure hover:underline"
                    >
                        DEV
                    </Link>
                    .
                </p>
            </Section>
        </main>
    );
};

export default Home;
