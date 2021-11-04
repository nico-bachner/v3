import SVG from '@nico-bachner/svg-react'

type ArrowUpProps = {
    className?: string
}

const ArrowUp: React.VFC<ArrowUpProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 12, y: 19 },
                { x: 12, y: 5 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 19, y: 12 },
                { x: 12, y: 5 },
                { x: 5, y: 12 },
            ]}
        />
    </SVG.Root>
)

export default ArrowUp
