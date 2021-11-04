import SVG from '@nico-bachner/svg-react'

type ArrowDownProps = {
    className?: string
}

const ArrowDown: React.VFC<ArrowDownProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 12, y: 5 },
                { x: 12, y: 19 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 5, y: 12 },
                { x: 12, y: 19 },
                { x: 19, y: 12 },
            ]}
        />
    </SVG.Root>
)

export default ArrowDown
