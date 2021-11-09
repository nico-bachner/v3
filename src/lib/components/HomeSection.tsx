import { Grid, Section, Spacer, Text } from '@nico-bachner/components-react'
import MDX from '@nico-bachner/mdx'
import Link from './Link'

import { useTranslation } from '@lib/hooks/useTranslation'

import type { MDXContent } from '@nico-bachner/mdx/utils'

type HomeSectionProps = {
    id: string
    title: string
    content: MDXContent
    items?: React.ReactNode
    href?: string
}

const HomeSection: React.VFC<HomeSectionProps> = ({
    id,
    title,
    content,
    items,
    href,
}) => {
    const { actions } = useTranslation()

    return (
        <Section id={id}>
            <Text type="h2">{title}</Text>

            <MDX content={content} />

            {items && href ? (
                <>
                    <Spacer y={10} />

                    <Grid gap={10}>{items}</Grid>

                    <Spacer y={12} />

                    <Text align="right" transform="capitalize">
                        <Link href={href} variant="highlight">
                            {actions.view_all}
                        </Link>
                    </Text>
                </>
            ) : undefined}
        </Section>
    )
}

export default HomeSection
