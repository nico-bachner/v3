import {
    Button,
    Container,
    Grid,
    Stack,
    Text,
} from '@nico-bachner/components-react'
import ComponentPage from '@lib/components/ComponentPage'

import { spacing } from 'packages/design-tokens/tokens'
import { responsive } from '@nico-bachner/css'

import type { NextPage } from 'next'

const ButtonPage: NextPage = () => (
    <ComponentPage
        title="Button"
        subtitle="For clicking and such..."
        width="sm"
    >
        <Text type="h2" margin={[15, 11]}>
            Sizes
        </Text>

        <Stack direction="row" align="center" gap={10}>
            {['sm', 'md', 'lg'].map((size) => (
                <Button key={size} size={size as 'sm' | 'md' | 'lg'}>
                    Click Me
                </Button>
            ))}
        </Stack>

        <Text type="h2" margin={[15, 11]}>
            Variants
        </Text>

        <Stack direction="row" align="center" gap={10}>
            {['primary', 'secondary', 'blue', 'red', 'cyan'].map((variant) => (
                <Button
                    key={variant}
                    variant={
                        variant as
                            | 'primary'
                            | 'secondary'
                            | 'blue'
                            | 'red'
                            | 'cyan'
                    }
                >
                    Click Me
                </Button>
            ))}
        </Stack>
    </ComponentPage>
)

export default ButtonPage
