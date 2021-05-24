interface GitHubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface GitHubRepository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: GitHubUser;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: Date;
    updated_at: Date;
    pushed_at: Date;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language?: any;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url?: any;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license?: any;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}

export interface Repository {
    name: string;
    slug: string;
    description: string;
    repo_url: string;
    url: string;
    stars: number;
}

export const getUpdated = async (directory: string, slug: string) => {
    const urlPath = encodeURIComponent(`${directory}/${slug}.mdx`);

    const GitHubFileHistoryResponse = await fetch(
        `https://api.github.com/repos/nico-bachner/v3/commits?path=${urlPath}&page=1&per_page=1`
    );
    const GitHubFileHistory = await GitHubFileHistoryResponse.json();

    const updated: string = GitHubFileHistory[0].commit.committer.date;

    return updated;
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
