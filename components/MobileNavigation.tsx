import { useRouter } from 'next/router';

import type { Page } from '../lib/types';

import Link from './Link';

interface Props {
    pages: Page[];
}

export default function Navigation(props: Props) {
    const router = useRouter();

    return (
        <nav className="sticky bottom-0 z-50 flex w-screen py-8 text-sm font-bold sm:hidden glass justify-evenly">
            {props.pages.slice(0, 4).map((page, index) => {
                return (
                    <Link
                        key={index}
                        href={page.href}
                        as={'/' + page.slug}
                        className={
                            router.pathname == page.href
                                ? 'p-2 text-gray'
                                : 'p-2'
                        }
                    >
                        {page.title}
                    </Link>
                );
            })}
        </nav>
    );
}
