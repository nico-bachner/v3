/* ---- svg wrapper ---- */

interface SVGProps {
    width: number;
    height: number;
}

const SVG: React.FC<SVGProps> = ({ width, height, children }) => (
    <svg
        viewBox={`0 0 ${width} ${height}`}
        fill="currentColor"
        stroke="currentColor"
        className="w-full h-full"
    >
        {children}
    </svg>
);

export default SVG;

/* ---- svg elements ---- */

interface Coordinate {
    x: number;
    y: number;
}

type CommandType = 'M' | 'L' | 'Q' | 'A' | 'Z';

interface Command {
    type: CommandType;
    args: number[];
}

interface PathProps {
    commands: Command[];
    stroke?: string;
    strokeWidth?: number;
    strokeLinecap?: 'butt' | 'round' | 'square';
    fill?: string;
    className?: string;
}

export const Path: React.VFC<PathProps> = ({
    commands,
    stroke,
    strokeWidth,
    strokeLinecap,
    fill,
    className,
}) => (
    <path
        d={commands
            .map((command) => [command.type, ...command.args].join(' '))
            .join(' ')}
        stroke={stroke ?? 'currentColor'}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        fill={fill ?? 'none'}
        className={className}
    />
);

interface CircleProps {
    centre: Coordinate;
    radius: number;
    strokeWidth?: number;
    fill?: string;
    className?: string;
}

export const Circle: React.VFC<CircleProps> = ({
    centre,
    radius,
    strokeWidth,
    fill,
    className,
}) => (
    <circle
        cx={centre.x}
        cy={centre.y}
        r={radius}
        strokeWidth={strokeWidth ?? 1}
        fill={fill ?? 'none'}
        className={className}
    />
);
