import Link from "next/link";
import { useState } from "react";
import { projects } from "../pages/projects";

export default function ProjectsPreview() {
    const [projectCount, setCount] = useState(3);

    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {projects.slice(0, projectCount).map((project, index) => {
                    return (
                        <li key={index} className="my-4">
                            <Link href={"/projects/" + project.slug}>
                                <button className="w-full px-6 py-4 card">
                                    <h3 className="text-xl">{project.title}</h3>
                                    <p>{project.summary}</p>
                                </button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className="flex p-4 space-x-4 text-blue-500">
                <button
                    onClick={() => {
                        if (projectCount < projects.length) {
                            setCount(projectCount + 2);
                        }
                        console.log(projectCount);
                    }}
                    className={
                        projectCount < projects.length - 1
                            ? "hover:text-blue-600 dark:hover:text-blue-400"
                            : "text-gray-500 cursor-not-allowed"
                    }
                >
                    Show More
                </button>
                <button
                    onClick={() => {
                        if (projectCount > 1) {
                            setCount(projectCount - 2);
                        }
                        console.log(projectCount);
                    }}
                    className={
                        projectCount > 2
                            ? "hover:text-blue-600 dark:hover:text-blue-400"
                            : "text-gray-500 cursor-not-allowed"
                    }
                >
                    Show Less
                </button>
                <Link href="/projects">
                    <a className="flex-grow text-right hover:text-blue-600 dark:hover:text-blue-400">
                        View All
                    </a>
                </Link>
            </div>
        </section>
    );
}
