import Link from '@components/Link';
import Card from '@components/Card';
import Head from '@components/Head';
import ShowMore from '@components/ShowMore';

import { useState } from 'react';
import { useI18n } from '@lib/hooks/i18n';
import { getRepos } from '@lib/github';

import type { NextPage, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
    const props: Props = {
        repositories: await getRepos(),
    };

    return {
        props,
        revalidate: 60,
    };
};

interface Props {
    repositories: Repository[];
}

const Repositories: NextPage<Props> = ({ repositories }) => {
    const i18n = useI18n();
    const [showAll, setShowAll] = useState(false);

    const repos = showAll
        ? repositories
        : repositories.filter(
              (repository: Repository) => repository.stars >= 2
          );

    return (
        <main>
            <Head
                title="Repositories | Nico Bachner"
                description="Nico Bachner's GitHub repositories"
                slug="repositories"
            />
            <h1 className="max-w-2xl mx-auto">GitHub Repositories</h1>
            <p className="max-w-2xl mx-auto mt-4">
                Here are all {repositories.length} of my public GitHub
                repositories. Obviously, they can all be found on{' '}
                <Link href="https://github.com/nico-bachner?tab=repositories">
                    GitHub
                </Link>{' '}
                as well.
            </p>
            <div className="grid mx-auto my-12 gap-y-8 gap-x-20 max-w-prose md:max-w-4xl alternate-4">
                {repos.map((repository) => (
                    <Card key={repository.slug} href={repository.repo_url}>
                        <h3 className="capitalize">{repository.name}</h3>
                        <p className="mt-2">{repository.description}</p>
                    </Card>
                ))}
            </div>
            <p className="my-20 text-center">
                <ShowMore
                    expanded={showAll}
                    onClick={() => {
                        setShowAll(!showAll);
                    }}
                >
                    {showAll ? i18n.actions.showLess : i18n.actions.showMore}
                </ShowMore>
            </p>
        </main>
    );
};

export default Repositories;
