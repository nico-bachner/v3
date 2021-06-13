import styles from './Select.module.css';

interface SelectProps {
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    defaultValue?: string | number;
}

const Select: React.FC<SelectProps & DefaultProps> = (select) => (
    <select {...select} className={styles.select}>
        {select.children}
    </select>
);

export default Select;
