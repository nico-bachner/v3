import SVG from '@nico-bachner/svg-react';

type ArrowUpLeftProps = {
    className?: string;
};

const ArrowUpLeft: React.VFC<ArrowUpLeftProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 7, y: 7 },
                { x: 17, y: 17 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 7, y: 17 },
                { x: 7, y: 7 },
                { x: 17, y: 7 },
            ]}
        />
    </SVG.Root>
);

export default ArrowUpLeft;
