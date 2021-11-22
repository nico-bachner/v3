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

    return (
        <Container
            as="nav"
            css={{
                inset: spacing[0],
                z: '20',

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
                        position: 'sticky',
                    },
                }),
            }}
        >
            <Stack
                direction="row"
                justify="space-between"
                align="center"
                css={{
                    wmax: utils.sizes.md,
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
                    <Text weight={7}>
                        <Link
                            href="/"
                            variant={pathname != '/' ? 'primary' : 'disabled'}
                        >
                            {words.home}
                        </Link>
                    </Text>
                    <Text weight={7}>
                        <Link
                            href="/projects"
                            variant={
                                pathname != '/projects' ? 'primary' : 'disabled'
                            }
                        >
                            {words.projects}
                        </Link>
                    </Text>
                    <Text weight={7}>
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
        </Container>
    )
}

export default Navbar
