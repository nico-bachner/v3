import styles from './Select.module.css';

import { ChevronDown } from '@nico-bachner/icons-react';

type RootProps = {
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    className?: string;
};

const Root: React.FC<RootProps> = ({
    children,
    value,
    onChange,
    className,
}) => (
    <div className={[styles.container, className].join(' ')}>
        <select value={value} onChange={onChange} className={styles.select}>
            {children}
        </select>
        <div className={styles.icon}>
            <ChevronDown />
        </div>
    </div>
);

type OptionGroupProps = {
    label: string;
    className?: string;
};

const OptionGroup: React.FC<OptionGroupProps> = ({
    children,
    label,
    className,
}) => (
    <optgroup
        label={label}
        className={[styles.optionGroup, className].join(' ')}
    >
        {children}
    </optgroup>
);

type OptionProps = {
    value: string;
    label?: string;
    className?: string;
};

const Option: React.FC<OptionProps> = ({
    children,
    value,
    label,
    className,
}) => (
    <option
        value={value}
        label={label}
        className={[styles.option, className].join(' ')}
    >
        {children}
    </option>
);

const Select = {
    Root,
    OptionGroup,
    Option,
};

export default Select;
