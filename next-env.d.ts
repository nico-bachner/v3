/// <reference types="next" />
/// <reference types="next/types/global" />

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
    github_url?: string;
};
type ProjectProps = MDXProps<ProjectData>;

// Article Types
type ArticleData = PageData & {
    date_published?: string;
    date_updated?: string;
    canonical_url?: string;
};
type ArticleProps = MDXProps<ArticleData & { time: number }>;
