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
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
};

const Input: React.VFC<InputProps> = ({
    type,
    value,
    onChange,
    placeholder,
}) => (
    <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
    />
);

export default Input;
