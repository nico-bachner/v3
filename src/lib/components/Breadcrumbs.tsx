import { spacing } from '@nico-bachner/design-tokens'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Container, Stack, Text } from '@nico-bachner/components-react'
import Link from './Link'

type Breadcrumb = {
    title: string
    href: string
}

const Breadcrumbs: React.VFC = () => {
    const { asPath } = useRouter()

    const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[] | null>(null)

    useEffect(() => {
        const [pathNoAnchor] = asPath.split('#')
        const [pathNoQuery] = pathNoAnchor!.split('?')
        const path = pathNoQuery!.split('/')

        const breadcrumbs = path.map((item, index) => {
            const title = index == 0 ? 'Home' : item.replace(/-/g, ' ')
            const href = index == 0 ? '/' : path.slice(0, index + 1).join('/')

            return {
                title,
                href,
            }
        })

        setBreadcrumbs(breadcrumbs)
    }, [asPath])

    return (
        <Stack as="nav" direction="row" gap={8}>
            {breadcrumbs?.map(({ title, href }, index) => (
                <Text key={href} type="p" transform="capitalize">
                    {index != 0 && (
                        <Container
                            as="span"
                            css={{
                                mr: spacing[8],
                            }}
                        >
                            /
                        </Container>
                    )}
                    <Link variant="highlight" href={href}>
                        {title}
                    </Link>
                </Text>
            ))}
        </Stack>
    )
}

export default Breadcrumbs
