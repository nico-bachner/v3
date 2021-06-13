import Card from '@components/Card';
import ShowMore from '@components/ShowMore';

import { useState, useEffect } from 'react';
import { useI18n } from '@lib/hooks/i18n';

const Repositories: React.VFC = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    const getRepositories = async () => {
        const res = await fetch('/api/github/repositories');
        const repositories = await res.json();
        setRepositories(repositories);
    };

    useEffect(() => {
        getRepositories();
    }, []);

    const i18n = useI18n();
    const [showAll, setShowAll] = useState(false);

    const repos = showAll
        ? repositories
        : repositories.filter(
              (repository: Repository) => repository.stars >= 2
          );

    return (
        <>
            <div className="grid mb-8 md:grid-cols-3 gap-y-4 gap-x-24">
                {repos.map((repository) => (
                    <Card
                        key={repository.slug}
                        href={repository.repo_url}
                        className="md:col-span-2 md:odd:col-start-1 md:even:col-start-2"
                    >
                        <h3 className="capitalize">{repository.name}</h3>
                        <p className="mt-2">{repository.description}</p>
                    </Card>
                ))}
            </div>
            <ShowMore
                expanded={showAll}
                onClick={() => {
                    setShowAll(!showAll);
                }}
            >
                {showAll ? i18n.actions.showLess : i18n.actions.showMore}
            </ShowMore>
        </>
    );
};

export default Repositories;
