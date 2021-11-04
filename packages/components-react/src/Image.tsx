import NextImage from 'next/image'

import { styled } from '@nico-bachner/css'

import type { CSS } from '@nico-bachner/css'

const BaseImage = styled(NextImage, {
    display: 'block',
    width: '100%',
})

type ImageProps = {
    src: string
    alt: string
    width: number
    height: number
    css?: CSS
}

const Image: React.VFC<ImageProps> = ({ src, alt, width, height, css }) => (
    <BaseImage src={src} alt={alt} width={width} height={height} css={css} />
)

export default Image
