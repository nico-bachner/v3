import Link from "next/link";
import { useRouter } from "next/router";

export default function MobileNav({ pages }) {
    const { pathname } = useRouter();

    return (
        <nav className="fixed bottom-0 z-50 w-screen bg-white sm:hidden dark:bg-black bg-blur">
            <ul className="flex p-4 text-sm font-bold justify-evenly">
                {pages.map((page, index) => {
                    return (
                        <li key={index}>
                            <Link
                                href={page.href}
                                as={
                                    page.slug != undefined
                                        ? "/" + page.slug
                                        : "/"
                                }
                            >
                                <a
                                    className={
                                        pathname == page.href
                                            ? "text-gray-500"
                                            : "hover:text-blue-500 dark:hover:text-blue-300"
                                    }
                                >
                                    {page.title}
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
