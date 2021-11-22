import { styled } from '@nico-bachner/css'
import { colors, spacing, typography } from '@nico-bachner/design-tokens'
import { useState } from 'react'

const BaseTextInput = styled('input', {
    appearance: 'none',
    outline: 'none',

    px: spacing[10],
    py: spacing[8],
    r: spacing[5],

    fontFamily: typography.fonts.sans,
    fontWeight: typography.fontWeights[5],
    fontSize: typography.fontSizes[4],
    lineHeight: typography.lineHeights[0],

    color: colors['neutral-9'],
    backgroundColor: 'transparent',
    backdropFilter: 'blur(20px)',

    '&::placeholder': {
        color: colors['neutral-7'],
    },

    border: '1px solid',
    borderColor: colors['neutral-5'],

    '&:hover': {
        borderColor: colors['neutral-7'],
    },

    '&:focus': {
        borderColor: colors['neutral-9'],
    },
})

type TextInputProps = {
    type: 'email' | 'password' | 'search' | 'text' | 'url'
    onChange?: (value: string) => void
    name?: string
    required?: boolean
    placeholder?: string
}

const TextInput: React.VFC<TextInputProps> = ({
    type,
    onChange,
    required,
    placeholder,
}) => {
    const [value, setValue] = useState('')

    return (
        <BaseTextInput
            type={type}
            value={value}
            required={required}
            onChange={({ target }) => {
                setValue(target.value)

                if (onChange) {
                    onChange(target.value)
                }
            }}
            placeholder={placeholder}
        />
    )
}

export default TextInput
