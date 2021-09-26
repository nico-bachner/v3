import SVG from '@nico-bachner/svg-react';

type ChevronUpProps = {
    className?: string;
};

const ChevronUp: React.VFC<ChevronUpProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 6, y: 15 },
                { x: 12, y: 9 },
                { x: 18, y: 15 },
            ]}
        />
    </SVG.Root>
);

export default ChevronUp;
