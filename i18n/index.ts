import { en } from "./en";
import { da } from "./da";
import { fr } from "./fr";
import { de } from "./de";
import { lu } from "./lu";

export interface Translation {
    title: string;
    subtitle: string;
    showAll: string;
    readMore: string;
    about: {
        title: string;
        preview: string;
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
    pages: [
        {
            title: string;
        },
        {
            title: string;
            slug: string;
        },
        {
            title: string;
            slug: string;
        },
        {
            title: string;
            slug: string;
        }
    ];
}

export const translations = {
    en: en,
    da: da,
    fr: fr,
    de: de,
    lu: lu,
};
