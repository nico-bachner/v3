import { useState } from "react";

import Repository from "./Repository";
import Button from "./Button";

interface Repository {
    name: string;
    description: string;
    html_url: string;
    fork: boolean;
    stargazers_count: number;
}

interface Props {
    repos: Array<Repository>;
}

export default function Repos(props: Props) {
    const [showAllRepos, setShowAllRepos] = useState(false);
    const [showAllForks, setShowAllForks] = useState(false);

    return (
        <>
            <p>
                Currently, I have {props.repos.length} public repositories in
                total.
            </p>
            <section>
                <h2 className="my-4">Repositories</h2>
                <div className="grid grid-cols-1 gap-4">
                    {props.repos.map((repo: Repository, index: number) => {
                        if (
                            repo.fork != true &&
                            (repo.stargazers_count > 0 || showAllRepos)
                        ) {
                            return (
                                <Repository
                                    key={index}
                                    name={repo.name}
                                    description={repo.description}
                                    href={repo.html_url}
                                />
                            );
                        }
                    })}
                </div>
                <Button
                    onClick={() =>
                        showAllRepos
                            ? setShowAllRepos(false)
                            : setShowAllRepos(true)
                    }
                >
                    {showAllRepos ? "Show Less" : "Show All"}
                </Button>
            </section>
            <section>
                <h2 className="my-4">Forks</h2>
                <div className="grid grid-cols-1 gap-4">
                    {props.repos.map((repo: Repository, index: number) => {
                        if (
                            repo.fork == true &&
                            (repo.stargazers_count > 0 || showAllForks)
                        ) {
                            return (
                                <Repository
                                    key={index}
                                    name={repo.name}
                                    description={repo.description}
                                    href={repo.html_url}
                                />
                            );
                        }
                    })}
                </div>
                <Button
                    onClick={() =>
                        showAllForks
                            ? setShowAllForks(false)
                            : setShowAllForks(true)
                    }
                >
                    {showAllForks ? "Show Less" : "Show All"}
                </Button>
            </section>
        </>
    );
}
