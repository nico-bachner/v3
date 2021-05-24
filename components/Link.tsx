import NextLink, { LinkProps as NextLinkProps } from 'next/link';

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

const Link: React.FC<LinkProps> = (props) => {
    if (props.href.startsWith('/')) {
        return (
            <NextLink {...props}>
                <a className={props.className ?? 'text-azure hover:underline'}>
                    {props.children}
                </a>
            </NextLink>
        );
    } else {
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
};

export default Link;
