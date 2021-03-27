import Link from './Link';

import type { Page } from '../lib/types';

interface Props {
    pages: Page[];
}

export default function Footer(props: Props) {
    return (
        <nav className="grid grid-cols-2 gap-y-12 gap-x-4 sm:grid-cols-4 text-gray">
            <div className="grid gap-4">
                {props.pages.slice(0, 4).map((page, index) => {
                    return (
                        <p key={index} className="text-left">
                            <Link
                                href={page.href}
                                as={page.slug ? '/' + page.slug : '/'}
                                className="hover:text-gray-dark dark:hover:text-gray-light"
                            >
                                {page.title}
                            </Link>
                        </p>
                    );
                })}
            </div>
            <div className="grid gap-4">
                {props.pages.slice(4, 8).map((item, index) => {
                    return (
                        <p key={index} className="text-right sm:text-center">
                            <Link
                                href={item.href}
                                className="hover:text-gray-dark dark:hover:text-gray-light"
                            >
                                {item.title}
                            </Link>
                        </p>
                    );
                })}
            </div>
            <div className="grid gap-4">
                {props.pages.slice(8, 12).map((item, index) => {
                    return (
                        <p key={index} className="text-left sm:text-center">
                            <Link
                                href={item.href}
                                className="hover:text-gray-dark dark:hover:text-gray-light"
                            >
                                {item.title}
                            </Link>
                        </p>
                    );
                })}
            </div>
            <div className="grid gap-4">
                {props.pages.slice(12, 16).map((link, index) => {
                    return (
                        <p key={index} className="text-right">
                            <Link
                                href={link.href}
                                className="hover:text-gray-dark dark:hover:text-gray-light"
                            >
                                {link.title}
                            </Link>
                        </p>
                    );
                })}
            </div>
        </nav>
    );
}
