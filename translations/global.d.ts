// Translation Types
type Locale = 'en-AU' | 'da-DK' | 'fr-LU' | 'de-LU' | 'lb-LU';

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
    actions: {
        changeLanguage: string;
        moreInformation: string;
        read: string;
        readMore: string;
        showAll: string;
        showLess: string;
        showMore: string;
        viewAll: string;
        visit: string;
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
