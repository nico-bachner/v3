import Link from "next/link";

export default function MobileNav({ pages }) {
    return (
        <nav className="fixed bottom-0 w-screen bg-white sm:hidden dark:bg-black bg-blur">
            <ul className="grid grid-cols-4 gap-2 px-8 py-2">
                {pages.map((page, index) => {
                    return (
                        <li key={index}>
                            <Link href={page.url}>
                                <button className="w-full py-4 text-sm font-bold hover:text-blue-400">
                                    {page.title}
                                </button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
