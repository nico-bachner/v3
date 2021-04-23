import { useState } from 'react';
import { useI18n } from '../hooks/i18n';

import Link from '../components/Link';
import Card from '../components/Card';

import { translations } from '../i18n';

import getRepos, { Repository } from '../lib/repo';

export async function getStaticProps() {
    const repositories = await getRepos();

    return {
        props: {
            repositories,
        },
        revalidate: 60,
    };
}

interface Props {
    repositories: Repository[];
}

export default function Repositories({ repositories }: Props) {
    const i18n = useI18n(translations, 'en');
    const [minStars, setMinStars] = useState(2);

    return (
        <main>
            <h1 className="max-w-2xl mx-auto">GitHub Repositories</h1>
            <p className="max-w-2xl mx-auto mt-4">
                Here are all {repositories.length} of my public GitHub
                repositories. Obviously, they can all be found on{' '}
                <Link
                    href="https://github.com/nico-bachner?tab=repositories"
                    className="text-azure hover:underline"
                >
                    GitHub
                </Link>{' '}
                as well.
            </p>
            <div className="grid mx-auto my-12 gap-y-8 gap-x-20 max-w-prose md:max-w-4xl alternate-4">
                {repositories
                    .filter(
                        (repository: Repository) => repository.stars >= minStars
                    )
                    .map((repository: Repository, index: number) => (
                        <Card key={index} href={repository.repo_url}>
                            <h3 className="capitalize">{repository.name}</h3>
                            <p className="mt-2">{repository.description}</p>
                        </Card>
                    ))}
            </div>
            <p className="my-20 text-center">
                <button
                    onClick={() => {
                        if (minStars > 0) {
                            return setMinStars(minStars - 1);
                        }
                    }}
                    className="capitalize text-azure"
                >
                    {minStars > 0
                        ? minStars > 1
                            ? i18n.actions.showMore
                            : i18n.actions.showAll
                        : ''}
                </button>
            </p>
        </main>
    );
}
