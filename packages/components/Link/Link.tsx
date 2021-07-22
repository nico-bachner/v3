import classes from './Link.module.css';

import NextLink from 'next/link';

type LinkProps = {
    href: string;
    variant?: 'highlight' | 'primary' | 'secondary' | 'disabled';
    className?: string;
};

const Link: React.FC<LinkProps> = ({ children, href, variant, className }) => (
    <NextLink href={href}>
        {href.startsWith('/') || href.startsWith('#') ? (
            <a
                className={[
                    classes.link,
                    classes[variant as string],
                    className,
                ].join(' ')}
            >
                {children}
            </a>
        ) : (
            <a
                target="_blank"
                rel="noopener noreferrer"
                className={[
                    classes.link,
                    classes[variant as string],
                    className,
                ].join(' ')}
            >
                {children}
            </a>
        )}
    </NextLink>
);

export default Link;
