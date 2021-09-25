type Coordinate = {
    x: number;
    y: number;
};

type Move = [id: 'M', to: Coordinate];
type Arc = [
    id: 'A',
    radius: Coordinate,
    rotation: number,
    arc: 0 | 1,
    sweep: 0 | 1,
    to: Coordinate
];

type Command = Move | Arc;

type PathProps = {
    commands: Command[];
};

const Path: React.VFC<PathProps> = ({ commands }) => {
    const parseCommand = (command: Command) => {
        switch (command[0]) {
            case 'M':
                return ['M', command[1].x, command[1].y].join(' ');
            case 'A':
                return [
                    'A',
                    command[1].x,
                    command[1].y,
                    command[2],
                    command[3],
                    command[4],
                    command[5].x,
                    command[5].y,
                ].join(' ');
        }
    };

    return (
        <path d={commands.map((command) => parseCommand(command)).join(' ')} />
    );
};

export default Path;
