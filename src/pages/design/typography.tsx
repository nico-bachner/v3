import { List, Text } from '@nico-bachner/components-react'
import Head from '@lib/components/Head'
import Layout from '@lib/components/Layout'
import Link from '@lib/components/Link'

import type { NextPage } from 'next'

const Typography: NextPage = () => (
    <Layout width="sm">
        <Head
            title="Typography - Nico Design"
            description="Nico Bachner's Design System"
        />

        <Text type="h1" width="sm">
            Typography
        </Text>

        <Text size={6} width="sm" margin={[6, 14]}>
            Typography presets
        </Text>

        <Text width="sm" margin={10}></Text>

        <List.Root>
            <List.Item>
                <Link
                    href="https://github.com/nico-bachner/v3/blob/main/packages/design-tokens/src/typography.css"
                    variant="highlight"
                >
                    Design Tokens
                </Link>
            </List.Item>
            <List.Item>
                <Link href="/design/components/Text" variant="highlight">
                    Text Component
                </Link>
            </List.Item>
        </List.Root>
    </Layout>
)

export default Typography
