import type { Translation } from "../lib/types";

export const fr: Translation = {
    title: "Je suis Nico,",
    subtitle: "un passionné d'Open Source.",
    about: {
        title: "Sur Moi",
        preview:
            "Je suis un dévelopeur hobbyiste et un étudiant au Luxembourg. J'ai travaillé avec de nombreux technologies, surtout dans la branche du dévelopement Web.",
    },
    projects: {
        title: "Projets",
        subtitle:
            "Voici quelques projets que j'ai fait récemment. Les projets sont tous Open Source et leur code source se trouve sur GitHub",
        web: "Applications et Sites Web",
        games: "Jeux Vidéo",
        other: "Autres Projets",
    },
    articles: {
        title: "Articles",
        subtitle:
            "Voici quelques de mes articles. Regrettablement, ils ne sont que disponibles en anglais.",
    },
    actions: {
        readMore: "continuer à lire",
        showAll: "montrer tous",
        showMore: "montrer plus",
        showLess: "montrer moins",
    },
    pages: [
        {
            title: "Accueil",
        },
        {
            title: "Sur moi",
            slug: "sur-moi",
        },
        {
            title: "Projets",
            slug: "projets",
        },
        {
            title: "Articles",
            slug: "articles",
        },
    ],
};
