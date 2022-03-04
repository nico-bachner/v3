import { colors, spacing, utils } from '@nico-bachner/design-tokens'
import { useRouter } from 'next/router'
import { useTranslation } from '@lib/hooks/useTranslation'

import { Container, Stack, Text } from '@nico-bachner/components-react'
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
                inset: spacing[10],
                zIndex: '20',

                backgroundColor: 'hsl(210deg 10% 50% / 5%)',
                backdropFilter: utils.filters.blur.md,

                display: 'flex',
                gap: spacing[8],

                wmax: 'max-content',
                mx: 'auto',

                py: spacing[8],
                px: spacing[8],
                r: spacing[10],
            }}
        >
            <Link href="/">
                <Container
                    css={{
                        backgroundColor:
                            pathname == '/'
                                ? 'hsl(210deg 10% 50% / 30%)'
                                : 'hsl(210deg 10% 50% / 10%)',

                        '&:hover': {
                            backgroundColor: 'hsl(210deg 10% 50% / 20%)',
                        },

                        py: spacing[8],
                        px: spacing[10],
                        r: spacing[9],
                    }}
                >
                    <Text size={4} weight={8}>
                        {words.home}
                    </Text>
                </Container>
            </Link>
            <Link href="/projects">
                <Container
                    css={{
                        backgroundColor:
                            pathname == '/projects'
                                ? 'hsl(210deg 10% 50% / 30%)'
                                : 'hsl(210deg 10% 50% / 10%)',

                        '&:hover': {
                            backgroundColor: 'hsl(210deg 10% 50% / 20%)',
                        },

                        py: spacing[8],
                        px: spacing[10],
                        r: spacing[9],
                    }}
                >
                    <Text size={4} weight={8}>
                        {words.projects}
                    </Text>
                </Container>
            </Link>
            <Link href="/articles">
                <Container
                    css={{
                        backgroundColor:
                            pathname == '/articles'
                                ? 'hsl(210deg 10% 50% / 30%)'
                                : 'hsl(210deg 10% 50% / 10%)',

                        '&:hover': {
                            backgroundColor: 'hsl(210deg 10% 50% / 20%)',
                        },

                        py: spacing[8],
                        px: spacing[10],
                        r: spacing[9],
                    }}
                >
                    <Text size={4} weight={8}>
                        {words.articles}
                    </Text>
                </Container>
            </Link>
        </Stack>
    )
}

export default BottomNav
