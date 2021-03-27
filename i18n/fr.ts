import type { Translation } from '../lib/types';

export const fr: Translation = {
    title: 'Je suis Nico,',
    subtitle: "un passionné d'Open Source.",
    about: {
        title: 'Sur Moi',
        preview:
            "Je suis un dévelopeur hobbyiste et un étudiant au Luxembourg. J'ai travaillé avec de nombreux technologies, surtout dans la branche du dévelopement Web.",
    },
    projects: {
        title: 'Projets',
        subtitle:
            "Voici quelques projets que j'ai fait récemment. Les projets sont tous Open Source et leur code source se trouve sur GitHub",
        web: 'Applications et Sites Web',
        games: 'Jeux Vidéo',
        other: 'Autres Projets',
    },
    articles: {
        title: 'Articles',
        subtitle:
            'Voici quelques de mes articles. Regrettablement, ils ne sont que disponibles en anglais.',
    },
    actions: {
        readMore: 'continuer à lire',
        showAll: 'montrer tous',
        showMore: 'montrer plus',
        showLess: 'montrer moins',
    },
    pages: [
        {
            title: 'Accueil',
            href: '/',
        },
        {
            title: 'Sur moi',
            href: '/about',
            slug: 'sur-moi',
        },
        {
            title: 'Projets',
            href: '/projects',
            slug: 'projets',
        },
        {
            title: 'Articles',
            href: '/articles',
            slug: 'articles',
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
