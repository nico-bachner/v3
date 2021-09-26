import SVG from '@nico-bachner/svg-react';

type BookOpenProps = {
    className?: string;
};

const BookOpen: React.VFC<BookOpenProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Path
            commands={[
                ['M', { x: 12, y: 21 }],
                ['v', -14],
                ['a', { x: 4, y: 4 }, 0, 0, 0, { x: -4, y: -4 }],
                ['H', 2],
                ['M', { x: 12, y: 21 }],
                ['a', { x: 4, y: 4 }, 0, 0, 0, { x: -4, y: -4 }],
                ['H', 2],
                ['v', -14],
                ['M', { x: 12, y: 21 }],
                ['v', -14],
                ['a', { x: 4, y: 4 }, 0, 0, 1, { x: 4, y: -4 }],
                ['H', 22],
                ['M', { x: 12, y: 21 }],
                ['a', { x: 4, y: 4 }, 0, 0, 1, { x: 4, y: -4 }],
                ['H', 22],
                ['v', -14],
            ]}
        />
    </SVG.Root>
);

export default BookOpen;
