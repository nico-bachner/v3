import NextLink from 'next/link';

export interface LinkProps {
    href: string;
    as?: string;
    className?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
}

export default function Link(props: React.PropsWithChildren<LinkProps>) {
    if (props.href.startsWith('/')) {
        return (
            <NextLink {...props}>
                <a className={props.className ?? 'text-azure hover:underline'}>
                    {props.children}
                </a>
            </NextLink>
        );
    }
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className={props.className ?? 'text-azure hover:underline'}
        >
            {props.children}
        </a>
    );
}
