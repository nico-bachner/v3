import styles from './Input.module.css';

import { useState } from 'react';

type InputProps = {
    type:
        | 'date'
        | 'email'
        | 'number'
        | 'password'
        | 'search'
        | 'tel'
        | 'text'
        | 'time'
        | 'url';
    /*  
        | 'checkbox'
        | 'color'
        | 'file'
        | 'image'
        | 'range'
    */
    onChange?: (value: string) => void;
    required?: boolean;
    placeholder?: string;
};

const Input: React.VFC<InputProps> = ({
    type,
    onChange,
    required,
    placeholder,
}) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    return (
        <input
            type={type}
            value={value}
            required={required}
            onChange={({ target }) => {
                setValue(target.value);

                if (onChange) {
                    onChange(target.value);
                }
            }}
            placeholder={placeholder}
            className={styles[type]}
        />
    );
};

export default Input;
