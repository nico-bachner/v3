import SVG from '@nico-bachner/svg-react'

type HeadphonesProps = {
    className?: string
}

const Headphones: React.VFC<HeadphonesProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Rectangle
            origin={{ x: 3, y: 14 }}
            width={5}
            height={7}
            rounded={2}
        />
        <SVG.Rectangle
            origin={{ x: 16, y: 14 }}
            width={5}
            height={7}
            rounded={2}
        />
        <SVG.Path
            commands={[
                ['M', { x: 3, y: 18 }],
                ['V', 12],
                ['A', { x: 9, y: 9 }, 0, 0, 1, { x: 21, y: 12 }],
                ['V', 18],
            ]}
        />
    </SVG.Root>
)

export default Headphones
