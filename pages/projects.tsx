import { useRouter } from "next/router";

import Project from "../components/Project";

import { projectsPageTranslations } from "../content/translations/projectsPage";

import i18n from "../lib/i18n";

export const projects = [
    {
        title: "SOS School",
        slug: "sos-school",
        type: "web",
        summary:
            "A student initiative to help primary school children in Luxembourg affected by COVID-19",
    },
    {
        title: "Career Guru",
        slug: "career-guru",
        type: "web",
        summary:
            "Collaborative product of a hackathon. It is a platform designed to aid students in discovering their professional orientation",
    },
    {
        title: "Markdown Paper",
        slug: "md-paper",
        type: "other",
        summary:
            "A command line interface to generate PDFs from scientific papers written in Markdown",
    },
    {
        title: "Find The Polygon",
        slug: "find-the-polygon",
        summary: "A Game of Dimensions",
        type: "game",
    },
    {
        title: "The First Martian",
        slug: "the-first-martian",
        summary: "Indie Space Exploration Game",
        type: "game",
    },
];

export default function Projects() {
    const { locale } = useRouter();
    const projectsPage = i18n(locale, projectsPageTranslations);

    return (
        <>
            <h1>{projectsPage.title}</h1>
            <p>{projectsPage.subtitle}</p>
            <section>
                <h2 className="my-4">{projectsPage.web}</h2>
                <ul className="grid grid-cols-1 gap-4">
                    {projects.map((project, index) => {
                        if (project.type == "web") {
                            return (
                                <li key={index}>
                                    <Project href={"/projects/" + project.slug}>
                                        <h3 className="text-2xl">
                                            {project.title}
                                        </h3>
                                        <p className="sm:text-lg">
                                            {project.summary}
                                        </p>
                                    </Project>
                                </li>
                            );
                        }
                    })}
                </ul>
            </section>
            <section>
                <h2 className="my-4">{projectsPage.games}</h2>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {projects.map((project, index) => {
                        if (project.type == "game") {
                            return (
                                <li key={index}>
                                    <Project href={"/projects/" + project.slug}>
                                        <h3 className="text-2xl">
                                            {project.title}
                                        </h3>
                                        <p className="sm:text-lg">
                                            {project.summary}
                                        </p>
                                    </Project>
                                </li>
                            );
                        }
                    })}
                </ul>
            </section>
            <section>
                <h2 className="my-4">{projectsPage.other}</h2>
                <ul className="grid grid-cols-1 gap-4">
                    {projects.map((project, index) => {
                        if (project.type == "other") {
                            return (
                                <li key={index}>
                                    <Project href={"/projects/" + project.slug}>
                                        <h3 className="text-2xl">
                                            {project.title}
                                        </h3>
                                        <p className="sm:text-lg">
                                            {project.summary}
                                        </p>
                                    </Project>
                                </li>
                            );
                        }
                    })}
                </ul>
            </section>
        </>
    );
}
