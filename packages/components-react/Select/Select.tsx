import styles from './Select.module.css';

type SelectRootProps = {
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    className?: string;
};

const Root: React.FC<SelectRootProps> = ({
    children,
    value,
    onChange,
    className,
}) => (
    <select
        className={[styles.select, className].join(' ')}
        value={value}
        onChange={onChange}
    >
        {children}
    </select>
);

type SelectOptionProps = {
    value: string;
    className?: string;
};

const Option: React.FC<SelectOptionProps> = ({
    children,
    value,
    className,
}) => (
    <option value={value} className={[styles.option, className].join(' ')}>
        {children}
    </option>
);

const Select = {
    Root,
    Option,
};

export default Select;
