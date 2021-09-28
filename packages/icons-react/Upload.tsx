import SVG from '@nico-bachner/svg-react';

type UploadProps = {
    className?: string;
};

const Upload: React.VFC<UploadProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 12, y: 15 },
                { x: 12, y: 3 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 7, y: 8 },
                { x: 12, y: 3 },
                { x: 17, y: 8 },
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

export default Upload;
