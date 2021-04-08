import Link from './Link';

import type { Links } from '../lib/types';

interface Props {
    pages: Links;
    links: Links;
}

export default function Footer(props: Props) {
    return (
        <footer className="grid gap-12 mx-auto mt-20 mb-28 sm:grid-cols-2">
            <nav className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-4">
                {props.pages.map((page, index) => {
                    return (
                        <Link
                            key={index}
                            href={page.href}
                            className={
                                'sm:text-lg transition duration-300 ease-in-out transform text-gray-light hover:text-gray-strong hover:-translate-y-0.5' +
                                ' ' +
                                (index < 4
                                    ? 'text-left'
                                    : 'text-right sm:text-center')
                            }
                        >
                            {page.title}
                        </Link>
                    );
                })}
            </nav>
            <nav className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-4">
                {props.links.map((link, index) => {
                    return (
                        <Link
                            key={index}
                            href={link.href}
                            className={
                                'sm:text-lg transition duration-300 ease-in-out transform text-gray-light hover:text-gray-strong hover:-translate-y-0.5' +
                                ' ' +
                                (index < 4
                                    ? 'text-left sm:text-center'
                                    : 'text-right')
                            }
                        >
                            {link.title}
                        </Link>
                    );
                })}
            </nav>
        </footer>
    );
}
