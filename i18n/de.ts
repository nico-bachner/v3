import type { Translation } from '../lib/types';

export const de: Translation = {
    title: 'Ich bin Nico,',
    subtitle: 'ein Open Source Enthusiast.',
    about: {
        title: 'Über Mich',
        preview:
            'Ich bin ein Hobbyentwickler und Student in Luxemburg. Ich habe bereits mit virelen Technologien gearbeitet, besonders im Bereich des Web Development.',
    },
    projects: {
        title: 'Projekte',
        subtitle:
            'Hier sind ein Paar meiner Projekte. Alle meine Projekte sind Open Source und deren Source Code befindet sich auf GitHub.',
        web: 'Internetanwendungen und Webseiten',
        games: 'Videospiele',
        other: 'Andere Projekte',
    },
    articles: {
        title: 'Artikel',
        subtitle:
            'Hier sind meine neuesten Artikel. Leider sind sie aber nur auf English verfügbar.',
    },
    actions: {
        readMore: 'weiter lesen',
        showAll: 'alle zeigen',
        showMore: 'weitere zeigen',
        showLess: 'weniger zeigen',
    },
    pages: [
        {
            title: 'Startseite',
            href: '/',
        },
        {
            title: 'Über mich',
            href: '/about',
            slug: 'ueber-mich',
        },
        {
            title: 'Projekte',
            href: '/projects',
            slug: 'projekte',
        },
        {
            title: 'Artikel',
            href: '/articles',
            slug: 'artikel',
        },
        {
            title: 'Source Code',
            href: 'https://github.com/nico-bachner/v3',
        },
        {
            title: 'Uses',
            href: '/uses',
        },
        {
            title: 'Repositories',
            href: '/repositories',
        },
        {
            title: 'Mac Setup',
            href: '/mac-setup',
        },
        {
            title: 'CV',
            href: 'https://read.cv/nico_bachner',
        },
        {
            title: '',
            href: '',
        },
        {
            title: '',
            href: '',
        },
        {
            title: '',
            href: '',
        },
        {
            title: 'GitHub',
            href: 'https://github.com/nico-bachner',
        },
        {
            title: 'DEV',
            href: 'https://dev.to/nico_bachner',
        },
        {
            title: 'Twitter',
            href: 'https://twitter.com/nico_bachner',
        },
        {
            title: 'Code Golf',
            href: 'https://code.golf/golfers/nico-bachner',
        },
    ],
};
