export const getUpdated = async (directory: string, slug: string) => {
    const urlPath = encodeURIComponent(`${directory}/${slug}.mdx`);

    const res = await fetch(
        `https://api.github.com/repos/nico-bachner/v3/commits?path=${urlPath}`
    );
    const history: GitHubHistory[] = await res.json();

    if (history && history.length > 0) {
        return (history[0] as GitHubHistory).commit.author.date;
    }

    return null;
};

export const getRepos = async () => {
    const res = await fetch('https://api.github.com/users/nico-bachner/repos');
    const repos: GitHubRepo[] = await res.json();

    const repositories = repos
        .filter((x: GitHubRepo) => !x.fork)
        .map((repo) => {
            const repository: Repository = {
                name: repo.name.replace(/-/g, ' '),
                slug: repo.name,
                description: repo.description,
                repo_url: repo.html_url,
                url: repo.homepage,
                stars: repo.stargazers_count,
            };

            return repository;
        }) as Repository[];

    console.log(repositories);

    const sortedRepositories = repositories.sort(
        (a: Repository, b: Repository) => {
            return b.stars - a.stars;
        }
    );

    return sortedRepositories;
};
