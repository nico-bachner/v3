import styles from './Select.module.css';

type Option = {
    value: string | number;
    content?: string | number;
};

type SelectProps = {
    options: Option[];
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    className?: string;
};

const Select: React.VFC<SelectProps> = ({
    options,
    value,
    onChange,
    className,
}) => (
    <select
        className={[styles.select, className].join(' ')}
        value={value}
        onChange={onChange}
    >
        {options.map(({ value, content }) => (
            <option key={value} value={value}>
                {content}
            </option>
        ))}
    </select>
);

export default Select;
