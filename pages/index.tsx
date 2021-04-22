import { useI18n } from '../hooks/i18n';

import { translations } from '../i18n';

import Link from '../components/Link';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import ArticleCard from '../components/ArticleCard';

import { ProjectProps } from '../components/Project';
import { ArticleProps } from '../components/Article';

import { getProjects, getArticles } from '../lib/mdx';

export async function getStaticProps() {
    const projects = await getProjects();
    const articles = await getArticles();

    return {
        props: {
            projects: projects.filter((project) => project.featured),
            articles,
        },
    };
}

interface HomeProps {
    projects: ProjectProps[];
    articles: ArticleProps[];
}

export default function Home({ projects, articles }: HomeProps) {
    const i18n = useI18n(translations, 'en');

    return (
        <main className="max-w-2xl mx-auto">
            <h1>{i18n.title}</h1>
            <p className="mt-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-cyan to-azure sm:text-4xl">
                {i18n.subtitle}
            </p>
            <Section variant="h2" title={i18n.about.title}>
                <p>{i18n.about.content}</p>
            </Section>
            <Section variant="h2" title={i18n.projects.title}>
                <p>{i18n.projects.subtitle}</p>
                <div className="grid gap-4 my-4">
                    {projects.map((project: ProjectProps, index: number) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <p className="mt-8 text-right capitalize text-azure hover:underline">
                    <Link href="/projects">{i18n.actions.viewAll}</Link>
                </p>
            </Section>
            <Section variant="h2" title={i18n.articles.title}>
                <p>{i18n.articles.subtitle}</p>
                <div className="grid gap-4 my-4">
                    {articles.map((article: ArticleProps, index: number) => (
                        <ArticleCard key={index} {...article} />
                    ))}
                </div>
                <p className="mt-8 text-right capitalize myt-8 text-azure hover:underline">
                    <Link href="/articles">{i18n.actions.viewAll}</Link>
                </p>
            </Section>
            <Section variant="h2" title="Contact">
                <p>
                    If you would like to get in touch with me, you can do so via{' '}
                    <Link href="mailto:hello@nicob.dev">email</Link>. I am also
                    available on{' '}
                    <Link href="https://dev.to/nico_bachner">DEV</Link>.
                </p>
            </Section>
        </main>
    );
}
