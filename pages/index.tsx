import { useI18n } from '../hooks/i18n';
import { useSupabase } from '../hooks/supabase';

import Link from '../components/Link';
import ArticlesList from '../components/ArticlesList';

import { translations } from '../i18n';

import type { Project, Article } from '../lib/types';

export async function getStaticProps() {
    const projects = await useSupabase('projects');
    const articles = await useSupabase('articles');

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
        <main className="mx-auto max-w-prose">
            <h1 className="my-2 text-4xl sm:text-5xl">{i18n.title}</h1>
            <p className="my-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-blue sm:text-4xl">
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
                    {props.projects.map((project: Project, index: number) => {
                        if (project.featured) {
                            return (
                                <Link
                                    href={'/projects/' + project.slug}
                                    key={index}
                                    className="card"
                                >
                                    <h3>{project.title ?? project.slug}</h3>
                                    <p className="mt-2">
                                        {project.description}
                                    </p>
                                </Link>
                            );
                        }
                    })}
                </div>
                <p className="my-6 text-right capitalize text-blue hover:underline">
                    <Link href="/projects">{i18n.actions.showAll}</Link>
                </p>
            </section>
            <section className="my-16">
                <h2>{i18n.articles.title}</h2>
                <p>{i18n.articles.subtitle}</p>
                <ArticlesList />
                <p className="my-6 text-right capitalize text-blue hover:underline">
                    <Link href="/articles">{i18n.actions.showAll}</Link>
                </p>
            </section>
            <section className="my-16">
                <h2>Contact</h2>
                <p>
                    If you would like to get in touch with me, you can do so via{' '}
                    <Link
                        href="mailto:hello@nicob.dev"
                        className="text-blue hover:underline"
                    >
                        email
                    </Link>
                    . I am also available on{' '}
                    <Link
                        href="https://dev.to/nico_bachner"
                        className="text-blue hover:underline"
                    >
                        DEV
                    </Link>
                    .
                </p>
            </section>
        </main>
    );
}
