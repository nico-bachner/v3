import { useRouter } from 'next/router';
import { useI18n } from '../hooks/i18n';
import { translations } from '../content/i18n';

import type { Page } from '../content/i18n';

import Link from './Link';
import Logo from './Logo';

interface Props {
    pages: Page[];
}

const Navigation = ({ pages }: Props) => {
    const i18n = useI18n(translations, 'en');
    const router = useRouter();

    return (
        <nav className="sticky top-0 z-50 px-6 py-4 my-8 font-medium sm:py-8 glass">
            <div className="flex items-center justify-between max-w-[52rem] mx-auto">
                <a
                    href="/"
                    className="transition duration-300 w-12 h-12 ease-in-out transform text-gray-stronger hover:-translate-y-0.5"
                >
                    <Logo />
                </a>
                <div className="justify-end flex-grow hidden mx-8 space-x-8 sm:flex sm:text-lg">
                    {pages.slice(0, 4).map((page, index) => {
                        return (
                            <Link
                                key={index}
                                href={page.href}
                                className={
                                    router.pathname == page.href
                                        ? 'text-gray-light cursor-default'
                                        : 'text-gray-stronger transition duration-300 ease-in-out transform hover:-translate-y-0.5'
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
                    className="py-1 pl-3 pr-8 text-center bg-transparent border rounded appearance-none cursor-pointer hover:border-strong"
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
};

export default Navigation;
