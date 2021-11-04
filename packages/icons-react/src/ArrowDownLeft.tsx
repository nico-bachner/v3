import SVG from '@nico-bachner/svg-react'

type ArrowDownLeftProps = {
    className?: string
}

const ArrowDownLeft: React.VFC<ArrowDownLeftProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 7, y: 17 },
                { x: 17, y: 7 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 7, y: 7 },
                { x: 7, y: 17 },
                { x: 17, y: 17 },
            ]}
        />
    </SVG.Root>
)

export default ArrowDownLeft
