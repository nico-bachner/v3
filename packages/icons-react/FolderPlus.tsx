import SVG from '@nico-bachner/svg-react';

type FolderPlusProps = {
    className?: string;
};

const FolderPlus: React.VFC<FolderPlusProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Path
            commands={[
                ['M', { x: 8, y: 3 }],
                ['l', { x: 2, y: 2 }],
                ['H', 20],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: 2, y: 2 }],
                ['V', 19],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: -2, y: 2 }],
                ['H', 4],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: -2, y: -2 }],
                ['V', 5],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: 2, y: -2 }],
                ['Z'],
            ]}
        />
        <SVG.Line
            points={[
                { x: 9, y: 13 },
                { x: 15, y: 13 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 12, y: 10 },
                { x: 12, y: 16 },
            ]}
        />
    </SVG.Root>
);

export default FolderPlus;
