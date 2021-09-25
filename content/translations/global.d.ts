// Translation Types
type Link = {
    title: string;
    href: string;
};

type Translation = {
    general: {
        title: string;
        subtitle: string;
        description: string;
    };
    informations: {
        lastUpdated: string;
    };
    actions: {
        changeLanguage: string;
        editOnGitHub: string;
        moreInformation: string;
        read: string;
        readMore: string;
        showAll: string;
        showLess: string;
        showMore: string;
        viewAll: string;
        visit: string;
    };
    values: {
        never: string;
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
