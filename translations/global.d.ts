// Translation Types
type Locale = 'en-AU' | 'da-DK' | 'fr-LU' | 'de-LU' | 'lb-LU';

type Link = {
    title: string;
    href: string;
};

type Translation = {
    title: string;
    subtitle: string;
    description: string;
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
