import Head from "next/head";
import Link from "next/link";
import { projects } from "../pages/projects";
import { articles } from "../pages/articles";

export default function Home() {
    var projectCount = 3;
    var articleCount = 2;

    return (
        <>
            <Head>
                <title>Nico Bachner</title>
            </Head>

            <h1>Hi, I'm Nico.</h1>
            <p className="my-2 text-3xl font-bold text-blue-400 sm:text-4xl">
                I'm an Aspiring Open Sourcerer.
            </p>
            <p className="subtitle">
                I'm a High School Student and hobby developer currently living
                in Luxembourg.
            </p>
            <section>
                <h2>Projects</h2>
                <ul>
                    {projects.slice(0, projectCount).map((project, index) => {
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
                <div className="flex justify-between p-4 text-blue-500 transition">
                    <button
                        onClick={() => {
                            if (projectCount < projects.length) {
                                projectCount += 1;
                            }
                            console.log(projectCount);
                        }}
                        className="text-gray-500"
                    >
                        See More
                    </button>
                    <Link href="/projects">
                        <a className="hover:text-blue-600 dark:hover:text-blue-400">
                            See All
                        </a>
                    </Link>
                </div>
            </section>
            <section>
                <h2>Articles</h2>
                <ul>
                    {articles.slice(0, projectCount).map((article, index) => {
                        return (
                            <li key={index} className="my-6 cursor-pointer">
                                <Link href={"/projects/" + article.slug}>
                                    <article className="">
                                        <h3 className="font-medium">
                                            {article.title}
                                        </h3>
                                        <p className="dark:text-gray-300">
                                            {article.summary}
                                        </p>
                                    </article>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex justify-between p-4 text-blue-500 transition">
                    <button
                        onClick={() => {
                            if (articleCount < articles.length) {
                                articleCount += 1;
                            }
                            console.log(articleCount);
                        }}
                        className="text-gray-500"
                    >
                        See More
                    </button>
                    <Link href="/articles">
                        <a className="hover:text-blue-600">See All</a>
                    </Link>
                </div>
            </section>
        </>
    );
}
