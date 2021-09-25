type ProjectData = {
    path: string[];
    title: string;
    description: string;
    featured: boolean;
    from: number;
    to: number | null;
};

type ArticleData = {
    path: string[];
    title: string;
    description: string;
    featured: boolean;
    published: number | false;
    reading_time: number;
};

type PaperData = {
    path: string[];
    title: string;
    description: string;
    featured: boolean;
    published: number | false;
    institution: string | null;
};

type PageData = {
    path: string[];
    title: string;
    description: string;
    featured: boolean;
};
