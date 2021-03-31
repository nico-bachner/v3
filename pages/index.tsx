import { useI18n } from '../hooks/i18n';
import { useSupabase } from '../hooks/supabase';

import Link from '../components/Link';

import { translations } from '../i18n';

import type { Project, DevArticle, Article } from '../lib/types';

export async function getStaticProps() {
    const projects = await useSupabase('projects');
    const devArticlesResponse = await fetch(
        'https://dev.to/api/articles?username=nico_bachner'
    );
    const devArticles = await devArticlesResponse.json();
    const articles = devArticles.map((devArticle: DevArticle) => {
        return {
            title: devArticle.title,
            slug: devArticle.slug.slice(0, devArticle.slug.length - 5),
            dev_url: devArticle.url,
            description: devArticle.description,
            published: devArticle.published_at,
        };
    });

    return {
        props: {
            projects,
            articles,
        },
        revalidate: 1,
    };
}

interface Props {
    projects: Project[];
    articles: Article[];
}

export default function Home(props: Props) {
    const i18n = useI18n(translations, 'en');
    const projects = props.projects.filter(
        (project: Project) => project.featured
    );
    const articles = props.articles.sort(
        (a: Article, b: Article) =>
            new Date(b.published).getTime() - new Date(a.published).getTime()
    );

    return (
        <main className="max-w-2xl mx-auto">
            <h1 className="my-2">{i18n.title}</h1>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-spring to-azure sm:text-4xl">
                {i18n.subtitle}
            </p>
            <section className="my-16">
                <h2>{i18n.about.title}</h2>
                <p>{i18n.about.content}</p>
            </section>
            <section className="my-16">
                <h2>{i18n.projects.title}</h2>
                <p>{i18n.projects.subtitle}</p>
                <div className="grid gap-4 mt-4">
                    {projects.map((project: Project, index: number) => (
                        <div key={index} className="card">
                            <h3 className="capitalize ">
                                {project.title ?? project.slug}
                            </h3>
                            <p className="mt-2 mb-4">{project.description}</p>
                            <p className="flex flex-wrap space-x-4 leading-8">
                                <Link
                                    href={'/projects/' + project.slug}
                                    className="text-azure hover:underline"
                                >
                                    More Information
                                </Link>
                                {project.github_url ? (
                                    <Link
                                        href={project.github_url}
                                        className="text-azure hover:underline"
                                    >
                                        GitHub Repository
                                    </Link>
                                ) : (
                                    <></>
                                )}
                                {project.demo_url ? (
                                    <Link
                                        href={project.demo_url}
                                        className="text-azure hover:underline"
                                    >
                                        Demo / Result
                                    </Link>
                                ) : (
                                    <></>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="my-6 text-right capitalize text-azure hover:underline">
                    <Link href="/projects">{i18n.actions.viewAll}</Link>
                </p>
            </section>
            <section className="max-w-2xl mx-auto my-16">
                <h2>{i18n.articles.title}</h2>
                <p>{i18n.articles.subtitle}</p>
                <div className="grid gap-4 mt-4">
                    {articles.map((article: Article, index: number) => (
                        <div key={index} className="card">
                            <h3 className="text-2xl capitalize sm:text-3xl">
                                {article.title}
                            </h3>
                            <p className="mt-2 mb-4">{article.description}</p>
                            <p className="flex space-x-8">
                                <Link
                                    href={article.dev_url}
                                    className="text-azure hover:underline"
                                >
                                    Read on DEV
                                </Link>
                                <Link
                                    href={'/articles/' + article.slug}
                                    className="text-azure hover:underline"
                                >
                                    Read Here
                                </Link>
                            </p>
                        </div>
                    ))}
                </div>
                <p className="my-6 text-right capitalize text-azure hover:underline">
                    <Link href="/articles">{i18n.actions.viewAll}</Link>
                </p>
            </section>
            <section className="max-w-2xl mx-auto my-16">
                <h2>Contact</h2>
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
            </section>
        </main>
    );
}
