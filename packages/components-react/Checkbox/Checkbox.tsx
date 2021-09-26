import styles from './Checkbox.module.css';

import * as BaseCheckbox from '@radix-ui/react-checkbox';
import { Check } from '@nico-bachner/icons-react';

type CheckboxProps = {
    checked: boolean | undefined;
    onCheckedChange: (checked: boolean | undefined) => void;
    name: string;
    required: boolean;
    id?: string;
    className?: string;
};

const Checkbox: React.VFC<CheckboxProps> = ({
    checked,
    onCheckedChange,
    name,
    required,
    id,
    className,
}) => (
    <BaseCheckbox.Root
        checked={checked ?? 'indeterminate'}
        onCheckedChange={(checked) => {
            if (checked == 'indeterminate') {
                onCheckedChange(undefined);
            } else {
                onCheckedChange(checked);
            }
        }}
        name={name}
        required={required}
        id={id}
        className={[styles.root, className].join(' ')}
    >
        <BaseCheckbox.Indicator className={styles.content}>
            <Check />
        </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
);

export default Checkbox;
