import { useRouter } from 'next/router';
import { useI18n } from '@lib/hooks/i18n';

import Link from './Link';
import Logo from './Logo';
import Select from './Select';

interface Props {
    pages: Page[];
}

const Navigation: React.VFC<Props> = ({ pages }) => {
    const i18n = useI18n();
    const router = useRouter();

    return (
        <nav className="top-0 z-50 px-6 py-4 my-8 font-medium sm:sticky sm:py-8 glass text-stronger">
            <div className="flex items-center justify-between max-w-[52rem] mx-auto">
                <Link href="/" className="w-[3.4rem]">
                    <Logo />
                </Link>
                <div className="justify-end flex-grow hidden mx-8 space-x-8 sm:flex sm:text-lg">
                    {pages.slice(0, 4).map((page, index) => {
                        return (
                            <Link
                                key={index}
                                href={page.href}
                                className={
                                    router.pathname == page.href
                                        ? 'text-light cursor-default'
                                        : 'hover:underline'
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
                <Select
                    id="language-select"
                    onChange={(item) => {
                        router.push(router.pathname, router.pathname, {
                            locale: item.target.value,
                        });
                    }}
                    defaultValue={router.locale}
                >
                    {router.locales?.map((language, index) => (
                        <option key={index} value={language}>
                            {language.toUpperCase()}
                        </option>
                    ))}
                </Select>
            </div>
        </nav>
    );
};

export default Navigation;
