type PathProps = {
    commands: string[];
    fill?: boolean;
};

const Path: React.VFC<PathProps> = ({ commands, fill = false }) => (
    <path d={commands.join(' ')} fill={fill ? 'currentColor' : 'none'} />
);

export default Path;
