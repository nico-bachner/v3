import SVG from '@nico-bachner/svg-react';

type ChevronDownProps = {
    className?: string;
};

const ChevronDown: React.VFC<ChevronDownProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 6, y: 9 },
                { x: 12, y: 15 },
                { x: 18, y: 9 },
            ]}
        />
    </SVG.Root>
);

export default ChevronDown;
