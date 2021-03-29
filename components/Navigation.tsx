import { useRouter } from 'next/router';
import { useI18n } from '../hooks/i18n';
import { translations } from '../i18n';

import type { Links } from '../lib/types';

import Link from './Link';
import Logo from './Logo';

interface Props {
    pages: Links;
}

export default function Navigation(props: Props) {
    const i18n = useI18n(translations, 'en');
    const router = useRouter();

    return (
        <nav className="top-0 z-50 my-8 font-medium sm:sticky glass">
            <div className="flex items-center max-w-4xl p-6 mx-auto space-x-8">
                <a
                    href="/"
                    className="flex-grow text-gray-darkest dark:text-gray-lightest"
                >
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
                                        : 'text-gray-darkest dark:text-gray-lightest hover:text-black dark:hover:text-white'
                                }
                            >
                                {page.title}
                            </Link>
                        );
                    })}
                </p>
                <label htmlFor="#language-select" className="sr-only">
                    {i18n.actions.changeLanguage}
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
            </div>
        </nav>
    );
}
