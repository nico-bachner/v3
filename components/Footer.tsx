import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";

import type { Page } from "../content/pages";

interface Props {
    pages: Array<Page>;
    hiddenPages: Array<Page>;
    otherPages: Array<Page>;
    externalPages: Array<Page>;
}

export default function Footer(props: Props) {
    const { pages, hiddenPages, otherPages, externalPages } = props;

    return (
        <nav className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4 text-gray">
            <ul>
                {pages.map((page, index) => {
                    return (
                        <li key={index} className="my-4 text-left">
                            <InternalLink
                                href={page.href}
                                as={
                                    page.slug != undefined
                                        ? "/" + page.slug
                                        : "/"
                                }
                                className="hover:text-gray-dark dark:hover:text-gray-light"
                            >
                                {page.title}
                            </InternalLink>
                        </li>
                    );
                })}
            </ul>
            <ul>
                {hiddenPages.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="my-4 text-right sm:text-center"
                        >
                            <InternalLink
                                href={item.href}
                                className="hover:text-gray-dark dark:hover:text-gray-light"
                            >
                                {item.title}
                            </InternalLink>
                        </li>
                    );
                })}
            </ul>
            <ul>
                {otherPages.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="my-4 text-left sm:text-center"
                        >
                            <ExternalLink
                                href={item.href}
                                className="hover:text-gray-dark dark:hover:text-gray-light"
                            >
                                {item.title}
                            </ExternalLink>
                        </li>
                    );
                })}
            </ul>
            <ul>
                {externalPages.map((link, index) => {
                    return (
                        <li key={index} className="my-4 text-right">
                            <ExternalLink
                                href={link.href}
                                className="hover:text-gray-dark dark:hover:text-gray-light"
                            >
                                {link.title}
                            </ExternalLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
