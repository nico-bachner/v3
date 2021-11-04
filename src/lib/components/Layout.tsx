import { Divider } from '@nico-bachner/components-react'
import Navbar from '@lib/components/Navbar'
import BottomNav from '@lib/components/BottomNav'
import Footer from '@lib/components/Footer'
import Breadcrumbs from '@lib/components/Breadcrumbs'

import { styled, responsive } from '@nico-bachner/css'
import { spacing, utils } from '@nico-bachner/design-tokens'

import type { CSS } from '@nico-bachner/css'
import type { Size } from '@nico-bachner/design-tokens'

const Container = styled('div', {
    mx: 'auto',

    ...responsive({
        sm: { px: spacing[11] },
        md: { px: spacing[12] },
        lg: { px: spacing[13] },
    }),
})

type LayoutProps = {
    home?: boolean
    width?: Size
    css?: CSS
}

const Layout: React.FC<LayoutProps> = ({
    children,
    home = false,
    width = 'sm',
    css,
}) => {
    return (
        <div>
            <Navbar />

            {!home && (
                <Container
                    css={{
                        mb: spacing[8],
                        maxWidth: utils.sizes.sm,
                    }}
                >
                    <Breadcrumbs />
                </Container>
            )}

            <Container
                as="main"
                css={{
                    maxWidth: utils.sizes[width],
                    mb: spacing[17],

                    ...css,
                }}
            >
                {children}
            </Container>

            <Container css={{ maxWidth: utils.sizes.sm }}>
                <Divider />
                <Footer />
            </Container>

            <BottomNav />
        </div>
    )
}

export default Layout
