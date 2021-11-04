import SVG from '@nico-bachner/svg-react'

type SignMinusProps = {
    className?: string
}

const SignMinus: React.VFC<SignMinusProps> = ({ className }) => (
    <SVG.Root className={className}>
        <SVG.Line
            points={[
                { x: 5, y: 12 },
                { x: 19, y: 12 },
            ]}
        />
    </SVG.Root>
)

export default SignMinus
