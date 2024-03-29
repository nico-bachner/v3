import SVG from '@nico-bachner/svg-react'

type LogoProps = {
    className?: string
}

const Logo: React.VFC<LogoProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Path
            commands={[
                ['M', { x: 8, y: 12 }],
                ['A', { x: 2, y: 2 }, 0, 0, 1, { x: 6, y: 14 }],
                ['A', { x: 4, y: 4 }, 0, 1, 0, { x: 10, y: 18 }],
                ['A', { x: 2, y: 2 }, 0, 0, 1, { x: 12, y: 16 }],
                ['A', { x: 4, y: 4 }, 0, 0, 0, { x: 16, y: 12 }],
            ]}
            draw={{ duration: 900 }}
        />
        <SVG.Path
            commands={[
                ['M', { x: 16, y: 12 }],
                ['A', { x: 2, y: 2 }, 0, 0, 1, { x: 18, y: 10 }],
                ['A', { x: 4, y: 4 }, 0, 1, 0, { x: 14, y: 6 }],
                ['A', { x: 2, y: 2 }, 0, 0, 1, { x: 12, y: 8 }],
                ['A', { x: 4, y: 4 }, 0, 0, 0, { x: 8, y: 12 }],
            ]}
            draw={{ duration: 900 }}
        />
        <SVG.Path
            commands={[
                ['M', { x: 18, y: 4.5 }],
                ['A', { x: 1.5, y: 1.5 }, 0, 0, 0, { x: 18, y: 7.5 }],
                ['A', { x: 1.5, y: 1.5 }, 0, 0, 0, { x: 18, y: 4.5 }],
            ]}
            draw={{ duration: 600, delay: 1200 }}
        />
        <SVG.Path
            commands={[
                ['M', { x: 12, y: 10.5 }],
                ['A', { x: 1.5, y: 1.5 }, 0, 0, 0, { x: 12, y: 13.5 }],
                ['A', { x: 1.5, y: 1.5 }, 0, 0, 0, { x: 12, y: 10.5 }],
            ]}
            draw={{ duration: 600, delay: 1200 }}
        />
        <SVG.Path
            commands={[
                ['M', { x: 6, y: 16.5 }],
                ['A', { x: 1.5, y: 1.5 }, 0, 0, 0, { x: 6, y: 19.5 }],
                ['A', { x: 1.5, y: 1.5 }, 0, 0, 0, { x: 6, y: 16.5 }],
            ]}
            draw={{ duration: 600, delay: 1200 }}
        />
        <SVG.Path
            commands={[
                ['M', { x: 16, y: 12 }],
                ['A', { x: 4, y: 4 }, 0, 0, 0, { x: 12, y: 8 }],
            ]}
            draw={{ duration: 300, delay: 2100 }}
        />
    </SVG.Root>
)

export default Logo
