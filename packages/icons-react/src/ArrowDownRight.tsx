import SVG from '@nico-bachner/svg-react'

type ArrowDownRightProps = {
    className?: string
}

const ArrowDownRight: React.VFC<ArrowDownRightProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 7, y: 7 },
                { x: 17, y: 17 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 7, y: 17 },
                { x: 17, y: 17 },
                { x: 17, y: 7 },
            ]}
        />
    </SVG.Root>
)

export default ArrowDownRight
