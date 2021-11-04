type Coordinate = {
    x: number
    y: number
}

type CircleProps = {
    centre: Coordinate
    radius: number
}

const Circle: React.VFC<CircleProps> = ({ centre, radius }) => (
    <circle cx={centre.x} cy={centre.y} r={radius} />
)

export default Circle
