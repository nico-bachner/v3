import Project from "./Project";

import { useState } from "react";

type Repo = {
    name: string;
    description: string;
    html_url: string;
    fork: boolean;
    stargazers_count: number;
};

export default function Repos(props: { repos: any }) {
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
                    {props.repos.map((repo: Repo, index: number) => {
                        repo.name = repo.name
                            .replaceAll("-", " ")
                            .replaceAll("md", "Markdown");
                        if (
                            repo.fork != true &&
                            (repo.stargazers_count > 0 || showAllRepos)
                        ) {
                            return (
                                <Project key={index} href={repo.html_url}>
                                    <h3 className="text-2xl capitalize">
                                        {repo.name}
                                    </h3>
                                    <p>{repo.description}</p>
                                </Project>
                            );
                        }
                    })}
                </div>
                <button
                    onClick={() => {
                        if (showAllRepos != true) {
                            setShowAllRepos(true);
                        } else {
                            setShowAllRepos(false);
                        }
                    }}
                    className="m-4 text-blue hover:text-blue-light"
                >
                    {showAllRepos == false ? "Show All" : "Show Less"}
                </button>
            </section>
            <section>
                <h2 className="my-4">Forks</h2>
                <div className="grid grid-cols-1 gap-4">
                    {props.repos.map((repo: Repo, index: number) => {
                        repo.name = repo.name.replaceAll("-", " ");
                        if (
                            repo.fork == true &&
                            (repo.stargazers_count > 0 || showAllForks)
                        ) {
                            return (
                                <Project key={index} href={repo.html_url}>
                                    <h3 className="text-2xl capitalize">
                                        {repo.name}
                                    </h3>
                                    <p>{repo.description}</p>
                                </Project>
                            );
                        }
                    })}
                </div>
                <button
                    onClick={() => {
                        if (showAllForks != true) {
                            setShowAllForks(true);
                        } else {
                            setShowAllForks(false);
                        }
                    }}
                    className="m-4 text-blue hover:text-blue-light"
                >
                    {showAllForks == false ? "Show All" : "Show Less"}
                </button>
            </section>
        </>
    );
}
