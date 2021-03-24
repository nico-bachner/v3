import { useState } from "react";
import useSWR from "swr";

import ExternalLink from "../components/ExternalLink";
import Card from "../components/Card";

import type { Repository } from "../lib/types";

export default function Repositories() {
    const { data, error } = useSWR("/api/repositories", (args) =>
        fetch(args).then((res) => res.json())
    );

    const [showAllRepos, setShowAllRepos] = useState(false);
    const [showAllForks, setShowAllForks] = useState(false);

    if (error) return <p>Failed to load</p>;

    return data ? (
        <>
            <p>
                Currently, I have {data.length} public repositories in total
                (forks included).
            </p>
            <section>
                <h2 className="my-4">Repositories</h2>
                <div className="grid grid-cols-1 gap-4">
                    {data
                        .sort((a: Repository, b: Repository) => {
                            return b.stars - a.stars;
                        })
                        .map((repo: Repository, index: number) => {
                            if (
                                repo.is_fork != true &&
                                (repo.stars > 0 || showAllRepos)
                            ) {
                                return (
                                    <Card key={index}>
                                        <h3 className="text-2xl text-center capitalize sm:text-3xl">
                                            {repo.name}
                                        </h3>
                                        <p className="mt-2 text-center">
                                            {repo.description}
                                        </p>
                                        <div className="flex mt-4 justify-evenly">
                                            <ExternalLink href={repo.repo_url}>
                                                GitHub Repository
                                            </ExternalLink>
                                            {repo.url ? (
                                                <ExternalLink href={repo.url}>
                                                    Project Site
                                                </ExternalLink>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </Card>
                                );
                            }
                        })}
                </div>
                <button
                    onClick={() =>
                        showAllRepos
                            ? setShowAllRepos(false)
                            : setShowAllRepos(true)
                    }
                    className="m-4 text-blue"
                >
                    {showAllRepos ? "Show Less" : "Show All"}
                </button>
            </section>
            <section>
                <h2 className="my-4">Forks</h2>
                <div className="grid grid-cols-1 gap-4">
                    {data.map((repo: Repository, index: number) => {
                        if (repo.is_fork && (repo.stars > 0 || showAllForks)) {
                            return (
                                <Card key={index}>
                                    <h3 className="text-2xl text-center capitalize sm:text-3xl">
                                        {repo.name}
                                    </h3>
                                    <p className="mt-2 text-center">
                                        {repo.description}
                                    </p>
                                    <div className="flex mt-4 justify-evenly">
                                        <ExternalLink href={repo.repo_url}>
                                            GitHub Repository
                                        </ExternalLink>
                                        {repo.url ? (
                                            <ExternalLink href={repo.url}>
                                                Project Site
                                            </ExternalLink>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </Card>
                            );
                        }
                    })}
                </div>
                <button
                    className="m-4 text-blue"
                    onClick={() =>
                        showAllForks
                            ? setShowAllForks(false)
                            : setShowAllForks(true)
                    }
                >
                    {showAllForks ? "Show Less" : "Show All"}
                </button>
            </section>
        </>
    ) : (
        <>
            <h1>GitHub Repositories</h1>
            <p>Loading...</p>
        </>
    );
}
