import { useRouter } from 'next/router';

import type { Page } from '../i18n';

import Link from './Link';

interface Props {
    pages: Page[];
}

export default function Navigation(props: Props) {
    const router = useRouter();

    return (
        <nav className="sticky bottom-0 z-50 flex w-full py-8 sm:hidden glass justify-evenly">
            {props.pages.slice(0, 4).map((page, index) => {
                return (
                    <Link
                        key={index}
                        href={page.href}
                        className={`p-2 text-sm font-bold ${
                            router.pathname == page.href
                                ? 'text-gray-light'
                                : 'text-gray-stronger'
                        }`}
                    >
                        {page.title}
                    </Link>
                );
            })}
        </nav>
    );
}
