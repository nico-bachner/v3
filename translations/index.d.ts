// Translation Types
type Locale = 'en' | 'da' | 'fr' | 'de' | 'lb';

type Link = {
    title: string;
    href: string;
};

type Translation = {
    title: string;
    subtitle: string;
    about: {
        title: string;
        content: string;
    };
    projects: {
        title: string;
        content: string;
    };
    articles: {
        title: string;
        content: string;
    };
    contact: {
        title: string;
        content: string;
    };
    actions: {
        changeLanguage: string;
        readMore: string;
        viewAll: string;
        showAll: string;
        showMore: string;
        showLess: string;
    };
    pages: {
        main: Link[];
        other: Link[];
    };
    links: {
        social: Link[];
        other: Link[];
    };
};
