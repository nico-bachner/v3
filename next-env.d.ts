/// <reference types="next" />
/// <reference types="next/types/global" />

// MDX Stuff
interface MDXContent {
    compiledSource: string;
}

type MDXProps<T> = T & {
    slug: string;
    content: MDXContent;
    date_updated: string;
};

type FileData = PageData | ProjectData | ArticleData;

// General Page Types
interface PageData {
    title: string;
    description: string;
}
type PageProps = MDXProps<PageData>;

// Project Types
type ProjectData = PageData & {
    featured?: boolean;
    url?: string;
    github?: string;
};
type ProjectCardProps = ProjectData & {
    slug: string;
};
type ProjectProps = MDXProps<ProjectData>;

// Article Types
type ArticleData = PageData & {
    date_published?: string;
    date_updated?: string;
    canonical_url?: string;
};
type ArticleCardProps = ArticleData & {
    slug: string;
    reading_time: number;
};
type ArticleProps = MDXProps<ArticleData & { time: number }>;

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

interface Translation {
    title: string;
    subtitle: string;
    about: {
        title: string;
        content: string;
    };
    projects: {
        title: string;
        subtitle: string;
        web: string;
        games: string;
        other: string;
    };
    articles: {
        title: string;
        subtitle: string;
    };
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
}
