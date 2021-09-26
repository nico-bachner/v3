import SVG from '@nico-bachner/svg-react';

type CheckProps = {
    className?: string;
};

const Check: React.VFC<CheckProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 20, y: 6 },
                { x: 9, y: 17 },
                { x: 4, y: 12 },
            ]}
        />
    </SVG.Root>
);

export default Check;
