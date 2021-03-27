import { useState } from 'react';
import { useI18n } from '../hooks/i18n';
import { translations } from '../i18n';

import Link from '../components/Link';
import ProjectsList from '../components/ProjectsList';
import ArticlesList from '../components/ArticlesList';

export default function Home() {
    const i18n = useI18n(translations, 'en');

    const [showAllProjects, setShowAllProjects] = useState(false);
    const [articlesCount, setArticlesCount] = useState(3);

    return (
        <>
            <h1 className="my-2 text-4xl sm:text-5xl">{i18n.title}</h1>
            <p className="my-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-blue sm:text-4xl">
                {i18n.subtitle}
            </p>
            <section>
                <h2>{i18n.about.title}</h2>
                <p>{i18n.about.preview}</p>
                <p className="px-2 py-4 text-right capitalize text-blue">
                    <Link href="/about">{i18n.actions.readMore}</Link>
                </p>
            </section>
            <section>
                <h2>{i18n.projects.title}</h2>
                <p>{i18n.projects.subtitle}</p>
                <ProjectsList featured={showAllProjects ? false : true} />
                <div className="flex justify-between px-2 py-4 sm:space-x-8">
                    <button
                        onClick={() =>
                            showAllProjects
                                ? setShowAllProjects(false)
                                : setShowAllProjects(true)
                        }
                        className="capitalize text-blue"
                    >
                        {showAllProjects
                            ? i18n.actions.showLess
                            : i18n.actions.showMore}
                    </button>
                    <Link href="/projects" className="capitalize text-blue">
                        {i18n.actions.showAll}
                    </Link>
                </div>
            </section>
            <section>
                <h2>{i18n.articles.title}</h2>
                <p>{i18n.articles.subtitle}</p>
                <ArticlesList count={articlesCount} />
                <div className="flex justify-between px-2 py-4 sm:space-x-8">
                    <button
                        onClick={() => {
                            setArticlesCount(articlesCount + 1);
                        }}
                        className="capitalize text-blue"
                    >
                        {i18n.actions.showMore}
                    </button>
                    <Link href="/articles" className="capitalize text-blue">
                        {i18n.actions.showAll}
                    </Link>
                </div>
            </section>
            <section>
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
        </>
    );
}
