import SVG from '@nico-bachner/svg-react';

type FileProps = {
    className?: string;
};

const File: React.VFC<FileProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Path
            commands={[
                ['M', { x: 14, y: 2 }],
                ['l', { x: 6, y: 6 }],
                ['V', 20],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: -2, y: 2 }],
                ['H', 6],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: -2, y: -2 }],
                ['V', 4],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: 2, y: -2 }],
                ['Z'],
            ]}
        />
        <SVG.Line
            points={[
                { x: 14, y: 2 },
                { x: 14, y: 8 },
                { x: 20, y: 8 },
            ]}
        />
    </SVG.Root>
);

export default File;
