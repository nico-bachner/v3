import Head from "next/head";
import Link from "next/link";

export const projects = [
    {
        title: "SOS School",
        slug: "sos-school",
        summary:
            "A student initiative to help primary school children in Luxembourg affected by COVID-19",
    },
    {
        title: "Career Guru",
        slug: "career-guru",
        summary:
            "Collaborative product of a hackathon. It is a platform designed to aid students in discovering their professional orientation",
    },
    {
        title: "Markdown Paper",
        slug: "md-paper",
        summary:
            "A command line interface to generate PDFs from scientific papers written in Markdown",
    },
    {
        title: "Find The Polygon",
        slug: "ftp",
        summary: "A Game of Dimensions",
    },
    {
        title: "The First Martian",
        slug: "tfm",
        summary: "Indie Space Exploration Game",
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
                Here are some projects I've made and have participated in
                recently.
            </p>
            <ul>
                {projects.map((project, index) => {
                    return (
                        <li key={index} className="my-4 cursor-pointer">
                            <Link href={"/projects/" + project.slug}>
                                <article className="px-6 py-4 border rounded dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <h3>{project.title}</h3>
                                    <p className="dark:text-gray-300">
                                        {project.summary}
                                    </p>
                                </article>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
