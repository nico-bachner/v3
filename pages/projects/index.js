import Head from "next/head";

import Card from "@components/Card";

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
        slug: "ftp",
        summary: "A Game of Dimensions",
        type: "game",
    },
    {
        title: "The First Martian",
        slug: "tfm",
        summary: "Indie Space Exploration Game",
        type: "game",
    },
];

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects | Nico Bachner</title>
            </Head>

            <h1>Projects</h1>
            <p className="subtitle">
                Here are some projects I've made and/or have participated in
                recently. All code-based projects are Open Source and can be
                found on{" "}
                <a
                    href="https://github.com/nico-bachner?tab=repositories"
                    className="link"
                >
                    GitHub
                </a>
                , where you can also find some of my less noteworthy projects.
            </p>
            <section>
                <h2>Web Projects</h2>
                <ul>
                    {projects.map((project, index) => {
                        if (project.type == "web") {
                            return (
                                <li key={index} className="my-6 cursor-pointer">
                                    <Card
                                        href={"/projects/" + project.slug}
                                        className="px-8 py-6"
                                    >
                                        <h3 className="text-2xl">
                                            {project.title}
                                        </h3>
                                        <p>{project.summary}</p>
                                    </Card>
                                </li>
                            );
                        }
                    })}
                </ul>
            </section>
            <section>
                <h2>Games</h2>
                <ul>
                    {projects.map((project, index) => {
                        if (project.type == "game") {
                            return (
                                <li key={index} className="my-6 cursor-pointer">
                                    <Card
                                        href={"/projects/" + project.slug}
                                        className="px-8 py-6"
                                    >
                                        <h3 className="text-2xl">
                                            {project.title}
                                        </h3>
                                        <p>{project.summary}</p>
                                    </Card>
                                </li>
                            );
                        }
                    })}
                </ul>
            </section>
            <section>
                <h2>Other Projects</h2>
                <ul>
                    {projects.map((project, index) => {
                        if (project.type == "other") {
                            return (
                                <li key={index} className="my-6 cursor-pointer">
                                    <Card
                                        href={"/projects/" + project.slug}
                                        className="px-8 py-6"
                                    >
                                        <h3 className="text-2xl">
                                            {project.title}
                                        </h3>
                                        <p>{project.summary}</p>
                                    </Card>
                                </li>
                            );
                        }
                    })}
                </ul>
            </section>
        </>
    );
}
