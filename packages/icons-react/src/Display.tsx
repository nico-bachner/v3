import SVG from '@nico-bachner/svg-react'

type DisplayProps = {
    className?: string
}

const Display: React.VFC<DisplayProps> = ({ className }) => (
    <SVG.Root className={className}>
        <path d="M2 13.381h20M8.66 19.05V22m6.84-2.95V22m-8.955 0h10.932M4 19.05h16a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13.05a2 2 0 002 2z" />
    </SVG.Root>
)

export default Display
