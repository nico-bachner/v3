import { styled } from '@nico-bachner/css'
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
                color: colors['blue'],

                transitionProperty: 'border-bottom-color',
                transitionDuration: motion.durations.fast,
                transitionTimingFunction: motion.easings.default,

                borderBottomWidth: '0.09em',
                borderBottomStyle: 'solid',
                borderBottomColor: colors['transparent'],

                '&:hover': {
                    borderBottomColor: colors['blue'],
                },
            },
            primary: {
                color: colors['neutral-10'],

                transitionProperty: 'border-bottom-color',
                transitionDuration: motion.durations.fast,
                transitionTimingFunction: motion.easings.default,

                borderBottomWidth: '0.09em',
                borderBottomStyle: 'solid',
                borderBottomColor: 'transparent',

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
    variant?: 'default' | 'highlight' | 'primary' | 'secondary' | 'disabled'
    href: string
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const Link: React.FC<LinkProps> = ({
    children,
    variant = 'default',
    href,
    onClick,
}) => {
    if (href.startsWith('/')) {
        return (
            <NextLink href={href}>
                <BaseLink variant={variant} onClick={onClick}>
                    {children}
                </BaseLink>
            </NextLink>
        )
    }

    if (href.startsWith('#')) {
        return (
            <BaseLink variant={variant} href={href} onClick={onClick}>
                {children}
            </BaseLink>
        )
    }

    return (
        <BaseLink
            variant={variant}
            href={href}
            onClick={onClick}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </BaseLink>
    )
}

export default Link
