import { styled, linearGradient } from '@nico-bachner/css'
import { colors, motion } from '@nico-bachner/design-tokens'

import NextLink from 'next/link'
import React from 'react'

const BaseLink = styled('a', {
    cursor: 'pointer',
    color: 'inherit',
    textDecoration: 'inherit',

    variants: {
        variant: {
            default: {
                color: 'inherit',
            },
            highlight: {
                color: colors['blue-7'],

                transitionProperty: 'border-bottom-color',
                transitionDuration: motion.durations.fast,
                transitionTimingFunction: motion.easings.default,

                borderBottom: ['0.09em', 'solid', 'transparent'].join(' '),

                '&:hover': {
                    borderBottomColor: colors['blue-7'],
                },
            },
            primary: {
                color: colors['neutral-10'],

                transitionProperty: 'border-bottom-color',
                transitionDuration: motion.durations.fast,
                transitionTimingFunction: motion.easings.default,

                borderBottom: ['0.09em', 'solid', 'transparent'].join(' '),

                '&:hover': {
                    borderBottomColor: colors['neutral-10'],
                },
            },
            secondary: {
                color: colors['neutral-8'],

                transitionProperty: 'color',
                transitionDuration: motion.durations.fast,
                transitionTimingFunction: motion.easings.default,

                '&:hover': {
                    color: colors['neutral-10'],
                },
            },
            disabled: {
                cursor: 'default',
                color: colors['neutral-6'],
            },
        },
    },
})

type LinkProps = {
    href: string
} & React.ComponentProps<typeof BaseLink>

const Link: React.FC<LinkProps> = ({
    children,
    variant = 'default',
    href,
    ...props
}) => {
    if (href.startsWith('/')) {
        return (
            <NextLink href={href}>
                <BaseLink href={href} variant={variant} {...props}>
                    {children}
                </BaseLink>
            </NextLink>
        )
    }

    if (href.startsWith('#')) {
        return (
            <BaseLink variant={variant} href={href} {...props}>
                {children}
            </BaseLink>
        )
    }

    return (
        <BaseLink
            variant={variant}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {children}
        </BaseLink>
    )
}

export default Link
