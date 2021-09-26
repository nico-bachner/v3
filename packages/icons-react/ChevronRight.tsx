import SVG from '@nico-bachner/svg-react';

type ChevronRightProps = {
    className?: string;
};

const ChevronRight: React.VFC<ChevronRightProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 9, y: 6 },
                { x: 15, y: 12 },
                { x: 9, y: 18 },
            ]}
        />
    </SVG.Root>
);

export default ChevronRight;
