import { en } from './en';
import { da } from './da';
import { fr } from './fr';
import { de } from './de';
import { lb } from './lb';

export interface Page {
    title: string;
    href: string;
}

export interface Translation {
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

export const translations = {
    en: en,
    da: da,
    fr: fr,
    de: de,
    lb: lb,
};
