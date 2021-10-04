import { Link as BaseLink } from '@nico-bachner/components-react';

const Link: typeof BaseLink = ({
    children,
    href,
    variant = 'default',
    className,
}) => (
    <BaseLink
        href={href}
        variant={variant}
        onClick={() => {
            fetch(`/api/click`, {
                method: 'POST',
                body: JSON.stringify({
                    href: encodeURIComponent(href),
                }),
            });
        }}
        className={className}
    >
        {children}
    </BaseLink>
);

export default Link;
