import SVG from '@nico-bachner/svg-react';

type ArrowUpRightProps = {
    className?: string;
};

const ArrowUpRight: React.VFC<ArrowUpRightProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 17, y: 7 },
                { x: 7, y: 17 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 17, y: 17 },
                { x: 17, y: 7 },
                { x: 7, y: 7 },
            ]}
        />
    </SVG.Root>
);

export default ArrowUpRight;
