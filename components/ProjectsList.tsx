import useSWR from 'swr';

import InternalLink from './InternalLink';
import Card from './Card';

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
        <div className="mt-4 grid gap-4">
            {data.map((project: Project, index: number) => {
                if (!props.featured || project.featured) {
                    return (
                        <InternalLink
                            className=""
                            href={'/projects/' + project.slug}
                            key={index}
                        >
                            <Card>
                                <h3>{project.title ?? project.slug}</h3>
                                <p className="mt-2">{project.description}</p>
                            </Card>
                        </InternalLink>
                    );
                }
            })}
        </div>
    ) : (
        <p>Loading Projects...</p>
    );
}
