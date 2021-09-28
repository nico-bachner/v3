import SVG from '@nico-bachner/svg-react';

type ClipboardProps = {
    className?: string;
};

const Clipboard: React.VFC<ClipboardProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Rectangle
            origin={{ x: 8, y: 2 }}
            width={8}
            height={4}
            rounded={1}
        />
        <SVG.Path
            commands={[
                ['M', { x: 16, y: 4 }],
                ['h', 2],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: 2, y: 2 }],
                ['v', 14],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: -2, y: 2 }],
                ['h', -12],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: -2, y: -2 }],
                ['v', -14],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: 2, y: -2 }],
                ['h', 2],
            ]}
        />
    </SVG.Root>
);

export default Clipboard;
