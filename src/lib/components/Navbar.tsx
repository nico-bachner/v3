import { Text, Stack } from '@nico-bachner/components-react'
import { Logo } from '@nico-bachner/icons-react'
import Link from '@lib/components/Link'
import LanguageSwitch from '@lib/components/LanguageSwitch'
import ThemeSwitch from '@lib/components/ThemeSwitch'

import { styled } from '@nico-bachner/css'
import { colors, spacing, utils } from '@nico-bachner/design-tokens'
import { useRouter } from 'next/router'
import { useTranslation } from '@lib/hooks/useTranslation'

const Nav = styled('nav', {
    position: 'sticky',
    inset: spacing[0],
    zIndex: '20',

    backgroundColor: colors['inherit'],
    backdropFilter: utils.filters.blur.md,

    boxSizing: 'border-box',

    px: spacing[11],
    py: spacing[11],
    mx: spacing[0],
    my: spacing[13],

    '@sm': {
        px: spacing[12],
        py: spacing[13],
    },
})

const LogoWrapper = styled('div', {
    color: colors['neutral-10'],
    width: spacing[15],
})

const Navbar: React.VFC = () => {
    const { pathname } = useRouter()
    const { words } = useTranslation()

    return (
        <Nav>
            <Stack
                direction="row"
                justify="space-between"
                align="center"
                css={{
                    maxWidth: utils.sizes.lg,
                    mx: 'auto',
                }}
            >
                <Link href="/">
                    <LogoWrapper>
                        <Logo />
                    </LogoWrapper>
                </Link>
                <Stack
                    direction="row"
                    gap={12}
                    css={{
                        display: 'none',

                        '@sm': {
                            display: 'flex',
                        },
                    }}
                >
                    <Text weight={600}>
                        <Link
                            href="/"
                            variant={pathname != '/' ? 'primary' : 'disabled'}
                        >
                            {words.home}
                        </Link>
                    </Text>
                    <Text weight={600}>
                        <Link
                            href="/projects"
                            variant={
                                pathname != '/projects' ? 'primary' : 'disabled'
                            }
                        >
                            {words.projects}
                        </Link>
                    </Text>
                    <Text weight={600}>
                        <Link
                            href="/articles"
                            variant={
                                pathname != '/articles' ? 'primary' : 'disabled'
                            }
                        >
                            {words.articles}
                        </Link>
                    </Text>
                </Stack>
                <Stack direction="row" align="center" gap={10}>
                    <LanguageSwitch />
                    <ThemeSwitch />
                </Stack>
            </Stack>
        </Nav>
    )
}

export default Navbar
