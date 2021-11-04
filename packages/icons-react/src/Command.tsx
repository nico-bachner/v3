import SVG from '@nico-bachner/svg-react'

type CommandProps = {
    className?: string
}

const Command: React.VFC<CommandProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Path
            commands={[
                ['M', { x: 9, y: 6 }],
                ['m', { x: 6, y: 0 }],
                ['a', { x: 3, y: 3 }, 0, 1, 1, { x: 3, y: 3 }],
                ['m', { x: 0, y: 6 }],
                ['a', { x: 3, y: 3 }, 0, 1, 1, { x: -3, y: 3 }],
                ['m', { x: -6, y: 0 }],
                ['a', { x: 3, y: 3 }, 0, 1, 1, { x: -3, y: -3 }],
                ['m', { x: 0, y: -6 }],
                ['a', { x: 3, y: 3 }, 0, 1, 1, { x: 3, y: -3 }],
                ['M', { x: 9, y: 6 }],
                ['v', 12],
                ['M', { x: 15, y: 6 }],
                ['v', 12],
                ['M', { x: 6, y: 9 }],
                ['h', 12],
                ['M', { x: 6, y: 15 }],
                ['h', 12],
            ]}
        />
    </SVG.Root>
)

export default Command
