import InternalLink from "../components/InternalLink";
import Project from "../components/Project";

import { useRouter } from "next/router";
import { useState } from "react";

import { projects } from "./projects";
import { articles } from "./articles";

import { homePageTranslations } from "../translations/homePage";
import { aboutPageTranslations } from "../translations/aboutPage";
import { projectsPageTranslations } from "../translations/projectsPage";
import { articlesPageTranslations } from "../translations/articlesPage";

import i18n from "../lib/i18n";

export default function Home() {
    const { locale } = useRouter();
    const homePage = i18n(locale, homePageTranslations);
    const aboutPage = i18n(locale, aboutPageTranslations);
    const projectsPage = i18n(locale, projectsPageTranslations);
    const articlesPage = i18n(locale, articlesPageTranslations);

    const [projectCount, setProjectCount] = useState(3);
    const [articleCount, setArticleCount] = useState(1);

    return (
        <>
            <h1 className="my-2 text-4xl sm:text-5xl">{homePage.title}</h1>
            <p className="my-2 text-3xl font-bold text-blue-400 dark:text-blue-300 sm:text-4xl">
                {homePage.subtitle}
            </p>
            <section>
                <h2>{aboutPage.title}</h2>
                <p>{aboutPage.preview}</p>
            </section>
            <section>
                <h2>{projectsPage.title}</h2>
                <p className="my-4">{projectsPage.subtitle}</p>
                <div className="grid grid-cols-1 gap-4">
                    {projects.slice(0, projectCount).map((project, index) => {
                        return (
                            <Project
                                key={index}
                                href={"/projects/" + project.slug}
                            >
                                <h3 className="text-2xl">{project.title}</h3>
                                <p className="sm:text-lg">{project.summary}</p>
                            </Project>
                        );
                    })}
                </div>
                <div className="flex p-4 space-x-4">
                    <button
                        onClick={() => {
                            if (projectCount < projects.length) {
                                setProjectCount(projectCount + 2);
                            }
                            console.log(projectCount);
                        }}
                        className={
                            projectCount < projects.length - 1
                                ? "link"
                                : "disabled"
                        }
                    >
                        {locale == "lu"
                            ? "Méi Weisen"
                            : locale == "de"
                            ? "Zeige Mehr"
                            : locale == "fr"
                            ? "Montrer Plus"
                            : locale == "da"
                            ? "Vise Flere"
                            : "Show More"}
                    </button>
                    <button
                        onClick={() => {
                            if (projectCount > 1) {
                                setProjectCount(projectCount - 2);
                            }
                            console.log(projectCount);
                        }}
                        className={projectCount > 2 ? "link" : "disabled"}
                    >
                        {locale == "lu"
                            ? "Manner Weisen"
                            : locale == "de"
                            ? "Zeige Weniger"
                            : locale == "fr"
                            ? "Montrer Moins"
                            : locale == "da"
                            ? "Vise Fære"
                            : "Show Less"}
                    </button>
                    <InternalLink
                        href="/projects"
                        className="flex-grow text-right link"
                    >
                        {locale == "lu"
                            ? "Alleguer Weisen"
                            : locale == "de"
                            ? "Alle Zeigen"
                            : locale == "fr"
                            ? "Montrer Tous"
                            : locale == "da"
                            ? "Vise Alle"
                            : "Show All"}
                    </InternalLink>
                </div>
            </section>
            <section>
                <h2>{articlesPage.title}</h2>
                <p className="my-4">{articlesPage.subtitle}</p>
                <ul>
                    {articles.slice(0, articleCount).map((article, index) => {
                        return (
                            <li key={index} className="my-6">
                                <InternalLink
                                    href={"/articles/" + article.slug}
                                >
                                    <h3 className="text-xl">{article.title}</h3>
                                    <p>{article.summary}</p>
                                </InternalLink>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex p-4 space-x-4">
                    <button
                        onClick={() => {
                            if (articleCount < articles.length) {
                                setArticleCount(articleCount + 2);
                            }
                            console.log(articleCount);
                        }}
                        className={
                            articleCount < articles.length - 1
                                ? "link"
                                : "disabled"
                        }
                    >
                        {locale == "lu"
                            ? "Méi Weisen"
                            : locale == "de"
                            ? "Zeige Mehr"
                            : locale == "fr"
                            ? "Montrer Plus"
                            : locale == "da"
                            ? "Vise Flere"
                            : "Show More"}
                    </button>
                    <button
                        onClick={() => {
                            if (articleCount > 1) {
                                setArticleCount(articleCount - 2);
                            }
                            console.log(articleCount);
                        }}
                        className={articleCount > 2 ? "link" : "disabled"}
                    >
                        {locale == "lu"
                            ? "Manner Weisen"
                            : locale == "de"
                            ? "Zeige Weniger"
                            : locale == "fr"
                            ? "Montrer Moins"
                            : locale == "da"
                            ? "Vise Fære"
                            : "Show Less"}
                    </button>
                    <InternalLink
                        href="/articles"
                        className="flex-grow text-right link"
                    >
                        {locale == "lu"
                            ? "Alleguer Weisen"
                            : locale == "de"
                            ? "Alle Zeigen"
                            : locale == "fr"
                            ? "Montrer Tous"
                            : locale == "da"
                            ? "Vise Alle"
                            : "Show All"}
                    </InternalLink>
                </div>
            </section>
        </>
    );
}
