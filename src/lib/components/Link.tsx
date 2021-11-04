import { Link as BaseLink } from '@nico-bachner/components-react'

type LinkProps = {
    variant?: 'default' | 'highlight' | 'primary' | 'secondary' | 'disabled'
    href: string
}

const Link: React.FC<LinkProps> = ({ children, variant, href }) => (
    <BaseLink
        href={href}
        variant={variant}
        onClick={() => {
            fetch(`/api/click`, {
                method: 'POST',
                body: JSON.stringify({
                    href: encodeURIComponent(href),
                }),
            })
        }}
    >
        {children}
    </BaseLink>
)

export default Link
