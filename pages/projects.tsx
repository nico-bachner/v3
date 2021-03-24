import useSWR from "swr";

import { useI18n } from "../hooks/i18n";
import { translations } from "../i18n";

import InternalLink from "../components/InternalLink";
import Card from "../components/Card";

interface Project {
    slug: string;
    title?: string;
    description?: string;
    tags?: string[];
}

export default function Projects() {
    const i18n = useI18n(translations);

    const { data, error } = useSWR("/api/projects", (args) =>
        fetch(args).then((res) => res.json())
    );

    if (error) {
        return (
            <main>
                <p>
                    Failed to load projects. There may be a problem with the
                    database connection. Try checking your internet status.
                </p>
            </main>
        );
    }

    return data ? (
        <main>
            <h1>{i18n.projects.title}</h1>
            <p>{i18n.projects.subtitle}</p>
            <div className="grid gap-4 pt-8">
                {data.map((project: Project, index: number) => {
                    return (
                        <InternalLink
                            className=""
                            href={"/projects/" + project.slug}
                            key={index}
                        >
                            <Card>
                                <h3>{project.title ?? project.slug}</h3>
                                <p className="mt-2">{project.description}</p>
                            </Card>
                        </InternalLink>
                    );
                })}
            </div>
        </main>
    ) : (
        <main>
            <h1>{i18n.projects.title}</h1>
            <p>{i18n.projects.subtitle}</p>
            <p>Loading Projects...</p>
        </main>
    );
}
