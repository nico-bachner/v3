type Coordinate = {
    x: number
    y: number
}

type RectangleProps = {
    origin: Coordinate
    width: number
    height: number
    rounded?: number
}

const Rectangle: React.VFC<RectangleProps> = ({
    origin,
    width,
    height,
    rounded,
}) => (
    <rect
        x={origin.x}
        y={origin.y}
        width={width}
        height={height}
        rx={rounded}
        ry={rounded}
    />
)

export default Rectangle
