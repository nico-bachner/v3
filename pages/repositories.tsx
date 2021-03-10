import useSWR from "swr";

import Repos from "../components/Repos";

export default function Repositories() {
    const {
        data,
        error,
    } = useSWR("https://api.github.com/users/nico-bachner/repos", (args) =>
        fetch(args).then((res) => res.json())
    );

    if (error) return <h1>Failed to load</h1>;
    if (!data) return <h1>Loading...</h1>;

    return (
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
            <Repos
                repos={data.sort(
                    (
                        a: { stargazers_count: number },
                        b: { stargazers_count: number }
                    ) => {
                        return b.stargazers_count - a.stargazers_count;
                    }
                )}
            />
        </>
    );
}
