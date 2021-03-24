export interface Page {
    title: string;
    href: string;
    slug?: string;
}

export interface Project {
    slug: string;
    title: string;
    tags: string[];
    description: string;
}

export interface Article {
    title: string;
    slug: string;
    dev_slug: string;
    description: string;
    tags: string[];
    published: Date;
}

export interface DevUser {
    name: string;
    username: string;
    twitter_username?: any;
    github_username: string;
    website_url: string;
    profile_image: string;
    profile_image_90: string;
}

export interface DevArticle {
    type_of: string;
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    slug: string;
    path: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    collection_id?: any;
    published_timestamp: Date;
    positive_reactions_count: number;
    cover_image: string;
    social_image: string;
    canonical_url: string;
    created_at: Date;
    edited_at: Date;
    crossposted_at?: any;
    published_at: Date;
    last_comment_at: Date;
    tag_list: string[];
    tags: string;
    user: DevUser;
}

export interface Repository {
    name: string;
    slug: string;
    description: string;
    url: string;
    repo_url: string;
    is_fork: boolean;
    stars: number;
}

export interface GitHubUser {
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
