import { useI18n } from '../hooks/i18n';

import { translations } from '../i18n';

import Link from '../components/Link';
import ProjectCard, { ProjectProps } from '../components/ProjectCard';
import ArticleCard, { ArticleProps } from '../components/ArticleCard';

import { getProjects, getArticles } from '../lib/mdx';

export async function getStaticProps() {
    const allProjects = await getProjects();
    const projects = allProjects.filter((project) => project.data.featured);

    const articles = await getArticles();

    return {
        props: {
            projects,
            articles,
        },
        revalidate: 1,
    };
}

interface Props {
    projects: ProjectProps[];
    articles: ArticleProps[];
}

export default function Home(props: Props) {
    const i18n = useI18n(translations, 'en');

    return (
        <main className="max-w-2xl mx-auto">
            <h1>{i18n.title}</h1>
            <p className="mt-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-cyan to-azure sm:text-4xl">
                {i18n.subtitle}
            </p>
            <section className="my-20">
                <h2>{i18n.about.title}</h2>
                <p className="mt-4">{i18n.about.content}</p>
            </section>
            <section className="my-20">
                <h2>{i18n.projects.title}</h2>
                <p className="my-4">{i18n.projects.subtitle}</p>
                <div className="grid gap-4">
                    {props.projects.map(
                        (project: ProjectProps, index: number) => (
                            <ProjectCard key={index} {...project} />
                        )
                    )}
                </div>
                <p className="mt-8 text-right capitalize text-azure hover:underline">
                    <Link href="/projects">{i18n.actions.viewAll}</Link>
                </p>
            </section>
            <section className="max-w-2xl mx-auto my-20">
                <h2>{i18n.articles.title}</h2>
                <p className="my-4">{i18n.articles.subtitle}</p>
                <div className="grid gap-4">
                    {props.articles.map(
                        (article: ArticleProps, index: number) => (
                            <ArticleCard key={index} {...article} />
                        )
                    )}
                </div>
                <p className="mt-8 text-right capitalize myt-8 text-azure hover:underline">
                    <Link href="/articles">{i18n.actions.viewAll}</Link>
                </p>
            </section>
            <section className="max-w-2xl mx-auto my-20">
                <h2>Contact</h2>
                <p className="mt-4">
                    If you would like to get in touch with me, you can do so via{' '}
                    <Link href="mailto:hello@nicob.dev">email</Link>. I am also
                    available on{' '}
                    <Link href="https://dev.to/nico_bachner">DEV</Link>.
                </p>
            </section>
        </main>
    );
}
