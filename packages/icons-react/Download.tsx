import SVG from '@nico-bachner/svg-react';

type DownloadProps = {
    className?: string;
};

const Download: React.VFC<DownloadProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 12, y: 15 },
                { x: 12, y: 3 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 7, y: 10 },
                { x: 12, y: 15 },
                { x: 17, y: 10 },
            ]}
        />
        <SVG.Path
            commands={[
                ['M', { x: 3, y: 15 }],
                ['v', 4],
                ['a', { x: 2, y: 2 }, 0, 0, 0, { x: 2, y: 2 }],
                ['h', 14],
                ['a', { x: 2, y: 2 }, 0, 0, 0, { x: 2, y: -2 }],
                ['v', -4],
            ]}
        />
    </SVG.Root>
);

export default Download;
