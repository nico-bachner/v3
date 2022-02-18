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
                color: colors['blue-6'],

                transitionProperty: 'color',
                transitionDuration: motion.durations.fast,
                transitionTimingFunction: motion.easings.default,

                '&:hover': {
                    color: colors['cyan-6'],
                },
            },
            primary: {
                color: colors['neutral-10'],
                $$underlineColor: colors['neutral-10'],

                '&::after': {
                    content: '',
                    display: 'block',
                    width: '100%',
                    height: '2pt',
                    background: '$$underlineColor',
                    transform: 'scaleX(0)',
                    transformOrigin: '100% 50%',
                    transitionProperty: 'transform',
                    transitionDuration: motion.durations.medium,
                    transitionTimingFunction: motion.easings.default,
                },

                '&:hover': {
                    '&::after': {
                        transform: 'scaleX(1)',
                        transformOrigin: '0% 50%',
                    },
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
