import { useRouter } from 'next/router';
import Link from './Link';

import type { Links } from '../lib/types';

interface Props {
    pages: Links;
    links: Links;
}

export default function Footer(props: Props) {
    return (
        <footer className="mx-auto my-12 mb-24 max-w-prose">
            <hr />
            <nav className="grid grid-cols-2 my-16 gap-y-12 gap-x-6 sm:grid-cols-4">
                <div className="grid grid-flow-col grid-rows-4 gap-4">
                    {props.pages.slice(0, 4).map((page, index) => {
                        return (
                            <p key={index} className="text-left">
                                <Link
                                    href={page.href}
                                    className="text-gray hover:text-gray-dark dark:hover:text-gray-light"
                                >
                                    {page.title}
                                </Link>
                            </p>
                        );
                    })}
                </div>
                <div className="grid grid-flow-col grid-rows-4 gap-4">
                    {props.pages.slice(4, 8).map((page, index) => {
                        return (
                            <p key={index} className="text-right sm:text-left">
                                <Link
                                    href={page.href}
                                    className="text-gray hover:text-gray-dark dark:hover:text-gray-light"
                                >
                                    {page.title}
                                </Link>
                            </p>
                        );
                    })}
                </div>
                <div className="grid grid-flow-col grid-rows-4 gap-4">
                    {props.links.slice(4, 8).map((link, index) => {
                        return (
                            <p key={index} className="text-left sm:text-right">
                                <Link
                                    href={link.href}
                                    className="text-gray hover:text-gray-dark dark:hover:text-gray-light"
                                >
                                    {link.title}
                                </Link>
                            </p>
                        );
                    })}
                </div>
                <div className="grid grid-flow-col grid-rows-4 gap-4">
                    {props.links.slice(0, 4).map((link, index) => {
                        return (
                            <p key={index} className="text-right">
                                <Link
                                    href={link.href}
                                    className="text-gray hover:text-gray-dark dark:hover:text-gray-light"
                                >
                                    {link.title}
                                </Link>
                            </p>
                        );
                    })}
                </div>
            </nav>
        </footer>
    );
}
