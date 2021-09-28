type Coordinate = {
    x: number;
    y: number;
};

type RootProps = {
    width?: number;
    height?: number;
    thickness?: number;
    className?: string;
};

const Root: React.FC<RootProps> = ({
    children,
    width = 24,
    height = 24,
    thickness = 1.5,
    className,
}) => (
    <svg
        viewBox={[0, 0, width, height].join(' ')}
        fill="none"
        stroke="currentColor"
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {children}
    </svg>
);

type LineProps = {
    points: Coordinate[];
};

const Line: React.VFC<LineProps> = ({ points }) => (
    <polyline points={points.map(({ x, y }) => [x, y].join(',')).join(' ')} />
);

type CircleProps = {
    centre: Coordinate;
    radius: number;
};

const Circle: React.VFC<CircleProps> = ({ centre, radius }) => (
    <circle cx={centre.x} cy={centre.y} r={radius} />
);

type RectProps = {
    origin: Coordinate;
    width: number;
    height: number;
    rounded?: number;
};

const Rectangle: React.VFC<RectProps> = ({
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
);

type Move = ['M' | 'm', Coordinate];
type Line = ['L' | 'l', Coordinate];
type Horizontal = ['H' | 'h', number];
type Vertical = ['V' | 'v', number];
type CubicBezier = ['C' | 'c', Coordinate, Coordinate, Coordinate];
type SmoothBezier = ['S' | 's', Coordinate, Coordinate];
type Arc = ['A' | 'a', Coordinate, number, 0 | 1, 0 | 1, Coordinate];
type Return = ['Z'];

type Command =
    | Move
    | Line
    | Horizontal
    | Vertical
    | CubicBezier
    | SmoothBezier
    | Arc
    | Return;

type PathProps = {
    commands: Command[];
};

const Path: React.VFC<PathProps> = ({ commands }) => {
    const parseCommand = (command: Command) => {
        switch (command[0]) {
            case 'M':
            case 'm':
                return [command[0], command[1].x, command[1].y].join(' ');
            case 'L':
            case 'l':
                return [command[0], command[1].x, command[1].y].join(' ');
            case 'H':
            case 'h':
                return [command[0], command[1]].join(' ');
            case 'V':
            case 'v':
                return [command[0], command[1]].join(' ');
            case 'C':
            case 'c':
                return [
                    command[0],
                    command[1].x,
                    command[1].y,
                    command[2].x,
                    command[2].y,
                    command[3].x,
                    command[3].y,
                ].join(' ');
            case 'S':
            case 's':
                return [
                    command[0],
                    command[1].x,
                    command[1].y,
                    command[2].x,
                    command[2].y,
                ].join(' ');
            case 'A':
            case 'a':
                return [
                    command[0],
                    command[1].x,
                    command[1].y,
                    command[2],
                    command[3],
                    command[4],
                    command[5].x,
                    command[5].y,
                ].join(' ');
            case 'Z':
                return 'Z';
        }
    };

    return (
        <path d={commands.map((command) => parseCommand(command)).join(' ')} />
    );
};

const SVG = {
    Root,
    Line,
    Circle,
    Rectangle,
    Path,
};

export default SVG;
