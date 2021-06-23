export const getEditUrl = (path: string) =>
    `https://github.com/nico-bachner/v3/edit/main/${path}`;

export const getUpdated = async (path: string) => {
    const urlPath = encodeURIComponent(path);

    const res = await fetch(
        `https://api.github.com/repos/nico-bachner/v3/commits?path=${urlPath}`
    );
    const history: GitHubHistory[] = await res.json();
    const latest: GitHubHistory | undefined = history[0];

    if (latest) {
        return new Date(latest.commit.author.date);
    }
};

export const getRepos = async () => {
    const res = await fetch('https://api.github.com/users/nico-bachner/repos');
    const repos: GitHubRepo[] = await res.json();

    const repositories: Repository[] = repos
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
        });

    return repositories.sort((a: Repository, b: Repository) => {
        return b.stars - a.stars;
    });
};
