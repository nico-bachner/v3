import { useRouter } from "next/router";
import { useState } from "react";

import InternalLink from "../components/InternalLink";
import Project from "../components/Project";
import Counter from "../components/Counter";
import SectionFooter from "../components/SectionFooter";

import { projects } from "./projects";
import { articles } from "./articles";

import { homePageTranslations } from "../content/translations/homePage";
import { aboutPageTranslations } from "../content/translations/aboutPage";
import { projectsPageTranslations } from "../content/translations/projectsPage";
import { articlesPageTranslations } from "../content/translations/articlesPage";

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
            <p className="my-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-blue sm:text-4xl">
                {homePage.subtitle}
            </p>
            <section>
                <h2>{aboutPage.title}</h2>
                <p>{aboutPage.preview}</p>
                <div className="flex p-4">
                    <InternalLink
                        href="/about"
                        className="flex-grow text-right text-blue hover:text-blue-light active:text-blue-dark"
                    >
                        {locale == "lu"
                            ? "Méi liesen"
                            : locale == "de"
                            ? "Mehr lesen"
                            : locale == "fr"
                            ? "En lire plus"
                            : locale == "da"
                            ? "Lese videre"
                            : "Read more"}
                    </InternalLink>
                </div>
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
                <SectionFooter href="/projects">
                    <Counter
                        items={projects}
                        count={projectCount}
                        modifier={setProjectCount}
                    />
                </SectionFooter>
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
                <SectionFooter href="/articles">
                    <Counter
                        items={articles}
                        count={articleCount}
                        modifier={setArticleCount}
                    />
                </SectionFooter>
            </section>
        </>
    );
}
