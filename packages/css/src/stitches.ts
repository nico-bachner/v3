import { createStitches } from '@stitches/react'

import type { CSS, PropertyValue } from '@stitches/react'

const { styled, css, keyframes, globalCss, getCssText, createTheme } =
    createStitches({
        media: {
            sm: '(min-width: 0px)',
            md: '(min-width: 640px)',
            lg: '(min-width: 1024px)',
            light: '(prefers-color-scheme: light)',
            dark: '(prefers-color-scheme: dark)',
            hover: '(any-hover: hover)',
            motion: '(prefers-reduced-motion)',
        },
        utils: {
            // padding
            p: (value: PropertyValue<'padding'>) => ({
                padding: value,
            }),
            px: (value: PropertyValue<'paddingLeft'>) => ({
                paddingLeft: value,
                paddingRight: value,
            }),
            py: (value: PropertyValue<'paddingTop'>) => ({
                paddingTop: value,
                paddingBottom: value,
            }),
            pt: (value: PropertyValue<'paddingTop'>) => ({
                paddingTop: value,
            }),
            pr: (value: PropertyValue<'paddingRight'>) => ({
                paddingRight: value,
            }),
            pb: (value: PropertyValue<'paddingBottom'>) => ({
                paddingBottom: value,
            }),
            pl: (value: PropertyValue<'paddingLeft'>) => ({
                paddingLeft: value,
            }),

            // margin
            m: (value: PropertyValue<'margin'>) => ({
                margin: value,
            }),
            mx: (value: PropertyValue<'marginLeft'>) => ({
                marginLeft: value,
                marginRight: value,
            }),
            my: (value: PropertyValue<'marginTop'>) => ({
                marginTop: value,
                marginBottom: value,
            }),
            mt: (value: PropertyValue<'marginTop'>) => ({
                marginTop: value,
            }),
            mr: (value: PropertyValue<'marginRight'>) => ({
                marginRight: value,
            }),
            mb: (value: PropertyValue<'marginBottom'>) => ({
                marginBottom: value,
            }),
            ml: (value: PropertyValue<'marginLeft'>) => ({
                marginLeft: value,
            }),

            // border
            r: (value: PropertyValue<'borderRadius'>) => ({
                borderRadius: value,
            }),

            // width
            w: (value: PropertyValue<'width'>) => ({
                width: value,
            }),
            wmax: (value: PropertyValue<'width'>) => ({
                maxWidth: value,
            }),
            wmin: (value: PropertyValue<'width'>) => ({
                minWidth: value,
            }),

            // height
            h: (value: PropertyValue<'height'>) => ({
                height: value,
            }),
            hmax: (value: PropertyValue<'height'>) => ({
                maxHeight: value,
            }),
            hmin: (value: PropertyValue<'height'>) => ({
                minHeight: value,
            }),

            // z-index
            z: (value: number) => ({
                zIndex: value,
            }),
        },
    })

export type { CSS }

export { styled, css, keyframes, globalCss, getCssText, createTheme }
