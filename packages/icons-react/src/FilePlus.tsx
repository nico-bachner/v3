import SVG from '@nico-bachner/svg-react'

type FilePlusProps = {
    className?: string
}

const FilePlus: React.VFC<FilePlusProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Path
            commands={[
                ['M', { x: 14, y: 2 }],
                ['l', { x: 6, y: 6 }],
                ['V', 20],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: -2, y: 2 }],
                ['H', 6],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: -2, y: -2 }],
                ['V', 4],
                ['a', { x: 2, y: 2 }, 0, 0, 1, { x: 2, y: -2 }],
                ['Z'],
            ]}
        />
        <SVG.Line
            points={[
                { x: 14, y: 2 },
                { x: 14, y: 8 },
                { x: 20, y: 8 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 9, y: 14 },
                { x: 15, y: 14 },
            ]}
        />
        <SVG.Line
            points={[
                { x: 12, y: 11 },
                { x: 12, y: 17 },
            ]}
        />
    </SVG.Root>
)

export default FilePlus
