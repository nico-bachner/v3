import Link from "next/link";

import IntLink from "@components/IntLink";
import ExtLink from "@components/ExtLink";

export default function Footer(props) {
    const pages = props.pages;
    const hiddenPages = [
        {
            title: "Uses",
            url: "/uses",
        },
        {
            title: "Repositories",
            url: "/repos",
        },
    ];
    const other = [
        {
            title: "Source Code",
            url: "https://github.com/nico-bachner/v3",
        },
        {
            title: "CV",
            url: "https://read.cv/nicob",
        },
    ];
    const links = [
        {
            title: "GitHub",
            url: "https://github.com/nico-bachner",
        },
        {
            title: "DEV",
            url: "https://dev.to/nicob",
        },
        {
            title: "Stack Overflow",
            url: "https://stackoverflow.com/users/story/13506524",
        },
        {
            title: "Code Golf",
            url: "https://code.golf/golfers/nico-bachner",
        },
    ];

    return (
        <footer className="max-w-2xl px-8 mx-auto my-24 text-center">
            <hr className="my-12 dark:border-gray-700" />
            <nav className="grid grid-cols-2 gap-8 text-gray-400 sm:grid-cols-4 dark:text-gray-600">
                <ul>
                    {pages.map((page, index) => {
                        return (
                            <li key={index} className="my-4 text-left">
                                <IntLink
                                    href={page.href}
                                    as={
                                        page.slug != undefined
                                            ? "/" + page.slug
                                            : "/"
                                    }
                                    className="hover:text-gray-500"
                                >
                                    {page.title}
                                </IntLink>
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    {hiddenPages.map((item, index) => {
                        return (
                            <li key={index} className="my-4 text-right">
                                <IntLink
                                    href={item.url}
                                    className="hover:text-gray-500"
                                >
                                    {item.title}
                                </IntLink>
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    {other.map((item, index) => {
                        return (
                            <li key={index} className="my-4 text-left">
                                <ExtLink
                                    href={item.url}
                                    className="hover:text-gray-500"
                                >
                                    {item.title}
                                </ExtLink>
                            </li>
                        );
                    })}
                </ul>
                <ul>
                    {links.map((link, index) => {
                        return (
                            <li key={index} className="my-4 text-right">
                                <ExtLink
                                    href={link.url}
                                    className="hover:text-gray-500"
                                >
                                    {link.title}
                                </ExtLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </footer>
    );
}
