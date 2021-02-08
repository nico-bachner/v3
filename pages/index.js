import Head from "next/head";
import ProjectsPreview from "../components/ProjectsPreview";
import ArticlesPreview from "../components/ArticlesPreview";

export default function Home() {
    return (
        <>
            <Head>
                <title>Nico Bachner</title>
            </Head>

            <h1>Hi, I'm Nico.</h1>
            <p className="my-2 text-3xl font-bold text-blue-400 dark:text-blue-300 sm:text-4xl">
                I'm an Aspiring Open Sourcerer.
            </p>
            <p className="subtitle">
                I'm a High School Student and hobby developer currently living
                in Luxembourg.
            </p>
            <ProjectsPreview />
            <ArticlesPreview />
        </>
    );
}
