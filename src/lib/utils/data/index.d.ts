type ProjectData = {
    path: string[];
    title: string;
    description: string;
    from: number;
    to: number | null;
    featured: boolean;
};

type ArticleData = {
    path: string[];
    title: string;
    description: string;
    featured: boolean;
    reading_time: number;
    published: number;
};