import type { Translation } from "../lib/types";

export const en: Translation = {
    title: "Hi, I'm Nico.",
    subtitle: "I'm an Aspiring Open Sourcerer.",
    about: {
        title: "About Me",
        preview:
            "I'm a High School Student, Hobby Developer, and Aspiring Open Sourcerer currently living in Luxembourg. I have worked with various different technologies, especially in the domain of Web Development.",
    },
    projects: {
        title: "Projects",
        subtitle:
            "Here are some of my most cherished projects. All of my code-based projects are Open Source and their source code can be found on GitHub, where you can also find some of my less noteworthy projects.",
        web: "Web Development",
        games: "Games",
        other: "Other Projects",
    },
    articles: {
        title: "Articles",
        subtitle: "Here are some of the most recent articles I have written.",
    },
    actions: {
        readMore: "read more",
        showAll: "show all",
        showMore: "show more",
        showLess: "show less",
    },
    pages: [
        {
            title: "Home",
        },
        {
            title: "About",
            slug: "about",
        },
        {
            title: "Projects",
            slug: "projects",
        },
        {
            title: "Articles",
            slug: "articles",
        },
    ],
};
