import SVG from '@nico-bachner/svg-react';

type GitHubProps = {
    className?: string;
};

const GitHub: React.VFC<GitHubProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Path
            commands={[
                ['M', { x: 15.5, y: 22 }],
                ['V', 19],
                ['A', { x: 5, y: 5 }, 0, 0, 0, { x: 14.5, y: 15.5 }],
                [
                    'C',
                    { x: 18, y: 15.5 },
                    { x: 21.5, y: 14 },
                    { x: 21.5, y: 8.5 },
                ],
                ['A', { x: 5, y: 5 }, 0, 0, 0, { x: 20, y: 5 }],
                ['A', { x: 5, y: 5 }, 0, 0, 0, { x: 20, y: 1 }],
                ['A', { x: 8, y: 8 }, 0, 0, 0, { x: 16, y: 2.5 }],
                ['A', { x: 14, y: 14 }, 0, 0, 0, { x: 8, y: 2.5 }],
                ['A', { x: 8, y: 8 }, 0, 0, 0, { x: 4, y: 1 }],
                ['A', { x: 5, y: 5 }, 0, 0, 0, { x: 4, y: 5 }],
                ['A', { x: 5, y: 5 }, 0, 0, 0, { x: 2.5, y: 8.5 }],
                [
                    'C',
                    { x: 2.5, y: 14 },
                    { x: 6, y: 15.5 },
                    { x: 9.5, y: 15.5 },
                ],
                ['A', { x: 5, y: 5 }, 0, 0, 0, { x: 8.5, y: 19 }],
                ['V', 22],
                ['M', { x: 8.5, y: 19 }],
                ['c', { x: -5, y: 1.5 }, { x: -5, y: -2.5 }, { x: -7, y: -3 }],
            ]}
        />
    </SVG.Root>
);

export default GitHub;
