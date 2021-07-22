import styles from './Select.module.css';

type Option = {
    value: string | number;
    content?: string | number;
};

type SelectProps = {
    options: Option[];
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

const Select: React.VFC<SelectProps> = ({ options, value, onChange }) => (
    <select className={styles.select} value={value} onChange={onChange}>
        {options.map(({ value, content }) => (
            <option key={value} value={value}>
                {content}
            </option>
        ))}
    </select>
);

export default Select;
