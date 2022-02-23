import { Card, Link, Text } from '@nico-bachner/components-react'

import { colors } from '@nico-bachner/design-tokens/tokens'
import dynamic from 'next/dynamic'

type IconCardProps = {
    slug?: string
}

const IconCard: React.VFC<IconCardProps> = ({ slug }) => {
    const Icon = dynamic(() => import(`@nico-bachner/icons-react/src/${slug}`))

    return (
        <Link
            key={slug}
            href={`https://github.com/nico-bachner/v3/blob/main/packages/icons-react/src/${slug}.tsx`}
        >
            <Card
                variant="interactive"
                css={{
                    color: colors['neutral-10'],
                }}
            >
                <Icon />

                <Text size={4} align="center">
                    {slug?.replace(/([a-z0–9])([A-Z])/g, '$1 $2')}
                </Text>
            </Card>
        </Link>
    )
}

export default IconCard
