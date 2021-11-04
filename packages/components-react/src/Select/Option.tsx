type OptionProps = {
    value: string
    label?: string
}

const Option: React.FC<OptionProps> = ({ children, value, label }) => (
    <option value={value} label={label}>
        {children}
    </option>
)

export default Option
