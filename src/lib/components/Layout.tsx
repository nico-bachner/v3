import { Container, Divider } from '@nico-bachner/components-react'
import Navbar from '@lib/components/Navbar'
import BottomNav from '@lib/components/BottomNav'
import Footer from '@lib/components/Footer'
import Breadcrumbs from '@lib/components/Breadcrumbs'

import { responsive } from '@nico-bachner/css'
import { spacing, utils } from '@nico-bachner/design-tokens'

import type { CSS } from '@nico-bachner/css'
import type { Size } from '@nico-bachner/design-tokens'

type LayoutProps = {
    breadcrumbs?: boolean
    width?: Size
    css?: CSS
}

const Layout: React.FC<LayoutProps> = ({
    children,
    breadcrumbs = true,
    width = 'sm',
    css,
}) => {
    return (
        <>
            <Navbar />

            {breadcrumbs && (
                <Container
                    css={{
                        wmax: utils.sizes.sm,
                        mx: 'auto',
                        mb: spacing[8],

                        ...responsive({
                            sm: { px: spacing[11] },
                            md: { px: spacing[12] },
                            lg: { px: spacing[13] },
                        }),
                    }}
                >
                    <Breadcrumbs />
                </Container>
            )}

            <Container
                as="main"
                css={{
                    wmax: utils.sizes[width],
                    mx: 'auto',
                    mb: spacing[17],

                    ...responsive({
                        sm: { px: spacing[11] },
                        md: { px: spacing[12] },
                        lg: { px: spacing[13] },
                    }),

                    ...css,
                }}
            >
                {children}
            </Container>

            <Container
                css={{
                    wmax: utils.sizes.sm,
                    mx: 'auto',

                    ...responsive({
                        sm: { px: spacing[11] },
                        md: { px: spacing[12] },
                        lg: { px: spacing[13] },
                    }),
                }}
            >
                <Divider />
                <Footer />
            </Container>

            <BottomNav />
        </>
    )
}

export default Layout
