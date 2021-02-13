import Title from "@components/Title";
import IntLink from "@components/IntLink";
import Card from "@components/Card";

import { useRouter } from "next/router";
import { useState } from "react";

import { projects } from "./projects";
import { articles } from "../pages/articles";

export default function Home() {
    const { locale } = useRouter();

    const [projectCount, setProjectCount] = useState(3);
    const [articleCount, setArticleCount] = useState(1);

    return (
        <>
            <Title>Nico Bachner</Title>

            <h1>
                {locale == "lu"
                    ? "Ech sin den Nico,"
                    : locale == "de"
                    ? "Hallo, Ich bin Nico,"
                    : locale == "fr"
                    ? "Je suis Nico,"
                    : locale == "da"
                    ? "Jeg er Nico,"
                    : "Hi, I'm Nico,"}
            </h1>
            <p className="my-2 text-3xl font-bold text-blue-400 dark:text-blue-300 sm:text-4xl">
                {locale == "lu"
                    ? "en Open Source Enthusiast."
                    : locale == "de"
                    ? "ein Open Source Enthusiast."
                    : locale == "fr"
                    ? "un passionné d'Open Source."
                    : locale == "da"
                    ? "en Open Source Entusiast."
                    : "an Aspiring Open Sourcerer."}
            </p>
            <p className="subtitle">
                {locale == "lu"
                    ? "Ech sinn zurzäit och e Schüler an engem Lycée hei zu Lëtzebuerg."
                    : locale == "de"
                    ? "Ich bin zurzeit auch ein Student in einem Gymnasium in Luxemburg."
                    : locale == "fr"
                    ? "Pour le moment, je suis aussi un étudiant au Luxembourg."
                    : locale == "da"
                    ? "For den nuværende tid er jeg også en student i Luxemborg."
                    : "I'm currently also a High School Student in Luxembourg."}
            </p>
            <section>
                <h2 className="my-4">
                    {locale == "lu"
                        ? "Projeten"
                        : locale == "de"
                        ? "Projekte"
                        : locale == "fr"
                        ? "Projets"
                        : locale == "da"
                        ? "Projekter"
                        : "Projects"}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                    {projects.slice(0, projectCount).map((project, index) => {
                        return (
                            <IntLink
                                key={index}
                                href={"/projects/" + project.slug}
                            >
                                <Card link className="px-8 py-6">
                                    <h3 className="text-2xl">
                                        {project.title}
                                    </h3>
                                    <p className="sm:text-lg">
                                        {project.summary}
                                    </p>
                                </Card>
                            </IntLink>
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
                    <IntLink
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
                    </IntLink>
                </div>
            </section>
            <section>
                <h2>
                    {locale == "lu"
                        ? "Artikelen"
                        : locale == "de"
                        ? "Artiklen"
                        : locale == "fr"
                        ? "Articles"
                        : locale == "da"
                        ? "Artikler"
                        : "Articles"}
                </h2>
                <ul>
                    {articles.slice(0, articleCount).map((article, index) => {
                        return (
                            <li key={index} className="my-6">
                                <IntLink href={"/articles/" + article.slug}>
                                    <h3 className="text-xl">{article.title}</h3>
                                    <p>{article.summary}</p>
                                </IntLink>
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
                    <IntLink
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
                    </IntLink>
                </div>
            </section>
        </>
    );
}
