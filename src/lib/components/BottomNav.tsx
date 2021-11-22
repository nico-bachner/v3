import { colors, spacing, utils } from '@nico-bachner/design-tokens'
import { responsive } from '@nico-bachner/css'
import { useRouter } from 'next/router'
import { useTranslation } from '@lib/hooks/useTranslation'

import { Stack, Text } from '@nico-bachner/components-react'
import Link from './Link'

const BottomNav: React.VFC = () => {
    const { pathname } = useRouter()
    const { words } = useTranslation()

    return (
        <Stack
            direction="row"
            justify="space-evenly"
            css={{
                position: 'sticky',
                bottom: spacing[0],
                zIndex: '20',

                backgroundColor: colors['inherit'],
                backdropFilter: utils.filters.blur.md,

                py: spacing[12],
                px: spacing[0],

                ...responsive({
                    md: { display: 'none' },
                }),
            }}
        >
            <Text size={4} weight={8}>
                <Link
                    href="/"
                    variant={pathname != '/' ? 'primary' : 'disabled'}
                >
                    {words.home}
                </Link>
            </Text>
            <Text size={4} weight={8}>
                <Link
                    href="/projects"
                    variant={pathname != '/projects' ? 'primary' : 'disabled'}
                >
                    {words.projects}
                </Link>
            </Text>
            <Text size={4} weight={8}>
                <Link
                    href="/articles"
                    variant={pathname != '/articles' ? 'primary' : 'disabled'}
                >
                    {words.articles}
                </Link>
            </Text>
        </Stack>
    )
}

export default BottomNav
