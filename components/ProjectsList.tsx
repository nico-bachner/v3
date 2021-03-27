import useSWR from 'swr';

import Link from '../components/Link';

import type { Project } from '../lib/types';

interface Props {
    featured?: boolean;
}

export default function ProjectsList(props: Props) {
    const { data, error } = useSWR('/api/projects', (args) =>
        fetch(args).then((res) => res.json())
    );

    if (error) {
        return (
            <p>
                Failed to load projects. There may be a problem with the
                database connection. Try checking your internet status.
            </p>
        );
    }

    return data ? (
        <div className="grid gap-4 mt-4">
            {data.map((project: Project, index: number) => {
                if (!props.featured || project.featured) {
                    return (
                        <Link
                            href={'/projects/' + project.slug}
                            key={index}
                            className="card"
                        >
                            <h3>{project.title ?? project.slug}</h3>
                            <p className="mt-2">{project.description}</p>
                        </Link>
                    );
                }
            })}
        </div>
    ) : (
        <p>Loading Projects...</p>
    );
}
