export const getUpdated = async (directory: string, slug: string) => {
    const urlPath = encodeURIComponent(`${directory}/${slug}.mdx`);

    const GitHubHistoryResponse = await fetch(
        `https://api.github.com/repos/nico-bachner/v3/commits?path=${urlPath}`
    );
    const GitHubHistory: GitHubHistory[] = await GitHubHistoryResponse.json();

    if (GitHubHistory.length) {
        return GitHubHistory[0].commit.author.date;
    }

    return null;
};

export const getRepos = async () => {
    const GitHubRepositoriesResponse = await fetch(
        'https://api.github.com/users/nico-bachner/repos'
    );
    const GitHubRepositories = await GitHubRepositoriesResponse.json();

    const repositories = GitHubRepositories.filter(
        (x: GitHubRepository) => !x.fork
    ).map((GitHubRepository: GitHubRepository) => {
        const repository: Repository = {
            name: GitHubRepository.name.replace(/-/g, ' '),
            slug: GitHubRepository.name,
            description: GitHubRepository.description,
            repo_url: GitHubRepository.html_url,
            url: GitHubRepository.homepage,
            stars: GitHubRepository.stargazers_count,
        };

        return repository;
    });

    return repositories.sort((a: Repository, b: Repository) => {
        return b.stars - a.stars;
    });
};
