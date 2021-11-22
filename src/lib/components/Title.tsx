import { Text } from '@nico-bachner/components-react'

type TitleProps = {
    title: string
    subtitle?: React.ReactNode
}

const Title: React.VFC<TitleProps> = ({ title, subtitle }) => (
    <>
        <Text type="h1" width="sm" margin={[0, subtitle ? 0 : 12]}>
            {title}
        </Text>

        {subtitle ? (
            <Text size={6} weight={7} width="sm" margin={[5, 12]}>
                {subtitle}
            </Text>
        ) : null}
    </>
)

export default Title
