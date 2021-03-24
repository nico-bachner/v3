import { useState } from "react";
import useSWR from "swr";

import ExternalLink from "../components/ExternalLink";
import Card from "../components/Card";

interface Repository {
    name: string;
    description: string;
    html_url: string;
    fork: boolean;
    stargazers_count: number;
}

export default function Repositories() {
    const {
        data,
        error,
    } = useSWR("https://api.github.com/users/nico-bachner/repos", (args) =>
        fetch(args).then((res) => res.json())
    );

    const [showAllRepos, setShowAllRepos] = useState(false);
    const [showAllForks, setShowAllForks] = useState(false);

    if (error) return <p>Failed to load</p>;

    return data ? (
        <>
            <h1>GitHub Repositories</h1>
            <p>
                Here are a few of my public GitHub repositories. They can all be
                found on{" "}
                <a
                    href="https://github.com/nico-bachner?tab=repositories"
                    className="link"
                >
                    GitHub
                </a>
                .
            </p>
            <p>Currently, I have {data.length} public repositories in total.</p>
            <section>
                <h2 className="my-4">Repositories</h2>
                <div className="grid grid-cols-1 gap-4">
                    {data
                        .sort((a: Repository, b: Repository) => {
                            return b.stargazers_count - a.stargazers_count;
                        })
                        .map((repo: Repository, index: number) => {
                            if (
                                repo.fork != true &&
                                (repo.stargazers_count > 0 || showAllRepos)
                            ) {
                                return (
                                    <ExternalLink
                                        className=""
                                        href={repo.html_url}
                                        key={index}
                                    >
                                        <Card>
                                            <h3 className="text-2xl capitalize">
                                                {repo.name}
                                            </h3>
                                            <p>{repo.description}</p>
                                        </Card>
                                    </ExternalLink>
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
                    className="m-4 text-blue hover:text-blue-light"
                >
                    {showAllRepos ? "Show Less" : "Show All"}
                </button>
            </section>
            <section>
                <h2 className="my-4">Forks</h2>
                <div className="grid grid-cols-1 gap-4">
                    {data.map((repo: Repository, index: number) => {
                        if (
                            repo.fork == true &&
                            (repo.stargazers_count > 0 || showAllForks)
                        ) {
                            return (
                                <ExternalLink
                                    className=""
                                    href={repo.html_url}
                                    key={index}
                                >
                                    <Card>
                                        <h3 className="text-2xl capitalize">
                                            {repo.name}
                                        </h3>
                                        <p>{repo.description}</p>
                                    </Card>
                                </ExternalLink>
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
