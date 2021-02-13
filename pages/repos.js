import Title from "@components/Title";
import ExtLink from "@components/ExtLink";
import Card from "@components/Card";

import { useState, useEffect } from "react";

export default function About() {
    const GitHubApi = "https://api.github.com/users/nico-bachner";

    const [userData, setUserData] = useState(null);
    const getUserData = () => fetch(GitHubApi).then((res) => res.json());
    useEffect(() => {
        getUserData().then((userData) => {
            setUserData(userData);
        });
    }, []);

    const [repos, setData] = useState(null);
    const getData = () => fetch(GitHubApi + "/repos").then((res) => res.json());
    useEffect(() => {
        getData().then((repos) => {
            repos.sort((a, b) => {
                return b.stargazers_count - a.stargazers_count;
            });
            setData(repos);
        });
    }, []);

    const [all, toggleAll] = useState(false);

    return (
        <>
            <Title>Repositories | Nico Bachner</Title>

            <h1>GitHub Repositories</h1>
            <p className="subtitle">
                Here are a few of my public GitHub repositories. They can all be
                found on{" "}
                <a
                    href="https://github.com/nico-bachner?tab=repositories"
                    className="link"
                >
                    GitHub
                </a>
                . Currently, I have {userData?.public_repos} public repositories
                in total.
            </p>
            <section>
                <h2 className="my-4">Repositories</h2>
                <div className="grid grid-cols-1 gap-4">
                    {repos?.map((repo, index) => {
                        repo.name = repo.name
                            .replaceAll("-", " ")
                            .replaceAll("md", "Markdown");
                        if (
                            repo.fork != true &&
                            (repo.stargazers_count > 0 || all)
                        ) {
                            return (
                                <ExtLink key={index} href={repo.html_url}>
                                    <Card link className="px-6 py-6">
                                        <h3 className="text-2xl capitalize">
                                            {repo.name}
                                        </h3>
                                        <p>{repo.description}</p>
                                    </Card>
                                </ExtLink>
                            );
                        }
                    })}
                </div>
                <button
                    onClick={() => {
                        if (all != true) {
                            toggleAll(true);
                        } else {
                            toggleAll(false);
                        }
                    }}
                    className="m-4 link"
                >
                    {all == false ? "Show All" : "Show Less"}
                </button>
            </section>
            <section>
                <h2 className="my-4">Forks</h2>
                <div className="grid grid-cols-1 gap-4">
                    {repos?.map((repo, index) => {
                        repo.name = repo.name.replaceAll("-", " ");
                        if (repo.fork == true && repo.stargazers_count > 0) {
                            return (
                                <ExtLink key={index} href={repo.html_url}>
                                    <Card link className="px-6 py-6">
                                        <h3 className="text-2xl capitalize">
                                            {repo.name}
                                        </h3>
                                        <p>{repo.description}</p>
                                    </Card>
                                </ExtLink>
                            );
                        }
                    })}
                </div>
            </section>
        </>
    );
}
