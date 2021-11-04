import SVG from '@nico-bachner/svg-react'

type ImageProps = {
    className?: string
}

const Image: React.VFC<ImageProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Rectangle
            origin={{ x: 3, y: 3 }}
            width={18}
            height={18}
            rounded={2}
        />
        <SVG.Line
            points={[
                { x: 21, y: 15 },
                { x: 16, y: 10 },
                { x: 5, y: 21 },
            ]}
        />
        <SVG.Circle centre={{ x: 8.5, y: 8.5 }} radius={1.5} />
    </SVG.Root>
)

export default Image
