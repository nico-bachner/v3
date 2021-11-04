import { styled } from '@nico-bachner/css'
import { colors, spacing } from '@nico-bachner/design-tokens'

import { useState } from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from '@nico-bachner/icons-react'

const BaseCheckbox = styled(CheckboxPrimitive.Root, {
    appearance: 'none',

    width: spacing[11],
    height: spacing[11],
    p: spacing[1],
    m: spacing[0],
    r: spacing[4],

    border: '1px solid',
    borderColor: colors['neutral-6'],

    '&:hover': {
        borderColor: colors['neutral-8'],
    },
})

const Indicator = styled(CheckboxPrimitive.Indicator, {
    '& > svg': {
        strokeWidth: '2.5',
    },
})

type CheckboxProps = {
    defaultValue?: boolean
    onChange?: (checked: boolean | undefined) => void
    name?: string
    required?: boolean
    id?: string
}

const Checkbox: React.VFC<CheckboxProps> = ({
    defaultValue,
    onChange,
    name,
    required,
    id,
}) => {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>(
        defaultValue ?? 'indeterminate'
    )

    return (
        <BaseCheckbox
            checked={checked}
            onCheckedChange={(checked) => {
                setChecked(checked)

                if (onChange) {
                    checked == 'indeterminate'
                        ? onChange(undefined)
                        : onChange(checked)
                }
            }}
            name={name}
            required={required}
            id={id}
            css={{
                color: checked ? colors['neutral-0'] : colors['neutral-10'],
                backgroundColor: checked
                    ? colors['neutral-10']
                    : colors['neutral-0'],
            }}
        >
            <Indicator>
                <Check />
            </Indicator>
        </BaseCheckbox>
    )
}

export default Checkbox
