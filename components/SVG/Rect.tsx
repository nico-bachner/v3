type Coordinate = {
    x: number;
    y: number;
};

type RectProps = {
    width: number;
    height: number;
    centre: Coordinate;
    fill?: boolean;
};

const Rect: React.VFC<RectProps> = ({
    width,
    height,
    centre,
    fill = false,
}) => (
    <rect
        x={centre.x - width / 2}
        y={centre.y - height / 2}
        width={width}
        height={height}
        fill={fill ? 'currentColor' : 'none'}
    />
);

export default Rect;
