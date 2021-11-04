import { colors, spacing, utils } from '@nico-bachner/design-tokens'
import { useRouter } from 'next/router'
import { useTranslation } from '@lib/hooks/useTranslation'

import { Text, Stack } from '@nico-bachner/components-react'
import Link from '@lib/components/Link'

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

                py: spacing[13],
                px: spacing[0],

                '@sm': {
                    display: 'none',
                },
            }}
        >
            <Text weight={800}>
                <Link
                    href="/"
                    variant={pathname != '/' ? 'primary' : 'disabled'}
                >
                    {words.home}
                </Link>
            </Text>
            <Text weight={800}>
                <Link
                    href="/projects"
                    variant={pathname != '/projects' ? 'primary' : 'disabled'}
                >
                    {words.projects}
                </Link>
            </Text>
            <Text weight={800}>
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
