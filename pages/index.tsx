import { useI18n } from '../hooks/i18n';
import { useSupabase } from '../hooks/supabase';

import Link from '../components/Link';
import Card from '../components/Card';

import { translations } from '../i18n';

import type { Project, DevArticle, Article } from '../lib/types';

export async function getStaticProps() {
    const projectsResponse = await useSupabase('projects');
    const projects = await projectsResponse?.filter(
        (project: Project) => project.featured
    );

    const devArticlesResponse = await fetch(
        'https://dev.to/api/articles?username=nico_bachner'
    );
    const devArticles = await devArticlesResponse.json();
    const articles = devArticles
        .sort(
            (a: DevArticle, b: DevArticle) =>
                new Date(b.published_at).getTime() -
                new Date(a.published_at).getTime()
        )
        .map((devArticle: DevArticle) => {
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

    return (
        <main className="max-w-2xl mx-auto">
            <h1>{i18n.title}</h1>
            <p className="mt-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-spring to-azure sm:text-4xl">
                {i18n.subtitle}
            </p>
            <section className="my-20">
                <h2>{i18n.about.title}</h2>
                <p>{i18n.about.content}</p>
            </section>
            <section className="my-20">
                <h2>{i18n.projects.title}</h2>
                <p>{i18n.projects.subtitle}</p>
                <div className="grid gap-4">
                    {props.projects.map((project: Project, index: number) => (
                        <Card key={index}>
                            <h3 className="capitalize ">
                                {project.title ?? project.slug}
                            </h3>
                            <p className="mt-2 mb-4">{project.description}</p>
                            <nav className="flex flex-wrap justify-between leading-8 sm:justify-start sm:space-x-8">
                                <Link href={'/projects/' + project.slug}>
                                    More Information
                                </Link>
                                {project.github_url && (
                                    <Link href={project.github_url}>
                                        Source Code
                                    </Link>
                                )}
                                {project.demo_url && (
                                    <Link href={project.demo_url}>
                                        Demo / Result
                                    </Link>
                                )}
                            </nav>
                        </Card>
                    ))}
                </div>
                <p className="mt-8 text-right capitalize text-azure hover:underline">
                    <Link href="/projects">{i18n.actions.viewAll}</Link>
                </p>
            </section>
            <section className="max-w-2xl mx-auto my-20">
                <h2>{i18n.articles.title}</h2>
                <p>{i18n.articles.subtitle}</p>
                <div className="grid gap-4">
                    {props.articles.map((article: Article, index: number) => (
                        <Card key={index}>
                            <h3 className="text-2xl capitalize sm:text-3xl">
                                {article.title}
                            </h3>
                            <p className="mt-2 mb-4">{article.description}</p>
                            <nav className="flex justify-between sm:justify-start sm:space-x-8">
                                <Link href={article.dev_url}>Read on DEV</Link>
                                <Link href={'/articles/' + article.slug}>
                                    Read Here
                                </Link>
                            </nav>
                        </Card>
                    ))}
                </div>
                <p className="mt-8 text-right capitalize myt-8 text-azure hover:underline">
                    <Link href="/articles">{i18n.actions.viewAll}</Link>
                </p>
            </section>
            <section className="max-w-2xl mx-auto my-20">
                <h2>Contact</h2>
                <p>
                    If you would like to get in touch with me, you can do so via{' '}
                    <Link href="mailto:hello@nicob.dev">email</Link>. I am also
                    available on{' '}
                    <Link href="https://dev.to/nico_bachner">DEV</Link>.
                </p>
            </section>
        </main>
    );
}
