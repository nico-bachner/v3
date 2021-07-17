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
    placeholder: string;
};

const Input: React.VFC<InputProps> = ({ type, placeholder }) => (
    <input className={styles.input} type={type} placeholder={placeholder} />
);

export default Input;
