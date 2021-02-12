import Head from "next/head";
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
            setData(repos);
            console.log(repos);
        });
    }, []);

    repos?.sort(function (a, b) {
        return b.stargazers_count - a.stargazers_count;
    });

    return (
        <>
            <Head>
                <title>Repositories | Nico Bachner</title>
            </Head>

            <h1>GitHub Repositories</h1>
            <p className="subtitle">Here are all</p>
            <section className="grid grid-cols-2 gap-4">
                {repos?.map((repo, index) => {
                    repo.name = repo.name
                        .replaceAll("-", " ")
                        .replaceAll("md", "Markdown");
                    return (
                        <Card
                            key={index}
                            href={repo.html_url}
                            className="px-8 py-4"
                        >
                            <h2 className="text-2xl capitalize">{repo.name}</h2>
                            <p>{repo.stargazers_count}</p>
                        </Card>
                    );
                })}
            </section>
        </>
    );
}
