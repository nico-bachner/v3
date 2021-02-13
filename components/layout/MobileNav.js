import { useRouter } from "next/router";

import IntLink from "@components/IntLink";

export default function MobileNav({ pages }) {
    const { pathname } = useRouter();

    return (
        <nav className="fixed bottom-0 z-50 w-screen bg-white sm:hidden dark:bg-black bg-blur">
            <ul className="flex py-6 text-sm font-bold justify-evenly">
                {pages.map((page, index) => {
                    return (
                        <li key={index}>
                            <IntLink
                                href={page.href}
                                as={
                                    page.slug != undefined
                                        ? "/" + page.slug
                                        : "/"
                                }
                                className={
                                    "p-2" +
                                    " " +
                                    (pathname == page.href
                                        ? "text-gray-400 dark:text-gray-600"
                                        : "hover:text-blue-500 dark:hover:text-blue-300")
                                }
                            >
                                {page.title}
                            </IntLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
