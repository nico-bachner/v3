import Link from '@components/Link';
import Card from '@components/Card';
import ShowMore from '@components/ShowMore';

import { useState, useEffect } from 'react';
import { useI18n } from '@hooks/i18n';

import styles from './Repositories.module.css';

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
            <div className={styles.repositories}>
                {repos.map((repository) => (
                    <Link key={repository.slug} href={repository.repo_url}>
                        <Card>
                            <h3>{repository.name}</h3>
                            <p>{repository.description}</p>
                        </Card>
                    </Link>
                ))}
            </div>
            <ShowMore
                expanded={showAll}
                onToggle={() => {
                    setShowAll(!showAll);
                }}
            >
                {showAll ? i18n.actions.showLess : i18n.actions.showMore}
            </ShowMore>
        </>
    );
};

export default Repositories;
