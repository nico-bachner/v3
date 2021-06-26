type Coordinate = {
    x: number;
    y: number;
};

type CircleProps = {
    centre: Coordinate;
    radius: number;
    fill?: boolean;
};

const Circle: React.VFC<CircleProps> = ({ centre, radius, fill = false }) => (
    <circle
        cx={centre.x}
        cy={centre.y}
        r={radius}
        fill={fill ? 'currentColor' : 'none'}
    />
);

export default Circle;
