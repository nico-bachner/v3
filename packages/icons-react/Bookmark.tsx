import SVG from '@nico-bachner/svg-react';

type BookmarkProps = {
    className?: string;
};

const Bookmark: React.VFC<BookmarkProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Path
            commands={[
                ['M', { x: 5, y: 21 }],
                ['V', 5],
                ['A', { x: 2, y: 2 }, 0, 0, 1, { x: 7, y: 3 }],
                ['H', 17],
                ['A', { x: 2, y: 2 }, 0, 0, 1, { x: 19, y: 5 }],
                ['V', 21],
                ['L', { x: 12, y: 16 }],
                ['Z'],
            ]}
        />
    </SVG.Root>
);

export default Bookmark;
