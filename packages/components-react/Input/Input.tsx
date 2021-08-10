import styles from './Input.module.css';

type InputProps = {
    type:
        | 'checkbox'
        | 'color'
        | 'date'
        | 'email'
        | 'file'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'search'
        | 'tel'
        | 'text'
        | 'time'
        | 'url';
    value: string;
    required: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
};

const Input: React.VFC<InputProps> = ({
    type,
    value,
    required,
    onChange,
    placeholder,
}) => (
    <input
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
    />
);

export default Input;
