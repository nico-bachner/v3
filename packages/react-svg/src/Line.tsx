type Coordinate = {
    x: number
    y: number
}

type LineProps = {
    points: Coordinate[]
}

const Line: React.VFC<LineProps> = ({ points }) => (
    <polyline points={points.map(({ x, y }) => [x, y].join(',')).join(' ')} />
)

export default Line
