type YAML = {
    [key: string]: string | number | boolean | Date;
};

// MDX Stuff
interface MDXData {
    title: string;
    description: string;
    slug: string;
}
interface MDXContent {
    mdx_content: { compiledSource: string };
    last_updated: string;
    edit_url: string;
}
type MDXProps = MDXData & MDXContent;

// General Page Types
type PageData = MDXData;
type PageProps = MDXProps;

// Project Types
type ProjectData = MDXData & {
    from: number;
    to: number | null;
    period: string;
    featured: boolean;
};
type ProjectProps = MDXProps;

// Article Types
type ArticleData = MDXData & {
    featured: boolean;
    reading_time: number;
    published: number;
};
type ArticleProps = MDXProps & {
    canonical_url: string | null;
};

// Database Types
interface ViewItem {
    slug: string;
    type: string;
    views: number;
}

// Other
interface Repository {
    name: string;
    slug: string;
    description: string;
    repo_url: string;
    url: string;
    stars: number;
}

interface Page {
    title: string;
    href: string;
}

type Locale = 'en' | 'da' | 'fr' | 'de' | 'lb';
interface Topic {
    title: string;
    content: string;
}
interface Translation {
    title: string;
    subtitle: string;
    about: Topic;
    projects: Topic;
    articles: Topic;
    contact: Topic;
    actions: {
        changeLanguage: string;
        readMore: string;
        viewAll: string;
        showAll: string;
        showMore: string;
        showLess: string;
    };
    pages: Page[];
    links: Page[];
    other: Page[];
}

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

interface GitHubRepo {
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

interface GitHubHistory {
    sha: string;
    node_id: string;
    commit: Commit;
    url: string;
    html_url: string;
    comments_url: string;
    author: Author;
    committer: Author;
    parents?: Parents[] | null;
}
interface Commit {
    author: CommitAuthor;
    committer: CommitAuthor;
    message: string;
    tree: Tree;
    url: string;
    comment_count: number;
    verification: Verification;
}
interface CommitAuthor {
    name: string;
    email: string;
    date: string;
}
interface Tree {
    sha: string;
    url: string;
}
interface Verification {
    verified: boolean;
    reason: string;
    signature?: null;
    payload?: null;
}
interface Author {
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
interface Parents {
    sha: string;
    url: string;
    html_url: string;
}
