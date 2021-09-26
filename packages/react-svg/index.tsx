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

type RectProps = {
    origin: Coordinate;
    width: number;
    height: number;
    radius?: Coordinate;
};

const Rect: React.VFC<RectProps> = ({ origin, width, height, radius }) => (
    <rect
        x={origin.x}
        y={origin.y}
        width={width}
        height={height}
        rx={radius?.x}
        ry={radius?.y}
    />
);

type Move = [id: 'M' | 'm', to: Coordinate];
type Line = [id: 'L' | 'l', to: Coordinate];
type Horizontal = [id: 'H' | 'h', to: number];
type Vertical = [id: 'V' | 'v', to: number];
type Arc = [
    id: 'A' | 'a',
    radius: Coordinate,
    rotation: number,
    arc: 0 | 1,
    sweep: 0 | 1,
    to: Coordinate
];
type Return = [id: 'Z'];

type Command = Move | Line | Horizontal | Vertical | Arc | Return;

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
    Path,
    Rect,
};

export default SVG;
