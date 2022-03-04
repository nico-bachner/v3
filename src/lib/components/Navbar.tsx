import { Container, Text, Stack } from '@nico-bachner/components-react'
import { Logo } from '@nico-bachner/icons-react'
import Link from './Link'
import LanguageSwitch from '@lib/components/LanguageSwitch'
import ThemeSwitch from '@lib/components/ThemeSwitch'

import { responsive } from '@nico-bachner/css'
import { colors, spacing, utils } from '@nico-bachner/design-tokens'
import { useRouter } from 'next/router'
import { useTranslation } from '@lib/hooks/useTranslation'

const Navbar: React.VFC = () => {
    const { pathname } = useRouter()
    const { words } = useTranslation()

    const links = [
        { path: '/', title: words.home },
        { path: '/projects', title: words.projects },
        { path: '/articles', title: words.articles },
    ]

    return (
        <Container
            as="nav"
            css={{
                inset: spacing[0],
                z: 20,

                backgroundColor: colors['inherit'],
                backdropFilter: utils.filters.blur.md,

                boxSizing: 'border-box',

                mx: spacing[0],
                my: spacing[13],

                ...responsive({
                    sm: { px: spacing[11], py: spacing[11] },
                    md: {
                        px: spacing[12],
                        py: spacing[13],
                    },
                }),
            }}
        >
            <Stack
                direction="row"
                justify="space-between"
                align="center"
                css={{
                    wmax: utils.sizes.lg,
                    mx: 'auto',
                }}
            >
                <Link href="/">
                    <Container
                        css={{
                            color: colors['neutral-10'],
                            width: spacing[15],
                        }}
                    >
                        <Logo />
                    </Container>
                </Link>
                <Stack
                    direction="row"
                    gap={12}
                    css={responsive({
                        sm: { display: 'none' },
                        md: { display: 'flex' },
                    })}
                >
                    {links.map((link) => (
                        <Text weight={8} key={link.path}>
                            <Link
                                href={link.path}
                                variant={
                                    pathname != link.path
                                        ? 'primary'
                                        : 'disabled'
                                }
                            >
                                {link.title}
                            </Link>
                        </Text>
                    ))}
                </Stack>
                <Stack direction="row" align="center" gap={10}>
                    <LanguageSwitch />
                    <ThemeSwitch />
                </Stack>
            </Stack>
        </Container>
    )
}

export default Navbar
