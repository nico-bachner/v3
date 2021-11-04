type OptionGroupProps = {
    label?: string
}

const OptionGroup: React.FC<OptionGroupProps> = ({ children, label }) => (
    <optgroup label={label}>{children}</optgroup>
)

export default OptionGroup
