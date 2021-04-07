import { useRouter } from 'next/router';
import Link from './Link';

import type { Links } from '../lib/types';

interface Props {
    pages: Links;
    links: Links;
}

export default function Footer(props: Props) {
    return (
        <footer className="max-w-2xl mx-auto my-12 mb-24">
            <hr />
            <nav className="grid gap-12 my-16 sm:grid-cols-2">
                <div className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-4">
                    {props.pages.map((page, index) => {
                        return (
                            <p
                                key={index}
                                className={
                                    'transition duration-300 ease-in-out transform text-gray-light hover:text-gray-strong hover:-translate-y-0.5' +
                                    ' ' +
                                    (index < 4
                                        ? 'text-left'
                                        : 'text-right sm:text-center')
                                }
                            >
                                <Link href={page.href}>{page.title}</Link>
                            </p>
                        );
                    })}
                </div>
                <div className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-4">
                    {props.links.map((link, index) => {
                        return (
                            <p
                                key={index}
                                className={
                                    'transition duration-300 ease-in-out transform text-gray-light hover:text-gray-strong hover:-translate-y-0.5' +
                                    ' ' +
                                    (index < 4
                                        ? 'text-left sm:text-center'
                                        : 'text-right')
                                }
                            >
                                <Link href={link.href}>{link.title}</Link>
                            </p>
                        );
                    })}
                </div>
            </nav>
        </footer>
    );
}
