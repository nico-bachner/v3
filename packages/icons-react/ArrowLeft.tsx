import SVG from '@nico-bachner/svg-react';

type ArrowLeftProps = {
    className?: string;
};

const ArrowLeft: React.VFC<ArrowLeftProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 19, y: 12 },
                { x: 5, y: 12 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 12, y: 19 },
                { x: 5, y: 12 },
                { x: 12, y: 5 },
            ]}
        />
    </SVG.Root>
);

export default ArrowLeft;
