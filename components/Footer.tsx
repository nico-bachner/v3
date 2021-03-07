import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";

interface Page {
    title: string;
    href: string;
    slug?: string;
}

interface Props {
    pages: Array<Page>;
    hiddenPages: Array<Page>;
    otherPages: Array<Page>;
    externalPages: Array<Page>;
    className: string;
}

export default function Footer(props: Props) {
    return (
        <nav
            className={
                "grid grid-cols-2 gap-8 text-center sm:grid-cols-4" +
                " " +
                props.className
            }
        >
            <ul>
                {props.pages.map((page, index) => {
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
                {props.hiddenPages.map((item, index) => {
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
                {props.otherPages.map((item, index) => {
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
                {props.externalPages.map((link, index) => {
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
