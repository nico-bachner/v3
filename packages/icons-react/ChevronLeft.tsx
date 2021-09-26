import SVG from '@nico-bachner/svg-react';

type ChevronLeftProps = {
    className?: string;
};

const ChevronLeft: React.VFC<ChevronLeftProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 15, y: 6 },
                { x: 9, y: 12 },
                { x: 15, y: 18 },
            ]}
        />
    </SVG.Root>
);

export default ChevronLeft;
