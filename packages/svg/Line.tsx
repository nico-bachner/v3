type Coordinate = {
    x: number;
    y: number;
};

type LineProps = {
    from: Coordinate;
    to: Coordinate;
};

const Line: React.VFC<LineProps> = ({ from, to }) => (
    <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
);

export default Line;
