import SVG from '@nico-bachner/svg-react';

type BookProps = {
    className?: string;
};

const Book: React.VFC<BookProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Path
            commands={[
                ['M', { x: 20, y: 22 }],
                ['L', { x: 6.5, y: 22 }],
                ['A', { x: 2.5, y: 2.5 }, 0, 0, 1, { x: 6.5, y: 17 }],
                ['L', { x: 20, y: 17 }],
                ['M', { x: 20, y: 22 }],
                ['L', { x: 20, y: 2 }],
                ['L', { x: 6.5, y: 2 }],
                ['A', { x: 2.5, y: 2.5 }, 0, 0, 0, { x: 4, y: 4.5 }],
                ['L', { x: 4, y: 19.5 }],
            ]}
        />
    </SVG.Root>
);

export default Book;
