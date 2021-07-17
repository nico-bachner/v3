import styles from './Select.module.css';

interface SelectProps {
    value?: string;
    onChange?: (event: React.ChangeEvent<SelectProps>) => void;
}

const Select: React.FC<SelectProps> = ({ children, ...select }) => (
    <select className={styles.select} {...select}>
        {children}
    </select>
);

export default Select;
