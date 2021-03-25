import type { Translation } from "../lib/types";

export const de: Translation = {
    title: "Ich bin Nico,",
    subtitle: "ein Open Source Enthusiast.",
    about: {
        title: "Über Mich",
        preview:
            "Ich bin ein Hobbyentwickler und Student in Luxemburg. Ich habe bereits mit virelen Technologien gearbeitet, besonders im Bereich des Web Development.",
    },
    projects: {
        title: "Projekte",
        subtitle:
            "Hier sind ein Paar meiner Projekte. Alle meine Projekte sind Open Source und deren Source Code befindet sich auf GitHub.",
        web: "Internetanwendungen und Webseiten",
        games: "Videospiele",
        other: "Andere Projekte",
    },
    articles: {
        title: "Artikel",
        subtitle:
            "Hier sind meine neuesten Artikel. Leider sind sie aber nur auf English verfügbar.",
    },
    actions: {
        readMore: "weiter lesen",
        showAll: "alle zeigen",
        showMore: "weitere zeigen",
        showLess: "weniger zeigen",
    },
    pages: [
        {
            title: "Startseite",
        },
        {
            title: "Über mich",
            slug: "ueber-mich",
        },
        {
            title: "Projekte",
            slug: "projekte",
        },
        {
            title: "Artikel",
            slug: "artikel",
        },
    ],
};
