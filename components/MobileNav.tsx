import { useRouter } from "next/router";

import InternalLink from "./InternalLink";

interface Page {
    title: string;
    href: string;
    slug: string;
}

export default function MobileNav(props: { pages: Array<Page> }) {
    const { pathname } = useRouter();

    return (
        <nav className="fixed bottom-0 z-50 w-screen sm:hidden glass">
            <ul className="flex py-8 text-sm font-bold justify-evenly">
                {props.pages.map((page, index) => {
                    return (
                        <li key={index}>
                            <InternalLink
                                href={page.href}
                                as={
                                    page.slug != undefined
                                        ? "/" + page.slug
                                        : "/"
                                }
                                className={
                                    pathname == page.href
                                        ? "p-2 text-gray-light dark:text-gray-dark"
                                        : "p-2"
                                }
                            >
                                {page.title}
                            </InternalLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
