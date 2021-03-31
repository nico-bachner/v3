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
        <nav className="top-0 z-50 px-6 py-8 my-4 font-medium sm:my-8 sm:sticky glass">
            <div className="flex items-center justify-between max-w-[52rem] mx-auto">
                <a
                    href="/"
                    className="text-gray-stronger hover:text-gray-strongest"
                >
                    <Logo className="w-12 h-12" />
                </a>
                <div className="justify-end flex-grow hidden mx-8 space-x-8 text-lg sm:flex">
                    {props.pages.slice(0, 4).map((page, index) => {
                        return (
                            <Link
                                key={index}
                                href={page.href}
                                className={
                                    router.pathname == page.href
                                        ? 'text-gray-light'
                                        : 'text-gray-stronger hover:text-gray-strongest'
                                }
                            >
                                {page.title}
                            </Link>
                        );
                    })}
                </div>
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
