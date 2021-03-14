import { useState } from "react";
import { useI18n } from "../hooks/i18n";

import InternalLink from "../components/InternalLink";
import Project from "../components/Project";
import Article from "../components/Article";
import Counter from "../components/Counter";

import { projects } from "./projects";
import { articles } from "./articles";

import { homePageTranslations } from "../content/translations/homePage";
import { aboutPageTranslations } from "../content/translations/aboutPage";
import { projectsPageTranslations } from "../content/translations/projectsPage";
import { articlesPageTranslations } from "../content/translations/articlesPage";

export default function Home() {
    const homePage = useI18n(homePageTranslations);
    const aboutPage = useI18n(aboutPageTranslations);
    const projectsPage = useI18n(projectsPageTranslations);
    const articlesPage = useI18n(articlesPageTranslations);

    const [projectCount, setProjectCount] = useState(3);
    const [articleCount, setArticleCount] = useState(1);

    return (
        <>
            <h1 className="my-2 text-4xl sm:text-5xl">{homePage.title}</h1>
            <p className="my-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-blue sm:text-4xl">
                {homePage.subtitle}
            </p>
            <section>
                <h2>{aboutPage.title}</h2>
                <p>{aboutPage.preview}</p>
                <div className="flex p-4">
                    <div className="text-right sm:flex-grow">
                        <InternalLink href="/about">
                            {homePage.showMore}
                        </InternalLink>
                    </div>
                </div>
            </section>
            <section>
                <h2>{projectsPage.title}</h2>
                <p className="my-4">{projectsPage.subtitle}</p>
                <div className="grid gap-4">
                    {projects.slice(0, projectCount).map((project, index) => {
                        return (
                            <Project
                                key={index}
                                title={project.title}
                                slug={project.slug}
                                summary={project.summary}
                            />
                        );
                    })}
                </div>
                <div className="flex justify-between px-2 py-4 sm:space-x-8">
                    <Counter
                        items={projects}
                        count={projectCount}
                        modifier={setProjectCount}
                    />
                    <div className="text-right sm:flex-grow">
                        <InternalLink href="/projects">
                            {homePage.showAll}
                        </InternalLink>
                    </div>
                </div>
            </section>
            <section>
                <h2>{articlesPage.title}</h2>
                <p className="my-4">{articlesPage.subtitle}</p>
                <div className="grid gap-4">
                    {articles.slice(0, articleCount).map((article, index) => {
                        return (
                            <Article
                                key={index}
                                title={article.title}
                                slug={article.slug}
                                summary={article.summary}
                            />
                        );
                    })}
                </div>
                <div className="flex justify-between px-2 py-4 sm:space-x-8">
                    <Counter
                        items={articles}
                        count={articleCount}
                        modifier={setArticleCount}
                    />
                    <div className="text-right sm:flex-grow">
                        <InternalLink href="/articles">
                            {homePage.showAll}
                        </InternalLink>
                    </div>
                </div>
            </section>
        </>
    );
}
