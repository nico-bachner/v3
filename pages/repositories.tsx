import { useState } from 'react';
import { useI18n } from '../hooks/i18n';

import Link from '../components/Link';
import Card from '../components/Card';

import { translations } from '../i18n';

import type { GitHubRepository } from '../lib/types';

export async function getStaticProps() {
    const GitHubRepositoriesResponse = await fetch(
        'https://api.github.com/users/nico-bachner/repos'
    );
    const GitHubRepositories = await GitHubRepositoriesResponse.json();
    const repositories = await GitHubRepositories.filter(
        (x: GitHubRepository) => !x.fork
    ).sort((a: GitHubRepository, b: GitHubRepository) => {
        return b.stargazers_count - a.stargazers_count;
    });

    return {
        props: {
            repositories,
        },
        revalidate: 1,
    };
}

interface Props {
    repositories: GitHubRepository[];
}

export default function Repositories(props: Props) {
    const i18n = useI18n(translations, 'en');
    const [minStars, setMinStars] = useState(2);

    return (
        <main>
            <section className="max-w-2xl mx-auto mb-8">
                <h1>GitHub Repositories</h1>
                <p>
                    Here are all {props.repositories.length} of my public GitHub
                    repositories. Obviously, they can all be found on{' '}
                    <Link
                        href="https://github.com/nico-bachner?tab=repositories"
                        className="text-azure hover:underline"
                    >
                        GitHub
                    </Link>{' '}
                    as well.
                </p>
            </section>
            <section className="grid grid-cols-1 gap-4 mx-auto mt-4 max-w-prose md:max-w-4xl md:grid-cols-7">
                {props.repositories
                    .filter(
                        (repository: GitHubRepository) =>
                            repository.stargazers_count >= minStars
                    )
                    .map((repository: GitHubRepository, index: number) => (
                        <Card
                            key={index}
                            className={
                                'md:col-span-3' +
                                ' ' +
                                (index % 3 == 0
                                    ? 'md:col-start-1'
                                    : index % 3 == 1
                                    ? 'md:col-start-3'
                                    : 'md:col-start-5')
                            }
                            href={repository.html_url}
                        >
                            <h3 className="text-2xl text-center capitalize sm:text-3xl">
                                {repository.name.replace(/-/g, ' ')}
                            </h3>
                            <p className="mt-2 mb-0 text-center">
                                {repository.description}
                            </p>
                        </Card>
                    ))}
            </section>
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
