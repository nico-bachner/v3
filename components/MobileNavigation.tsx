import { useRouter } from 'next/router';

import type { Page } from '../lib/types';

import InternalLink from './InternalLink';

interface Props {
    pages: Array<Page>;
}

export default function Navigation(props: Props) {
    const router = useRouter();

    return (
        <nav className="sticky bottom-0 z-50 flex w-screen py-8 text-sm font-bold sm:hidden glass justify-evenly">
            {props.pages.map((page, index) => {
                return (
                    <InternalLink
                        key={index}
                        href={page.href}
                        as={page.slug != undefined ? '/' + page.slug : '/'}
                        className={
                            router.pathname == page.href
                                ? 'p-2 text-gray'
                                : 'p-2'
                        }
                    >
                        {page.title}
                    </InternalLink>
                );
            })}
        </nav>
    );
}
