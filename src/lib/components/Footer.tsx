import { spacing } from '@nico-bachner/design-tokens'
import { responsive } from '@nico-bachner/css'
import { useTranslation } from '@lib/hooks/useTranslation'

import { Grid, Text, Stack } from '@nico-bachner/components-react'
import Link from './Link'

const Footer: React.VFC = () => {
    const { words } = useTranslation()

    return (
        <Grid
            as="footer"
            gap={12}
            css={{
                mt: spacing[16],
                mb: spacing[18],

                ...responsive({
                    sm: { gridTemplateColumns: '1fr 1fr' },
                    lg: { gridTemplateColumns: '1fr 1fr 1fr 1fr' },
                }),
            }}
        >
            <Stack
                gap={10}
                css={{
                    textAlign: 'left',
                }}
            >
                <Text>
                    <Text type="strong">Main</Text>
                </Text>
                <Text>
                    <Link href="/" variant="secondary">
                        {words.home}
                    </Link>
                </Text>
                <Text>
                    <Link href="/projects" variant="secondary">
                        {words.projects}
                    </Link>
                </Text>
                <Text>
                    <Link href="/articles" variant="secondary">
                        {words.articles}
                    </Link>
                </Text>
            </Stack>
            <Stack
                gap={10}
                css={responsive({
                    sm: { textAlign: 'right' },
                    lg: { textAlign: 'center' },
                })}
            >
                <Text>
                    <Text type="strong">Assorted</Text>
                </Text>
                <Text>
                    <Link href="/design" variant="secondary">
                        {words.design}
                    </Link>
                </Text>
                <Text>
                    <Link href="/visitors" variant="secondary">
                        {words.visitors}
                    </Link>
                </Text>
            </Stack>
            <Stack
                gap={10}
                css={responsive({
                    sm: { textAlign: 'left' },
                    lg: { textAlign: 'center' },
                })}
            >
                <Text>
                    <Text type="strong">Social</Text>
                </Text>
                <Text>
                    <Link
                        href="https://github.com/nico-bachner"
                        variant="secondary"
                    >
                        GitHub
                    </Link>
                </Text>
            </Stack>
            <Stack
                gap={10}
                css={{
                    textAlign: 'right',
                }}
            >
                <Text>
                    <Text type="strong">Other</Text>
                </Text>
                <Text>
                    <Link
                        href="https://github.com/nico-bachner/v3"
                        variant="secondary"
                    >
                        {words.source_code}
                    </Link>
                </Text>
                <Text>
                    <Link
                        href="https://read.cv/nico_bachner"
                        variant="secondary"
                    >
                        {words.cv}
                    </Link>
                </Text>
            </Stack>
        </Grid>
    )
}

export default Footer
