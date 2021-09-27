import SVG from '@nico-bachner/svg-react';

type CodeProps = {
    className?: string;
};

const Code: React.VFC<CodeProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 16, y: 18 },
                { x: 22, y: 12 },
                { x: 16, y: 6 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 8, y: 6 },
                { x: 2, y: 12 },
                { x: 8, y: 18 },
            ]}
        />
    </SVG.Root>
);

export default Code;
