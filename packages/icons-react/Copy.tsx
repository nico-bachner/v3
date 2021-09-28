import SVG from '@nico-bachner/svg-react';

type CopyProps = {
    className?: string;
};

const Copy: React.VFC<CopyProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Rectangle
            origin={{ x: 9, y: 9 }}
            width={13}
            height={13}
            rounded={2}
        />
        <SVG.Path
            commands={[
                ['M', { x: 7, y: 15 }],
                ['L', { x: 5, y: 15 }],
                ['A', { x: 2, y: 2 }, 0, 0, 1, { x: 3, y: 13 }],
                ['L', { x: 3, y: 5 }],
                ['A', { x: 2, y: 2 }, 0, 0, 1, { x: 5, y: 3 }],
                ['L', { x: 13, y: 3 }],
                ['A', { x: 2, y: 2 }, 0, 0, 1, { x: 15, y: 5 }],
                ['L', { x: 15, y: 7 }],
            ]}
        />
    </SVG.Root>
);

export default Copy;
