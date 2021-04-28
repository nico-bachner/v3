import { useRouter } from 'next/router';

import type { Page } from '../content/i18n';

import Link from './Link';

interface Props {
    pages: Page[];
}

const MobileNavigation = ({ pages }: Props) => {
    const router = useRouter();

    return (
        <nav className="sticky bottom-0 z-50 flex w-full py-8 sm:hidden glass justify-evenly">
            {pages.slice(0, 4).map((page, index) => {
                return (
                    <Link
                        key={index}
                        href={page.href}
                        className={`p-2 text-sm font-bold ${
                            router.pathname == page.href
                                ? 'text-light'
                                : 'text-stronger'
                        }`}
                    >
                        {page.title}
                    </Link>
                );
            })}
        </nav>
    );
};

export default MobileNavigation;
