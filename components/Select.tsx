import styles from './Select.module.css';

interface SelectProps {
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    defaultValue?: string | number;
}

const Select: React.FC<SelectProps & DefaultProps> = (select) => (
    <select
        {...select}
        className={`py-1 pl-3 pr-8 text-center transition border rounded hover:border-strong ${styles.select}`}
    >
        {select.children}
    </select>
);

export default Select;
