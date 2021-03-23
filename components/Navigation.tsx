import { useRouter } from "next/router";

import type { Page } from "../i18n/pages";

import InternalLink from "./InternalLink";
import Logo from "./Logo";

interface Props {
    pages: Array<Page>;
}

export default function Navigation(props: Props) {
    const router = useRouter();
    const locale = router.locale;

    return (
        <>
            <nav className="top-0 z-50 flex items-center justify-between max-w-4xl p-8 mx-auto my-4 font-medium sm:my-8 sm:sticky glass">
                <a href="/" className="hover:text-gray">
                    <Logo className="w-12 h-12" />
                </a>
                <ul className="justify-end flex-grow hidden space-x-8 text-lg sm:flex">
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
                                        router.pathname == page.href
                                            ? "text-gray-dark cursor-default"
                                            : "hover:text-gray"
                                    }
                                >
                                    {page.title}
                                </InternalLink>
                            </li>
                        );
                    })}
                </ul>
                <label htmlFor="#language-select" className="sr-only">
                    {locale == "lu"
                        ? "Sprooch ännern"
                        : locale == "de"
                        ? "Sprache ändern"
                        : locale == "fr"
                        ? "Changer la langue"
                        : locale == "da"
                        ? "Ændrere sprog"
                        : "Change language"}
                </label>
                <select
                    id="language-select"
                    onChange={(item) => {
                        const locale = item.target.value;
                        router.push(router.pathname, router.pathname, {
                            locale,
                        });
                    }}
                    defaultValue={router.locale}
                    className="py-1 pr-8 ml-8 text-gray-600 bg-transparent border border-gray-400 rounded dark:text-gray-300 dark:border-gray-700"
                >
                    {router.locales?.map((language, index) => {
                        return (
                            <option key={index} value={language}>
                                {language.toUpperCase()}
                            </option>
                        );
                    })}
                </select>
            </nav>
            <nav className="fixed bottom-0 z-50 flex w-screen py-8 text-sm font-bold sm:hidden glass justify-evenly">
                {props.pages.map((page, index) => {
                    return (
                        <InternalLink
                            key={index}
                            href={page.href}
                            as={page.slug != undefined ? "/" + page.slug : "/"}
                            className={
                                router.pathname == page.href
                                    ? "p-2 text-gray"
                                    : "p-2"
                            }
                        >
                            {page.title}
                        </InternalLink>
                    );
                })}
            </nav>
        </>
    );
}
