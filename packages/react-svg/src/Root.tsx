type RootProps = {
    width?: number
    height?: number
    thickness?: number
    className?: string
}

const Root: React.FC<RootProps> = ({
    children,
    width = 24,
    height = 24,
    thickness = 1.5,
    className,
}) => (
    <svg
        viewBox={[0, 0, width, height].join(' ')}
        fill="none"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        {children}
    </svg>
)

export default Root
