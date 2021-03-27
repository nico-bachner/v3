import { useRouter } from 'next/router';

import type { Page } from '../lib/types';

import Link from './Link';
import Logo from './Logo';

interface Props {
    pages: Page[];
}

export default function Navigation(props: Props) {
    const router = useRouter();
    const locale = router.locale;

    return (
        <nav className="top-0 z-50 flex items-center max-w-4xl p-8 mx-auto my-4 space-x-8 font-medium text-gray-darkest dark:text-gray-lightest sm:my-8 sm:sticky glass">
            <a href="/" className="flex-grow">
                <Logo className="w-12 h-12" />
            </a>
            <p className="hidden space-x-8 text-lg sm:flex">
                {props.pages.slice(0, 4).map((page, index) => {
                    return (
                        <Link
                            key={index}
                            href={page.href}
                            className={
                                router.pathname == page.href
                                    ? 'text-gray cursor-default'
                                    : 'hover:text-black dark:hover:text-white'
                            }
                        >
                            {page.title}
                        </Link>
                    );
                })}
            </p>
            <label htmlFor="#language-select" className="sr-only">
                {locale == 'lu'
                    ? 'Sprooch ännern'
                    : locale == 'de'
                    ? 'Sprache ändern'
                    : locale == 'fr'
                    ? 'Changer la langue'
                    : locale == 'da'
                    ? 'Ændrere sprog'
                    : 'Change language'}
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
    );
}
