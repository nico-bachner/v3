/// <reference types="next" />
/// <reference types="next/types/global" />

interface DefaultProps {
    id?: string;
    className?: string;
}

// MDX Stuff
interface MDXContent {
    compiledSource: string;
}
interface MDXProps {
    slug: string;
    content: MDXContent;
    date_updated: string;
}
type FileData = PageData & {
    [key: string]: any;
};

// General Page Types
interface PageData {
    title: string;
    description: string;
}
type PageProps = PageData & MDXProps;

// Project Types
type ProjectRawData = PageData & {
    period: string;
    featured?: boolean;
    url?: string;
    github?: string;
};
type ProjectData = ProjectRawData;
type ProjectProps = ProjectData & MDXProps;

// Article Types
type ArticleRawData = PageData & {
    date_published: string;
    featured?: boolean;
    canonical_url?: string;
};
type ArticleData = ArticleRawData & { reading_time: number };
type ArticleProps = ArticleData & MDXProps;

// Card Types
type CardProps<T> = T & {
    slug: string;
};

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
