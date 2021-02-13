import Title from "@components/Title";
import ExtLink from "@components/ExtLink";
import Card from "@components/Card";

import { useState, useEffect } from "react";

export default function About() {
    const [repos, setData] = useState(null);
    const getData = () =>
        fetch("https://api.github.com/users/nico-bachner/repos").then((res) =>
            res.json()
        );
    useEffect(() => {
        getData().then((repos) => {
            repos.sort((a, b) => {
                return b.stargazers_count - a.stargazers_count;
            });
            setData(repos);
        });
    }, []);

    return (
        <>
            <Title>Repositories | Nico Bachner</Title>

            <h1>GitHub Repositories</h1>
            <p className="subtitle">
                Here are a few of my public GitHub repositories. The rest can be
                found on{" "}
                <a
                    href="https://github.com/nico-bachner?tab=repositories"
                    className="link"
                >
                    GitHub
                </a>
            </p>
            <section>
                <h2 className="my-4">Repositories</h2>
                <div className="grid grid-cols-1 gap-4">
                    {repos?.map((repo, index) => {
                        repo.name = repo.name
                            .replaceAll("-", " ")
                            .replaceAll("md", "Markdown");
                        if (repo.fork != true && repo.stargazers_count > 0) {
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
