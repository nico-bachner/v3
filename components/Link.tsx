import NextLink from 'next/link';

interface Props {
    href: string;
    as?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function Link(props: Props) {
    if (props.href.startsWith('/')) {
        return (
            <NextLink href={props.href} as={props.as}>
                <a className={props.className}>{props.children}</a>
            </NextLink>
        );
    }
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className={props.className}
        >
            {props.children}
        </a>
    );
}
