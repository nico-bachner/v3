import SVG from '@nico-bachner/svg-react';

type GlobeProps = {
    className?: string;
};

const Globe: React.VFC<GlobeProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Circle centre={{ x: 12, y: 12 }} radius={10} />
        <SVG.Path
            commands={[
                ['M', { x: 12, y: 22 }],
                ['A', { x: 22, y: 22 }, 0, 0, 1, { x: 12, y: 2 }],
                ['A', { x: 22, y: 22 }, 0, 0, 1, { x: 12, y: 22 }],
                ['A', { x: 11, y: 11 }, 0, 0, 1, { x: 12, y: 2 }],
                ['A', { x: 11, y: 11 }, 0, 0, 1, { x: 12, y: 22 }],
                ['M', { x: 2, y: 12 }],
                ['A', { x: 60, y: 60 }, 0, 0, 0, { x: 22, y: 12 }],
            ]}
        />
    </SVG.Root>
);

export default Globe;
