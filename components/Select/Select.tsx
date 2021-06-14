import styles from './Select.module.css';

interface SelectProps {
    id?: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    defaultValue?: string | number;
}

const Select: React.FC<SelectProps> = ({
    id,
    onChange,
    defaultValue,
    children,
}) => (
    <select
        id={id}
        className={styles.select}
        onChange={onChange}
        defaultValue={defaultValue}
    >
        {children}
    </select>
);

export default Select;
