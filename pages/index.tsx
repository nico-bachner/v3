import { useState } from "react";
import { useI18n } from "../hooks/i18n";
import { translations } from "../i18n";

import InternalLink from "../components/InternalLink";
import ProjectsList from "../components/ProjectsList";
import ArticlesList from "../components/ArticlesList";

export default function Home() {
    const i18n = useI18n(translations);

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
                <div className="flex p-4">
                    <p className="flex-grow text-right capitalize">
                        <InternalLink href="/about">
                            {i18n.actions.readMore}
                        </InternalLink>
                    </p>
                </div>
            </section>
            <section>
                <h2>{i18n.projects.title}</h2>
                <p className="my-4">{i18n.projects.subtitle}</p>
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
                            ? i18n.actions.showMore
                            : i18n.actions.showLess}
                    </button>
                    <p className="text-right capitalize sm:flex-grow">
                        <InternalLink href="/projects">
                            {i18n.actions.showAll}
                        </InternalLink>
                    </p>
                </div>
            </section>
            <section>
                <h2>{i18n.articles.title}</h2>
                <p className="my-4">{i18n.articles.subtitle}</p>
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
                    <p className="text-right capitalize sm:flex-grow">
                        <InternalLink href="/articles">
                            {i18n.actions.showAll}
                        </InternalLink>
                    </p>
                </div>
            </section>
        </>
    );
}
